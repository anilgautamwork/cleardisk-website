import { test } from 'node:test';
import assert from 'node:assert/strict';
import { startCheckout, checkoutStatus } from '../lib/checkout.ts';
const origin = 'https://cleardisk.example';
const env = { STRIPE_SECRET_KEY: 'sk_test_example', SITE_ORIGIN: origin };
const request = () =>
  new Request(origin + '/api/checkout', {
    method: 'POST',
    headers: { origin },
  });
void test('checkout fixes the price on the server and returns only a test Stripe URL', async () => {
  const fakeFetch: typeof fetch = async (input, init) => {
    assert.equal(input, 'https://api.stripe.com/v1/checkout/sessions');
    const body = new URLSearchParams(init?.body as URLSearchParams);
    assert.equal(body.get('line_items[0][price_data][unit_amount]'), '1000');
    assert.equal(body.get('mode'), 'payment');
    assert.equal(body.get('line_items[0][price_data][currency]'), 'usd');
    assert.equal(
      body.get('success_url'),
      origin + '/thanks?session_id={CHECKOUT_SESSION_ID}',
    );
    return Response.json({
      url: 'https://checkout.stripe.com/c/pay/cs_test_example',
      livemode: false,
    });
  };
  const res = await startCheckout(request(), env, fakeFetch);
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), {
    url: 'https://checkout.stripe.com/c/pay/cs_test_example',
    mode: 'test',
  });
});
void test('rejects live keys until license fulfillment is integrated', async () => {
  const res = await startCheckout(
    request(),
    { ...env, STRIPE_SECRET_KEY: 'sk_live_example' },
    async () => {
      throw Error('must not call Stripe');
    },
  );
  assert.equal(res.status, 503);
});
void test('rejects cross-origin checkout requests before contacting Stripe', async () => {
  const req = new Request(origin + '/api/checkout', {
    method: 'POST',
    headers: { origin: 'https://untrusted.example' },
  });
  assert.equal((await startCheckout(req, env)).status, 403);
});
void test('does not expose provider error details or a secret key', async () => {
  const res = await startCheckout(request(), env, async () =>
    Response.json(
      { error: { message: 'sk_test_example confidential detail' } },
      { status: 401 },
    ),
  );
  assert.equal(res.status, 502);
  assert.doesNotMatch(await res.text(), /sk_test|confidential/);
});
void test('rejects an unexpected checkout redirect host', async () => {
  const res = await startCheckout(request(), env, async () =>
    Response.json({ url: 'https://malicious.example', livemode: false }),
  );
  assert.equal(res.status, 502);
});
void test('a success URL alone cannot claim payment; status is read from Stripe', async () => {
  const req = new Request(
    origin + '/api/checkout-status?session_id=cs_test_example',
  );
  const res = await checkoutStatus(req, env, async () =>
    Response.json({
      livemode: false,
      payment_status: 'unpaid',
      amount_total: 1000,
      currency: 'usd',
      metadata: { product: 'cleardisk-preview' },
    }),
  );
  assert.equal(res.status, 200);
  assert.equal(((await res.json()) as { paid: boolean }).paid, false);
});
void test('requires the correct paid test product and amount', async () => {
  const req = new Request(
    origin + '/api/checkout-status?session_id=cs_test_example',
  );
  const res = await checkoutStatus(req, env, async () =>
    Response.json({
      livemode: false,
      payment_status: 'paid',
      amount_total: 1000,
      currency: 'usd',
      metadata: { product: 'cleardisk-preview' },
    }),
  );
  assert.deepEqual(await res.json(), { paid: true, mode: 'test' });
});
void test('never treats another product as a ClearDisk purchase', async () => {
  const req = new Request(
    origin + '/api/checkout-status?session_id=cs_test_example',
  );
  const res = await checkoutStatus(req, env, async () =>
    Response.json({
      livemode: false,
      payment_status: 'paid',
      amount_total: 1000,
      currency: 'usd',
      metadata: { product: 'different' },
    }),
  );
  assert.equal(res.status, 404);
});
