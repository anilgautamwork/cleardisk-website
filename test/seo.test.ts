import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  canonical,
  guideSchema,
  shouldIndex,
  sitemapEntries,
} from '../lib/seo.ts';
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
await test('all published problems have complete discoverable guides', () => {
  const required = [
    'clear-system-data-on-mac',
    'what-is-system-data-on-mac',
    'system-data-too-large',
    'system-data-keeps-growing',
    'mac-storage-full',
    'free-up-space-on-mac',
    'clear-cache-on-mac',
    'time-machine-snapshots',
    'disk-space-analyzer-mac',
    'not-enough-space-to-update-macos',
    'mail-taking-up-space-on-mac',
    'clean-homebrew-cache-mac',
    'clear-npm-cache-mac',
    'messages-taking-up-space-on-mac',
    'cloud-drive-taking-up-space-on-mac',
    'show-library-folder-mac',
    'trash-wont-empty-mac',
    'photos-library-taking-up-space-mac',
    'check-disk-space-mac-terminal',
    'delete-macos-installer-mac',
    'best-free-mac-cleaner',
  ];
  for (const slug of required) assert.ok(getGuide(slug));
  assert.equal(guides.length, 33);
  assert.equal(getGuide('not-a-real-guide'), undefined);
  assert.equal(new Set(guides.map((g) => g.slug)).size, guides.length);
  for (const guide of guides) {
    assert.ok(guide.sections.length >= 3);
    assert.ok(guide.sources.length > 0);
    for (const source of guide.sources)
      assert.equal(new URL(source.url).protocol, 'https:');
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
await test('guide titles and descriptions fit search snippets', () => {
  for (const guide of guides) {
    assert.ok(guide.title.length < 60, guide.slug + ': title under 60');
    assert.ok(
      guide.description.length >= 140 && guide.description.length <= 158,
      guide.slug + ': description 140-158',
    );
  }
});
type SchemaNode = {
  '@type': string;
  datePublished?: string;
  publisher?: { logo: { url: string } };
  step?: { name: string }[];
};
await test('guide schema derives HowTo steps only from numbered sections', () => {
  for (const guide of guides) {
    const schema = guideSchema(guide) as SchemaNode[];
    const article = schema.find((s) => s['@type'] === 'Article');
    assert.equal(article?.datePublished, guide.published, guide.slug);
    assert.equal(
      article?.publisher?.logo.url,
      'https://cleardisk.app/icon.svg',
    );
    const howTo = schema.find((s) => s['@type'] === 'HowTo');
    const numbered = guide.sections.filter((s) => /^\d+\. /.test(s.title));
    if (numbered.length < 3) assert.equal(howTo, undefined, guide.slug);
    else
      assert.deepEqual(
        howTo?.step?.map((s) => s.name),
        numbered.map((s) => s.title.replace(/^\d+\. /, '')),
        guide.slug,
      );
  }
  const explainer = guideSchema(getGuide('what-is-system-data-on-mac')!);
  assert.equal(
    explainer.some((s) => s['@type'] === 'HowTo'),
    false,
  );
});
