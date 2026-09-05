import assert from 'node:assert/strict';
import { guides } from '../lib/guides.ts';
const origin = process.env.SITE_CHECK_ORIGIN || 'http://localhost:3001';
const indexable = process.env.SITE_CHECK_INDEXABLE === 'true';
const site = 'https://cleardisk.app';
const pages = [
  '/',
  '/guides',
  ...guides.map((g) => '/' + g.slug),
  '/download',
  '/buy-now',
  '/thanks',
  '/recover',
  '/privacy',
  '/terms',
];
const meta = (head, attr, name) =>
  head.match(new RegExp(`<meta ${attr}="${name}" content="([^"]*)"`))?.[1];
const titles = new Set();
const descriptions = new Set();
for (const path of pages) {
  const response = await fetch(new URL(path, origin));
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, path + ': one H1');
  // Everything below must sit inside <head>: vinext streams generateMetadata()
  // output into <body> unless next.config marks the user agent HTML-limited.
  const head = html.match(/<head>(.*?)<\/head>/s)?.[1] ?? '';
  const title = head.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), path + ': unique title in head');
  titles.add(title);
  const description = meta(head, 'name', 'description');
  assert.ok(
    description && !descriptions.has(description),
    path + ': unique description in head',
  );
  descriptions.add(description);
  const canonical = head.match(/<link rel="canonical" href="(.*?)"/)?.[1];
  assert.equal(
    canonical?.replace(/\/$/, ''),
    (site + path).replace(/\/$/, ''),
    path + ': canonical',
  );
  const robots = meta(head, 'name', 'robots');
  const privatePage = ['/buy-now', '/thanks', '/recover'].includes(path);
  assert.ok(
    robots?.includes(!indexable || privatePage ? 'noindex' : 'index'),
    path + ': robots',
  );
  if (indexable && !privatePage) assert.ok(!robots.includes('noindex'), path);
  const guide = guides.find((g) => '/' + g.slug === path);
  assert.equal(meta(head, 'property', 'og:title'), title, path + ': og:title');
  assert.equal(meta(head, 'property', 'og:description'), description, path);
  assert.equal(meta(head, 'property', 'og:url'), canonical, path + ': og:url');
  assert.equal(meta(head, 'property', 'og:site_name'), 'ClearDisk', path);
  assert.equal(
    meta(head, 'property', 'og:type'),
    guide ? 'article' : 'website',
    path + ': og:type',
  );
  assert.equal(meta(head, 'property', 'og:image'), site + '/og.png', path);
  assert.equal(
    meta(head, 'name', 'twitter:card'),
    'summary_large_image',
    path + ': twitter:card',
  );
  assert.equal(meta(head, 'name', 'twitter:title'), title, path);
  assert.equal(meta(head, 'name', 'twitter:description'), description, path);
  const schemas = [
    ...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs),
  ].flatMap((m) => JSON.parse(m[1]));
  const ofType = (type) => schemas.filter((s) => s['@type'] === type);
  assert.equal(ofType('Organization').length, 1, path + ': Organization');
  if (path === '/' || path === '/download')
    assert.equal(ofType('SoftwareApplication')[0]?.offers?.price, '10', path);
  if (guide) {
    assert.ok(title.length < 60, path + ': title under 60 chars');
    assert.ok(
      description.length >= 140 && description.length <= 158,
      path + ': description 140-158 chars',
    );
    assert.ok(html.includes('guide-body'), path + ': server article');
    assert.ok(html.includes(guide.sections[0].id), path + ': first section');
    const article = ofType('Article')[0];
    assert.equal(article?.headline, guide.title, path + ': Article');
    assert.equal(article.datePublished, guide.published, path);
    assert.equal(article.dateModified, guide.updated, path);
    assert.ok(article.publisher?.logo?.url, path + ': publisher logo');
    assert.equal(ofType('BreadcrumbList')[0]?.itemListElement?.length, 2, path);
    const steps = guide.sections.filter((s) => /^\d+\. /.test(s.title));
    assert.equal(
      ofType('HowTo')[0]?.step?.length,
      steps.length >= 3 ? steps.length : undefined,
      path + ': HowTo',
    );
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
for (const asset of ['/ClearDisk.dmg', '/og.png']) {
  const response = await fetch(new URL(asset, origin), { method: 'HEAD' });
  assert.equal(response.status, 200, asset);
}
console.log(
  `SEO HTTP checks passed: ${pages.length} HTML routes, head metadata, schema, related links, 404, sitemap, robots, DMG and OG image.`,
);
