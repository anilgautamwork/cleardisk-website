import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  downloadEvent,
  authorized,
  recentDays,
  aggregateDays,
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
