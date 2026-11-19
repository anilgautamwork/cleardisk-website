import handler from 'vinext/server/fetch-handler';
import { publicSnapshot } from '../lib/public-snapshot';
import { mergedGuideRedirects } from '../lib/seo';
import { DownloadMetrics } from './download-metrics';
import {
  aggregateDays,
  aggregateTopSources,
  authorized,
  downloadEvent,
  kinds,
  parseStatsDays,
  recentDays,
  visitEvent,
  type Kind,
  type Source,
} from '../lib/download-metrics';
import { dashboard, type DashboardData } from './dashboard';
import { publicStatsPage, type PublicStatsData } from './public-stats';
export { DownloadMetrics };
type Env = {
  ASSETS: Fetcher;
  DOWNLOAD_METRICS: DurableObjectNamespace<DownloadMetrics>;
  ANALYTICS_PASSWORD?: string;
  LICENSES?: KVNamespace;
};
const today = () => new Date().toISOString().slice(0, 10);
/** Country breakdowns are kept for these steps, as '<kind>-country:<day>' counters. */
const countryKinds = ['visits', 'downloads', 'checkouts'] as const;
function count(
  env: Env,
  ctx: ExecutionContext,
  kind: Kind,
  source: Source,
  request: Request,
) {
  const country = (request.cf?.country as string | undefined) || 'XX';
  const writes: [string, string][] = [[kind, source]];
  if ((countryKinds as readonly string[]).includes(kind))
    writes.push([
      kind + '-country',
      /^[A-Z][A-Z0-9]$/.test(country) ? country : 'XX',
    ]);
  for (const [name, label] of writes)
    ctx.waitUntil(
      env.DOWNLOAD_METRICS.getByName(name + ':' + today())
        .record(label)
        .catch(() => console.error('Metrics write failed: ' + name)),
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
const publicStatsHeaders = {
  'Cache-Control': 'public, max-age=30',
  'X-Robots-Tag': 'noindex, nofollow',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};
function countPage(env: Env, ctx: ExecutionContext, pagePath: string) {
  ctx.waitUntil(
    env.DOWNLOAD_METRICS.getByName('pages:' + today())
      .record(pagePath)
      .catch(() => console.error('Metrics write failed: pages')),
  );
}
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
    if (path === '/stats' || path === '/api/public-stats') {
      if (!['GET', 'HEAD'].includes(request.method))
        return new Response('Method not allowed', {
          status: 405,
          headers: { ...publicStatsHeaders, Allow: 'GET, HEAD' },
        });
      if (request.method === 'HEAD')
        return new Response(null, { headers: publicStatsHeaders });
      try {
        const rangeDays = parseStatsDays(
          new URL(request.url).searchParams.get('days'),
        );
        const days = recentDays(rangeDays);
        const [series, pageCounts, github, purchases] = await Promise.all([
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
          Promise.all(
            days.map((day) =>
              env.DOWNLOAD_METRICS.getByName('pages:' + day).counts(),
            ),
          ),
          githubCount(),
          purchaseCount(env.LICENSES),
        ]);
        const byKind = Object.fromEntries(series) as Record<
          Kind,
          ReturnType<typeof aggregateDays>
        >;
        const pages = aggregateDays(days, pageCounts);
        const sum = (s: ReturnType<typeof aggregateDays>) =>
          s.reduce((total, d) => total + d.count, 0);
        const daily = days.map((day, i) => ({
          day,
          visits: byKind.visits[i].count,
          pageviews: pages[i].count,
          downloads: byKind.downloads[i].count,
          downloads_done: byKind['downloads-done'][i].count,
          checkouts: byKind.checkouts[i].count,
        }));
        const latest = daily.at(-1) ?? {
          visits: 0,
          pageviews: 0,
          downloads: 0,
          downloads_done: 0,
          checkouts: 0,
        };
        const stats: PublicStatsData = {
          range_days: rangeDays,
          totals: {
            visits: sum(byKind.visits),
            pageviews: sum(pages),
            downloads: sum(byKind.downloads),
            downloads_done: sum(byKind['downloads-done']),
            checkouts: sum(byKind.checkouts),
            purchases,
            github,
          },
          today: {
            visits: latest.visits,
            pageviews: latest.pageviews,
            downloads: latest.downloads,
            downloads_done: latest.downloads_done,
            checkouts: latest.checkouts,
          },
          daily,
          top_pages: aggregateTopSources(pages, 15).map((p) => ({
            path: p.source,
            views: p.count,
          })),
          sources: aggregateTopSources(byKind.visits, 12),
          updated: new Date().toISOString(),
        };
        if (path === '/api/public-stats')
          return Response.json(stats, { headers: publicStatsHeaders });
        return new Response(publicStatsPage(stats), {
          headers: {
            ...publicStatsHeaders,
            'Content-Type': 'text/html; charset=utf-8',
            'Content-Security-Policy':
              "default-src 'none'; style-src 'unsafe-inline'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'",
          },
        });
      } catch {
        return new Response(
          'Public stats are temporarily unavailable. Please try again.',
          { status: 503, headers: publicStatsHeaders },
        );
      }
    }
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
        const [series, pageCounts, github, purchases] = await Promise.all([
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
          Promise.all(
            days.map((day) =>
              env.DOWNLOAD_METRICS.getByName('pages:' + day).counts(),
            ),
          ),
          githubCount(),
          purchaseCount(env.LICENSES),
        ]);
        const countries = Object.fromEntries(
          await Promise.all(
            countryKinds.map(async (kind) => [
              kind,
              aggregateDays(
                days,
                await Promise.all(
                  days.map((day) =>
                    env.DOWNLOAD_METRICS.getByName(
                      kind + '-country:' + day,
                    ).counts(),
                  ),
                ),
              ),
            ]),
          ),
        ) as DashboardData['countries'];
        const data = {
          ...(Object.fromEntries(series) as Record<
            Kind,
            ReturnType<typeof aggregateDays>
          >),
          pages: aggregateDays(days, pageCounts),
          github,
          purchases,
          countries,
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
      count(env, ctx, 'downloads', event.source, request);
      // Pipe the file through so the last byte reaching the visitor counts as a finished download.
      const length = Number(
        response.headers.get('content-length') || process.env.DMG_BYTES,
      );
      const { readable, writable } =
        length > 0 ? new FixedLengthStream(length) : new TransformStream();
      ctx.waitUntil(
        response.body
          .pipeTo(writable)
          .then(() => count(env, ctx, 'downloads-done', event.source, request))
          .catch(() => {
            /* Cancelled or dropped transfer: started, not finished. */
          }),
      );
      return new Response(readable, response);
    }
    if (path === '/api/visit') {
      const event = await visitEvent(request);
      if (event) {
        if (event.arrival) count(env, ctx, 'visits', event.source, request);
        if (event.path) countPage(env, ctx, event.path);
      }
      return new Response(null, { status: 204, headers: privateHeaders });
    }
    const redirectTarget = mergedGuideRedirects[path];
    if (redirectTarget) {
      const url = new URL(request.url);
      url.pathname = redirectTarget;
      return Response.redirect(url.toString(), 301);
    }
    const snapshot = await publicSnapshot(request, env.ASSETS);
    if (snapshot) return snapshot;
    const response = await handler.fetch(request, env, ctx);
    if (path === '/api/checkout' && request.method === 'POST' && response.ok)
      count(env, ctx, 'checkouts', 'Website', request);
    return response;
  },
};

export default worker;
