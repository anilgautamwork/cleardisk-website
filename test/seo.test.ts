import assert from 'node:assert/strict';
import { test } from 'node:test';
import { canonical, shouldIndex, sitemapEntries } from '../lib/seo.ts';
import { guides, getGuide } from '../lib/guides.ts';

await test('canonicals use the production domain and omit query data', () => {
  assert.equal(
    canonical('/mac-storage-full?utm_source=test#steps'),
    'https://cleardisk.app/mac-storage-full',
  );
  assert.throws(() => canonical('//evil.test'));
  assert.throws(() => canonical('https://evil.test'));
});
await test('indexing is explicit and excludes transactional routes', () => {
  assert.equal(shouldIndex(false, '/mac-storage-full'), false);
  assert.equal(shouldIndex(true, '/mac-storage-full'), true);
  for (const path of ['/thanks', '/buy-now', '/recover', '/api/key'])
    assert.equal(shouldIndex(true, path), false);
});
await test('all five distinct problems have a complete discoverable guide', () => {
  const required = [
    'clear-system-data-on-mac',
    'what-is-system-data-on-mac',
    'system-data-too-large',
    'system-data-keeps-growing',
    'mac-storage-full',
  ];
  for (const slug of required) assert.ok(getGuide(slug));
  assert.equal(getGuide('not-a-real-guide'), undefined);
  assert.equal(new Set(guides.map((g) => g.slug)).size, guides.length);
  for (const guide of guides) {
    assert.ok(guide.sections.length >= 3);
    assert.equal(
      new Set(guide.sections.map((s) => s.id)).size,
      guide.sections.length,
    );
    assert.ok(Number.isFinite(Date.parse(guide.updated)));
    assert.ok(Date.parse(guide.published) <= Date.parse(guide.updated));
    for (const related of guide.related) assert.ok(getGuide(related));
  }
});
await test('sitemap advertises only canonical published pages when indexing enabled', () => {
  assert.deepEqual(sitemapEntries(false), []);
  const urls = sitemapEntries(true).map((entry) => entry.url);
  assert.equal(new Set(urls).size, urls.length);
  for (const guide of guides)
    assert.ok(urls.includes(canonical('/' + guide.slug)));
  for (const path of ['/thanks', '/buy-now', '/api/key'])
    assert.ok(!urls.includes(canonical(path)));
});
