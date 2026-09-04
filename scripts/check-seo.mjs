import assert from 'node:assert/strict';
import { guides } from '../lib/guides.ts';
const origin = process.env.SITE_CHECK_ORIGIN || 'http://localhost:3001';
const indexable = process.env.SITE_CHECK_INDEXABLE === 'true';
const pages = [
  '/',
  '/guides',
  ...guides.map((g) => '/' + g.slug),
  '/download',
  '/buy-now',
  '/thanks',
  '/privacy',
  '/terms',
];
const titles = new Set();
for (const path of pages) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, path + ': one H1');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), path + ': unique title');
  titles.add(title);
  const canonical = html.match(/<link rel="canonical" href="(.*?)"/)?.[1];
  assert.equal(
    canonical?.replace(/\/$/, ''),
    ('https://cleardisk.app' + path).replace(/\/$/, ''),
    path,
  );
  const robots = html.match(/<meta name="robots" content="(.*?)"/)?.[1];
  const privatePage = ['/buy-now', '/thanks'].includes(path);
  assert.ok(
    robots?.includes(!indexable || privatePage ? 'noindex' : 'index'),
    path + ': robots',
  );
  if (indexable && !privatePage) assert.ok(!robots.includes('noindex'), path);
  const guide = guides.find((g) => '/' + g.slug === path);
  if (guide) {
    assert.ok(html.includes('guide-body'), path + ': server article');
    assert.ok(html.includes(guide.sections[0].id), path + ': first section');
    const json = html.match(
      /<script type="application\/ld\+json">(.*?)<\/script>/s,
    )?.[1];
    const schema = JSON.parse(json || 'null');
    assert.equal(schema[0]['@type'], 'Article');
    assert.equal(schema[0].headline, guide.title);
    assert.equal(schema[1]['@type'], 'BreadcrumbList');
    for (const related of guide.related)
      assert.ok(html.includes('href="/' + related + '"'), path + ': related');
  }
}
const missing = await fetch(new URL('/not-a-real-guide', origin));
assert.equal(missing.status, 404);
const sitemap = await fetch(new URL('/sitemap.xml', origin));
assert.equal(sitemap.status, 200);
const xml = await sitemap.text();
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
assert.equal(urls.length, indexable ? guides.length + 3 : 0);
for (const path of ['/thanks', '/buy-now', '/api'])
  assert.ok(!urls.some((url) => url.includes(path)));
const robots = await fetch(new URL('/robots.txt', origin));
assert.equal(robots.status, 200);
assert.ok((await robots.text()).includes('Disallow: /api/'));
const download = await fetch(new URL('/ClearDisk.dmg', origin), {
  method: 'HEAD',
});
assert.equal(download.status, 200);
console.log(
  'SEO HTTP checks passed: 12 HTML routes, metadata, article schema, related links, 404, sitemap, robots and DMG.',
);
