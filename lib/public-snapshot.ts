/** Public build snapshots only. Private routes have no files in this namespace. */
export async function publicSnapshot(
  request: Request,
  assets: { fetch(request: Request): Promise<Response> },
): Promise<Response | undefined> {
  const url = new URL(request.url);
  if (url.pathname.startsWith('/__public_pages/'))
    return new Response('Not found', { status: 404, headers: { 'X-Robots-Tag': 'noindex' } });
  if (!['GET', 'HEAD'].includes(request.method)) return;
  let path = url.pathname;
  const rsc = path.endsWith('.rsc') || request.headers.get('RSC') === '1';
  if (path.endsWith('.rsc')) path = path.slice(0, -4) || '/';
  // Exclude encoded paths, traversal and all operational endpoints.
  if (!/^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/.test(path)) return;
  if (/^\/(?:api|analytics|buy-now|thanks|recover)(?:\/|$)/.test(path)) return;
  url.pathname = '/__public_pages' + (path === '/' ? '/index' : path) + (rsc ? '.rsc.bin' : '.html.bin');
  url.search = '';
  // Do not forward cookies, authorization or conditional/range headers to snapshots.
  const response = await assets.fetch(new Request(url, { method: request.method }));
  if (response.status !== 200) return;
  const headers = new Headers(response.headers);
  headers.set('Content-Type', rsc ? 'text/x-component; charset=utf-8' : 'text/html; charset=utf-8');
  headers.set('Cache-Control', 'no-cache');
  headers.set('Vary', 'RSC');
  headers.set('X-ClearDisk-Render', 'build');
  return new Response(request.method === 'HEAD' ? null : response.body, { status: 200, headers });
}
