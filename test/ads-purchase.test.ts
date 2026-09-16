import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  verifiedPurchase,
  recordOfflinePurchase,
} from '../lib/ads-purchase.ts';
import { dispatchPurchase, ADS_DESTINATION } from '../lib/ads-client.ts';
import { retrieveSession, startCheckout } from '../lib/checkout.ts';
import { handleStripeEvent } from '../lib/stripe-webhook.ts';
const paid = {
  id: 'cs_live_fixture',
  livemode: true,
  status: 'complete',
  payment_status: 'paid',
  amount_total: 1000,
  currency: 'usd',
  metadata: {
    product: 'cleardisk',
    ads_consent: 'granted',
    gclid: 'fixture-click',
  },
};
void test('only complete live ClearDisk payments qualify; units and stable opaque IDs', async () => {
  const p = await verifiedPurchase(paid);
  assert.equal(p?.value, 10);
  assert.equal(p?.currency, 'USD');
  assert.match(p!.transaction_id, /^cd_[a-f0-9]{64}$/);
  assert.deepEqual(await verifiedPurchase(paid), p);
  for (const bad of [
    { payment_status: 'unpaid' },
    { payment_status: 'no_payment_required' },
    { status: 'open' },
    { status: 'expired' },
    { livemode: false },
    { metadata: { product: 'other' } },
    { amount_total: 0 },
    { amount_total: -1 },
    { amount_total: 10.5 },
    { currency: 'ZZZ' },
    { id: 'buyer@example.com' },
  ])
    assert.equal(await verifiedPurchase({ ...paid, ...bad }), null);
  for (const [currency, amount, value] of [
    ['jpy', 1000, 1000],
    ['inr', 59900, 599],
    ['aed', 3673, 36.73],
    ['kwd', 1230, 1.23],
    ['isk', 1000, 10],
    ['ugx', 1000, 10],
  ] as const)
    assert.equal(
      (await verifiedPurchase({ ...paid, currency, amount_total: amount }))
        ?.value,
      value,
    );
});
void test('backend lookup validates mode/product; emits an analytics-only projection', async () => {
  const env = { STRIPE_SECRET_KEY: 'sk_live_fixture' };
  const session = await retrieveSession(paid.id, env, async () =>
    Response.json({
      ...paid,
      customer_details: { email: 'private@example.com' },
    }),
  );
  assert.deepEqual(Object.keys(session!.purchase!).sort(), [
    'currency',
    'transaction_id',
    'value',
  ]);
  assert.doesNotMatch(
    JSON.stringify(session!.purchase),
    /private|cs_live|CLDK/,
  );
  assert.equal(
    await retrieveSession('cs_test_fixture', env, async () => {
      throw Error('must not fetch');
    }),
    null,
  );
  assert.equal(
    await retrieveSession(
      paid.id,
      env,
      async () => new Response('', { status: 500 }),
    ),
    null,
  );
});
void test('consent, readiness, rerenders, failures and refresh deduplication', async () => {
  const purchase = await verifiedPurchase(paid);
  const calls: unknown[][] = [];
  const deps = {
    consent: false,
    ready: true,
    sent: new Set<string>(),
    send: (...args: unknown[]) => {
      calls.push(args);
    },
  };
  assert.equal(dispatchPurchase(purchase, deps), false);
  deps.consent = true;
  deps.ready = false;
  assert.equal(dispatchPurchase(purchase, deps), false);
  deps.ready = true;
  assert.equal(dispatchPurchase(null, deps), false); // Failed/pending/arbitrary visit.
  assert.equal(dispatchPurchase(purchase, deps), true);
  assert.equal(dispatchPurchase(purchase, deps), false);
  assert.equal(calls.length, 1);
  assert.equal(
    (calls[0][2] as Record<string, unknown>).send_to,
    ADS_DESTINATION,
  );
  assert.equal(
    dispatchPurchase(await verifiedPurchase(paid), {
      ...deps,
      sent: new Set(),
    }),
    true,
  );
  assert.equal(
    (calls[0][2] as Record<string, unknown>).transaction_id,
    (calls[1][2] as Record<string, unknown>).transaction_id,
  );
  const retry = {
    ...deps,
    sent: new Set<string>(),
    send: () => {
      throw Error('blocked');
    },
  };
  assert.throws(() => dispatchPurchase(purchase, retry));
  assert.equal(retry.sent.size, 0);
});
void test('webhook saves no-return records before license duplicate fast path and only with consent', async () => {
  const data = new Map<string, string>([
    ['session:' + paid.id, 'existing-license'],
  ]);
  const kv = {
    get: async (k: string) => data.get(k) ?? null,
    put: async (k: string, v: string) => {
      data.set(k, v);
    },
  };
  const event = {
    type: 'checkout.session.completed',
    livemode: true,
    created: 1800000000,
    data: { object: paid },
  };
  const deps = {
    kv,
    keySecret: 'fixture',
    live: true,
    sendKey: async () => {},
  };
  await handleStripeEvent(event, deps);
  await handleStripeEvent(
    { ...event, type: 'checkout.session.async_payment_succeeded' },
    deps,
  );
  const rows = [...data.keys()].filter((k) => k.startsWith('ads-order:'));
  assert.equal(rows.length, 1);
  const raw = data.get(rows[0])!;
  assert.doesNotMatch(raw, /email|license|cs_live/);
  for (const bad of [
    { ...paid, livemode: false },
    { ...paid, payment_status: 'unpaid' },
    { ...paid, metadata: { ...paid.metadata, ads_consent: 'denied' } },
  ]) {
    data.clear();
    await recordOfflinePurchase(kv, bad, 1800000000);
    assert.equal(data.size, 0);
  }
});
void test('checkout strips click IDs without consent but preserves consented IDs in Stripe', async () => {
  for (const adsConsent of ['denied', 'granted']) {
    const request = new Request('https://cleardisk.app/api/checkout', {
      method: 'POST',
      headers: { Origin: 'https://cleardisk.app' },
      body: JSON.stringify({ adsConsent, attribution: { gclid: 'click-123' } }),
    });
    const response = await startCheckout(
      request,
      {
        SITE_ORIGIN: 'https://cleardisk.app',
        STRIPE_SECRET_KEY: 'sk_live_fixture',
        STRIPE_PRICE_ID: 'price_fixture',
      },
      async (_url, init) => {
        const body = new URLSearchParams(init?.body as URLSearchParams);
        assert.equal(
          body.get('metadata[gclid]'),
          adsConsent === 'granted' ? 'click-123' : null,
        );
        assert.equal(body.get('metadata[ads_consent]'), adsConsent);
        return Response.json({
          livemode: true,
          url: 'https://checkout.stripe.com/c/pay/fixture',
        });
      },
    );
    assert.equal(response.status, 200);
  }
});
