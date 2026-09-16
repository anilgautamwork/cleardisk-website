import { env } from 'cloudflare:workers';
import { authorized } from '@/lib/download-metrics';
export async function GET(request: Request) {
  const e = env as { LICENSES?: KVNamespace; ANALYTICS_PASSWORD?: string };
  const headers = {
    'Cache-Control': 'private, no-store',
    'X-Robots-Tag': 'noindex, nofollow',
    'Referrer-Policy': 'no-referrer',
  };
  if (!(await authorized(request, e.ANALYTICS_PASSWORD)))
    return new Response('Unauthorized', { status: 401, headers });
  if (!e.LICENSES)
    return new Response('Not configured', { status: 503, headers });
  const cursor = new URL(request.url).searchParams.get('cursor') || undefined;
  const page = await e.LICENSES.list({
    prefix: 'ads-order:',
    limit: 100,
    cursor,
  });
  const records = await Promise.all(
    page.keys.map(async (key) => {
      const value = await e.LICENSES!.get(key.name);
      return value ? (JSON.parse(value) as Record<string, unknown>) : null;
    }),
  );
  return Response.json(
    {
      records: records.filter(Boolean),
      cursor: page.list_complete ? null : page.cursor,
    },
    { headers },
  );
}
