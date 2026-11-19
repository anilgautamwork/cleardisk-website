export const sources = [
  'Google',
  'Bing',
  'GitHub',
  'Reddit',
  'YouTube',
  'Newsletter',
  'Guides',
  'Website',
  'Other referral',
  'Direct / unknown',
] as const;
export type Source = (typeof sources)[number];
export type Count = { source: string; count: number };
export function campaignSource(value: string | null): Source | null {
  const map: Record<string, Source> = {
    google: 'Google',
    bing: 'Bing',
    github: 'GitHub',
    reddit: 'Reddit',
    youtube: 'YouTube',
    newsletter: 'Newsletter',
    guides: 'Guides',
    website: 'Website',
  };
  return value && Object.hasOwn(map, value.toLowerCase())
    ? map[value.toLowerCase()]
    : null;
}
/** Funnel stages, each stored as one counter object per UTC day ('<kind>:<day>'). */
export const kinds = [
  'visits',
  'downloads',
  'downloads-done',
  'checkouts',
] as const;
export type Kind = (typeof kinds)[number];
const privatePagePrefixes = [
  '/api',
  '/analytics',
  '/stats',
  '/buy-now',
  '/thanks',
  '/recover',
];
/** Normalizes a public page path for aggregate Top Pages counting; rejects private or malformed paths. */
export function normalizePagePath(value: unknown): string | null {
  if (typeof value !== 'string' || !value.startsWith('/') || value.length > 100)
    return null;
  const clean = value.split(/[?#]/, 1)[0].toLowerCase().replace(/\/+$/, '') || '/';
  if (
    privatePagePrefixes.some(
      (prefix) => clean === prefix || clean.startsWith(prefix + '/'),
    )
  )
    return null;
  return /^\/([a-z0-9-]+(\/[a-z0-9-]+)?)?$/.test(clean) ? clean : null;
}
export function parseStatsDays(value: string | null): 7 | 14 | 30 {
  if (value === '7') return 7;
  if (value === '14') return 14;
  return 30;
}
export function aggregateTopSources(
  series: ReturnType<typeof aggregateDays>,
  limit = 15,
): Count[] {
  const totals: Record<string, number> = {};
  for (const day of series)
    for (const row of day.sources)
      totals[row.source] = (totals[row.source] || 0) + row.count;
  return Object.entries(totals)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([source, count]) => ({ source, count }));
}
const automated = (request: Request) =>
  /bot|crawler|spider|preview|headless|monitor|cleardisk-qa/i.test(
    request.headers.get('user-agent') || '',
  );
/** Reduces a campaign value and a referrer host to one fixed label. */
export function classify(campaign: string | null, host: string): Source {
  const labelled = campaignSource(campaign);
  if (labelled) return labelled;
  const domain = (name: string) => host === name || host.endsWith('.' + name);
  return domain('google.com')
    ? 'Google'
    : domain('bing.com')
      ? 'Bing'
      : domain('github.com')
        ? 'GitHub'
        : domain('reddit.com')
          ? 'Reddit'
          : domain('youtube.com')
            ? 'YouTube'
            : domain('cleardisk.app')
              ? 'Website'
              : host
                ? 'Other referral'
                : 'Direct / unknown';
}
export function downloadEvent(
  request: Request,
  status: number,
): { source: Source } | null {
  if (
    request.method !== 'GET' ||
    status !== 200 ||
    request.headers.has('range') ||
    automated(request) ||
    /prefetch/i.test(
      [request.headers.get('purpose'), request.headers.get('sec-purpose')].join(
        ' ',
      ),
    )
  )
    return null;
  let host = '';
  try {
    host = new URL(request.headers.get('referer') || '').hostname;
  } catch {
    /* No referrer is normal. */
  }
  return {
    source: classify(new URL(request.url).searchParams.get('source'), host),
  };
}
/** A same-origin beacon sent for external arrivals and public page views. */
export async function visitEvent(
  request: Request,
): Promise<{ source: Source; path: string | null; arrival: boolean } | null> {
  if (
    request.method !== 'POST' ||
    automated(request) ||
    request.headers.get('origin') !== new URL(request.url).origin ||
    Number(request.headers.get('content-length') || 0) > 1024
  )
    return null;
  try {
    const body = JSON.parse(await request.text()) as {
      host?: unknown;
      source?: unknown;
      path?: unknown;
      arrival?: unknown;
    };
    const host =
      typeof body.host === 'string' && body.host.length < 256 ? body.host : '';
    const source = typeof body.source === 'string' ? body.source : null;
    const path = normalizePagePath(body.path);
    const arrival = body.arrival !== false;
    if (!arrival && !path) return null;
    return { source: classify(source, host.toLowerCase()), path, arrival };
  } catch {
    return null;
  }
}
export async function authorized(
  request: Request,
  password?: string,
): Promise<boolean> {
  if (!password) return false;
  const header = request.headers.get('authorization') || '';
  if (!header.startsWith('Basic ') || header.length > 2048) return false;
  let supplied: string;
  try {
    supplied = atob(header.slice(6));
  } catch {
    return false;
  }
  const bytes = new TextEncoder();
  const [a, b] = await Promise.all(
    [supplied, 'owner:' + password].map((s) =>
      crypto.subtle.digest('SHA-256', bytes.encode(s)),
    ),
  );
  const x = new Uint8Array(a),
    y = new Uint8Array(b);
  let difference = 0;
  for (let i = 0; i < x.length; i++) difference |= x[i] ^ y[i];
  return difference === 0;
}
export function recentDays(count = 30, now = new Date()): string[] {
  const today = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
  );
  return Array.from({ length: count }, (_, i) =>
    new Date(today - (count - 1 - i) * 86400000).toISOString().slice(0, 10),
  );
}
export function aggregateDays(days: string[], counts: Count[][]) {
  return days.map((day, i) => ({
    day,
    count: counts[i].reduce((total, row) => total + row.count, 0),
    sources: counts[i],
  }));
}
