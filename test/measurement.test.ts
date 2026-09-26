import { test } from 'node:test';
import assert from 'node:assert/strict';
import { measurementPage, consentParameters, CONSENT_KEY } from '../lib/ads-client.ts';
import { publicPaths } from '../lib/seo.ts';
void test('Google measurement excludes sensitive routes, strips query data and defaults to denied', () => {
  for (const path of ['/thanks?session_id=private','/recover?email=private','/buy-now','/analytics','/api/activate','/not-a-real-page','//evil.test/'])
    assert.equal(measurementPage('https://cleardisk.app'+path, publicPaths), null);
  assert.equal(measurementPage('https://cleardisk.app/guides?email=private#license',publicPaths),'https://cleardisk.app/guides');
  assert.equal(measurementPage('https://preview.test/guides',publicPaths),null);
  assert.equal(measurementPage('invalid',publicPaths),null);
  assert.equal(consentParameters(false).analytics_storage,'denied');
  assert.equal(consentParameters(false,true).ad_storage,'denied');
  assert.equal(consentParameters(false,true).analytics_storage,'granted');
  assert.equal(consentParameters(true,true).ad_personalization,'denied');
  assert.notEqual(CONSENT_KEY,'cleardisk.ads-consent');
});
