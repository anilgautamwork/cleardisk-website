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
export function downloadEvent(
  request: Request,
  status: number,
): { source: Source } | null {
  if (
    request.method !== 'GET' ||
    status !== 200 ||
    request.headers.has('range') ||
    /bot|crawler|spider|preview|headless|monitor|cleardisk-qa/i.test(
      request.headers.get('user-agent') || '',
    ) ||
    /prefetch/i.test(
      [request.headers.get('purpose'), request.headers.get('sec-purpose')].join(
        ' ',
      ),
    )
  )
    return null;
  const campaign = campaignSource(
    new URL(request.url).searchParams.get('source'),
  );
  if (campaign) return { source: campaign };
  let host = '';
  try {
    host = new URL(request.headers.get('referer') || '').hostname;
  } catch {
    /* No referrer is normal. */
  }
  const domain = (name: string) => host === name || host.endsWith('.' + name);
  const source: Source = domain('google.com')
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
  return { source };
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
