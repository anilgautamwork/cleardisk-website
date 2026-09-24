import handler from 'vinext/server/fetch-handler';
import { DownloadMetrics } from './download-metrics';
import {
  aggregateDays,
  authorized,
  downloadEvent,
  kinds,
  recentDays,
  visitEvent,
  type Kind,
  type Source,
} from '../lib/download-metrics';
import { dashboard } from './dashboard';
export { DownloadMetrics };
type Env = {
  ASSETS: Fetcher;
  DOWNLOAD_METRICS: DurableObjectNamespace<DownloadMetrics>;
  ANALYTICS_PASSWORD?: string;
  LICENSES?: KVNamespace;
};
const today = () => new Date().toISOString().slice(0, 10);
function count(env: Env, ctx: ExecutionContext, kind: Kind, source: Source) {
  ctx.waitUntil(
    env.DOWNLOAD_METRICS.getByName(kind + ':' + today())
      .record(source)
      .catch(() => console.error('Metrics write failed: ' + kind)),
  );
}
/** Live licenses issued from Stripe sessions, all time. Refunds are not subtracted. */
async function purchaseCount(kv?: KVNamespace): Promise<number | null> {
  if (!kv) return null;
  try {
    let n = 0,
      cursor: string | undefined;
    do {
      const page = await kv.list({ prefix: 'session:cs_live_', cursor });
      n += page.keys.length;
      cursor = page.list_complete ? undefined : page.cursor;
    } while (cursor);
    return n;
  } catch {
    return null;
  }
}
const privateHeaders = {
  'Cache-Control': 'private, no-store',
  'X-Robots-Tag': 'noindex, nofollow',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
  Vary: 'Authorization',
};
async function githubCount(): Promise<number | null> {
  try {
    const response = await fetch(
      'https://api.github.com/repos/anilgautamwork/cleardisk-app/releases?per_page=100',
      {
        headers: {
          'User-Agent': 'ClearDisk-Analytics',
          Accept: 'application/vnd.github+json',
        },
        cf: { cacheTtl: 300, cacheEverything: true },
        signal: AbortSignal.timeout(5000),
      },
    );
    if (!response.ok) return null;
    const releases = (await response.json()) as {
      assets: { name: string; download_count: number }[];
    }[];
    return releases.reduce(
      (n, r) =>
        n +
        r.assets
          .filter((a) => a.name.endsWith('.dmg'))
          .reduce((sum, a) => sum + a.download_count, 0),
      0,
    );
  } catch {
    return null;
  }
}
const worker = {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const path = new URL(request.url).pathname;
    if (path === '/analytics' || path === '/api/analytics') {
      if (!['GET', 'HEAD'].includes(request.method))
        return new Response('Method not allowed', {
          status: 405,
          headers: { ...privateHeaders, Allow: 'GET, HEAD' },
        });
      if (!env.ANALYTICS_PASSWORD)
        return new Response('Dashboard is not configured.', {
          status: 503,
          headers: privateHeaders,
        });
      if (!(await authorized(request, env.ANALYTICS_PASSWORD)))
        return new Response('Owner sign-in required.', {
          status: 401,
          headers: {
            ...privateHeaders,
            'WWW-Authenticate':
              'Basic realm="ClearDisk owner", charset="UTF-8"',
          },
        });
      if (request.method === 'HEAD')
        return new Response(null, { headers: privateHeaders });
      try {
        const days = recentDays();
        // ponytail: 4 kinds x 30 days = 120 small reads; fold into one object per day if this gets slow.
        const [series, github, purchases] = await Promise.all([
          Promise.all(
            kinds.map(async (kind) => [
              kind,
              aggregateDays(
                days,
                await Promise.all(
                  days.map((day) =>
                    env.DOWNLOAD_METRICS.getByName(kind + ':' + day).counts(),
                  ),
                ),
              ),
            ]),
          ),
          githubCount(),
          purchaseCount(env.LICENSES),
        ]);
        const data = {
          ...(Object.fromEntries(series) as Record<
            Kind,
            ReturnType<typeof aggregateDays>
          >),
          github,
          purchases,
          updated: new Date().toISOString(),
        };
        if (path === '/api/analytics')
          return Response.json(data, { headers: privateHeaders });
        return new Response(dashboard(data), {
          headers: {
            ...privateHeaders,
            'Content-Type': 'text/html; charset=utf-8',
            'Content-Security-Policy':
              "default-src 'none'; style-src 'unsafe-inline'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'",
          },
        });
      } catch {
        return new Response(
          'Metrics are temporarily unavailable. Please try again.',
          { status: 503, headers: privateHeaders },
        );
      }
    }
    if (path === '/ClearDisk.dmg') {
      const response = await env.ASSETS.fetch(request);
      const event = downloadEvent(request, response.status);
      if (!event || !response.body) return response;
      count(env, ctx, 'downloads', event.source);
      // Pipe the file through so the last byte reaching the visitor counts as a finished download.
      const length = Number(
        response.headers.get('content-length') || process.env.DMG_BYTES,
      );
      const { readable, writable } =
        length > 0 ? new FixedLengthStream(length) : new TransformStream();
      ctx.waitUntil(
        response.body
          .pipeTo(writable)
          .then(() => count(env, ctx, 'downloads-done', event.source))
          .catch(() => {
            /* Cancelled or dropped transfer: started, not finished. */
          }),
      );
      return new Response(readable, response);
    }
    if (path === '/api/visit') {
      const event = await visitEvent(request);
      if (event) count(env, ctx, 'visits', event.source);
      return new Response(null, { status: 204, headers: privateHeaders });
    }
    const response = await handler.fetch(request, env, ctx);
    if (path === '/api/checkout' && request.method === 'POST' && response.ok)
      count(env, ctx, 'checkouts', 'Website');
    return response;
  },
};

export default worker;
