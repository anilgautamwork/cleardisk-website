import assert from 'node:assert/strict';
import { test } from 'node:test';
import { publicSnapshot } from '../lib/public-snapshot.ts';

await test('public HTML and RSC use distinct build assets and preserve HEAD', async () => {
  const requests: Request[] = [];
  const assets = { async fetch(request: Request) { requests.push(request); return new Response('snapshot', { headers: { 'Content-Type': 'application/octet-stream' } }); } };
  const html = await publicSnapshot(new Request('https://cleardisk.app/mac-log-files?utm_source=qa', { headers: { Cookie: 'private=1', Authorization: 'Basic test' } }), assets);
  assert.equal(html?.headers.get('X-ClearDisk-Render'), 'build');
  assert.equal(await html?.text(), 'snapshot');
  assert.match(requests[0].url, /mac-log-files.html.bin$/);
  assert.equal(requests[0].headers.get('Cookie'), null);
  assert.equal(requests[0].headers.get('Authorization'), null);
  const rsc = await publicSnapshot(new Request('https://cleardisk.app/mac-log-files', { headers: { RSC: '1' } }), assets);
  assert.match(rsc!.headers.get('Content-Type')!, /text\/x-component/);
  assert.match(requests[1].url, /mac-log-files.rsc.bin$/);
  await publicSnapshot(new Request('https://cleardisk.app/mac-log-files.rsc'), assets);
  assert.equal(requests[1].url, requests[2].url);
  const head = await publicSnapshot(new Request('https://cleardisk.app/', { method: 'HEAD' }), assets);
  assert.equal(await head?.text(), '');
  assert.match(requests[3].url, /index.html.bin$/);
});
await test('private endpoints, mutations and encoded paths never read public snapshots', async () => {
  const assets = { async fetch() { throw new Error('must not reach assets'); } };
  for (const path of ['/api/analytics', '/analytics', '/buy-now', '/thanks', '/recover', '/api/checkout', '/mac%2dlog-files']) {
    assert.equal(await publicSnapshot(new Request('https://cleardisk.app'+path), assets), undefined);
  }
  assert.equal(await publicSnapshot(new Request('https://cleardisk.app/mac-log-files', { method: 'POST' }), assets), undefined);
  const internal = await publicSnapshot(new Request('https://cleardisk.app/__public_pages/mac-log-files.html.bin'), assets);
  assert.equal(internal?.status, 404);
});
await test('missing snapshot falls back without converting errors into a successful page', async () => {
  for (const status of [404, 503, 308]) {
    assert.equal(await publicSnapshot(new Request('https://cleardisk.app/unknown'), { async fetch() { return new Response(null, { status }); } }), undefined);
  }
});
