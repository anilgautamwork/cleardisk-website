import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  downloadEvent,
  visitEvent,
  authorized,
  recentDays,
  aggregateDays,
  normalizePagePath,
  parseStatsDays,
  aggregateTopSources,
} from '../lib/download-metrics.ts';
const url = 'https://cleardisk.app/ClearDisk.dmg';
await test('only successful full GET downloads count; probes, resumes and known bots do not', () => {
  assert.ok(downloadEvent(new Request(url), 200));
  for (const request of [
    new Request(url, { method: 'HEAD' }),
    new Request(url, { headers: { Range: 'bytes=0-99' } }),
    new Request(url, { headers: { 'User-Agent': 'Googlebot' } }),
    new Request(url, { headers: { Purpose: 'prefetch' } }),
  ])
    assert.equal(downloadEvent(request, 200), null);
  for (const status of [206, 301, 304, 404, 500])
    assert.equal(downloadEvent(new Request(url), status), null);
});
await test('referral data reduces to fixed labels; raw URLs and campaign values are not stored', () => {
  assert.equal(
    downloadEvent(new Request(url + '?source=reddit&email=private'), 200)
      ?.source,
    'Reddit',
  );
  assert.equal(
    downloadEvent(
      new Request(url, {
        headers: { Referer: 'https://google.com/search?q=private' },
      }),
      200,
    )?.source,
    'Google',
  );
  assert.equal(
    downloadEvent(
      new Request(url + '?source=private', {
        headers: {
          Referer:
            'https://cleardisk.app/find-large-files-on-mac?secret=private',
        },
      }),
      200,
    )?.source,
    'Website',
  );
  assert.equal(
    downloadEvent(
      new Request(url, {
        headers: { Referer: 'https://google.com.evil.test/private' },
      }),
      200,
    )?.source,
    'Other referral',
  );
});
await test('owner authentication fails closed and never accepts passwords from URLs', async () => {
  const make = (value: string) =>
    new Request('https://cleardisk.app/analytics', {
      headers: { Authorization: 'Basic ' + btoa(value) },
    });
  assert.equal(await authorized(make('owner:correct'), 'correct'), true);
  assert.equal(await authorized(make('owner:wrong'), 'correct'), false);
  assert.equal(await authorized(make('other:correct'), 'correct'), false);
  assert.equal(await authorized(make('owner:correct'), undefined), false);
  assert.equal(
    await authorized(
      new Request('https://cleardisk.app/analytics?password=correct'),
      'correct',
    ),
    false,
  );
});
await test('UTC daily series spans months and fills missing days with zero', () => {
  const days = recentDays(3, new Date('2026-03-01T00:00:00Z'));
  assert.deepEqual(days, ['2026-02-27', '2026-02-28', '2026-03-01']);
  assert.deepEqual(
    aggregateDays(days, [[], [{ source: 'Google', count: 2 }], []]).map(
      (x) => x.count,
    ),
    [0, 2, 0],
  );
});
await test('visit beacons count only same-origin, non-bot POSTs and reduce to a fixed label', async () => {
  const beacon = (body: unknown, headers: Record<string, string> = {}) =>
    visitEvent(
      new Request('https://cleardisk.app/api/visit', {
        method: 'POST',
        headers: { Origin: 'https://cleardisk.app', ...headers },
        body: JSON.stringify(body),
      }),
    );
  assert.equal((await beacon({ host: 'www.google.com' }))?.source, 'Google');
  assert.equal(
    (await beacon({ host: 'news.ycombinator.com', source: 'reddit' }))?.source,
    'Reddit',
  );
  assert.equal((await beacon({ host: '' }))?.source, 'Direct / unknown');
  assert.equal(
    (await beacon({ host: 'example.org' }))?.source,
    'Other referral',
  );
  assert.equal(await beacon({}, { Origin: 'https://evil.test' }), null);
  assert.equal(await beacon({}, { 'User-Agent': 'HeadlessChrome/1' }), null);
  assert.equal(
    await visitEvent(new Request('https://cleardisk.app/api/visit')),
    null,
  );
  const internalPage = await beacon({
    host: '',
    path: '/Clear-System-Data-On-Mac/?utm_source=x',
    arrival: false,
  });
  assert.deepEqual(internalPage, {
    source: 'Direct / unknown',
    path: '/clear-system-data-on-mac',
    arrival: false,
  });
  assert.equal(
    await beacon({ host: '', path: '/analytics', arrival: false }),
    null,
  );
});
await test('page path normalization, stats window parsing and top-page aggregation stay bounded', () => {
  assert.equal(normalizePagePath('/'), '/');
  assert.equal(normalizePagePath('/guides/'), '/guides');
  assert.equal(normalizePagePath('/blog/appcleaner-os-x?ref=1'), '/blog/appcleaner-os-x');
  for (const bad of [
    '/analytics',
    '/stats',
    '/thanks',
    '/recover',
    '/buy-now',
    '/api/visit',
    '/a/b/c',
    'https://evil.test/',
    '/bad path',
  ])
    assert.equal(normalizePagePath(bad), null, bad);
  assert.equal(parseStatsDays('7'), 7);
  assert.equal(parseStatsDays('14'), 14);
  assert.equal(parseStatsDays('30'), 30);
  assert.equal(parseStatsDays('999'), 30);
  assert.equal(parseStatsDays(null), 30);
  assert.deepEqual(
    aggregateTopSources(
      aggregateDays(
        ['2026-11-18', '2026-11-19'],
        [
          [
            { source: '/guides', count: 3 },
            { source: '/', count: 5 },
          ],
          [{ source: '/guides', count: 4 }],
        ],
      ),
      2,
    ),
    [
      { source: '/guides', count: 7 },
      { source: '/', count: 5 },
    ],
  );
});
