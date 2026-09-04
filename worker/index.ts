import handler from 'vinext/server/fetch-handler';
import { DownloadMetrics } from './download-metrics';
import {
  aggregateDays,
  authorized,
  downloadEvent,
  recentDays,
} from '../lib/download-metrics';
import { dashboard } from './dashboard';
export { DownloadMetrics };
type Env = {
  ASSETS: Fetcher;
  DOWNLOAD_METRICS: DurableObjectNamespace<DownloadMetrics>;
  ANALYTICS_PASSWORD?: string;
};
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
        const [counts, github] = await Promise.all([
          Promise.all(
            days.map((day) =>
              env.DOWNLOAD_METRICS.getByName('downloads:' + day).counts(),
            ),
          ),
          githubCount(),
        ]);
        const data = {
          days: aggregateDays(days, counts),
          github,
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
      if (event)
        ctx.waitUntil(
          Promise.resolve()
            .then(() =>
              env.DOWNLOAD_METRICS.getByName(
                'downloads:' + new Date().toISOString().slice(0, 10),
              ).record(event.source),
            )
            .catch(() => console.error('Download metrics write failed')),
        );
      return response;
    }
    return handler.fetch(request, env, ctx);
  },
};

export default worker;
