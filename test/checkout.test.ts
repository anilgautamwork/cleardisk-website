import { test } from 'node:test';
import assert from 'node:assert/strict';
import { startCheckout, retrieveSession } from '../lib/checkout.ts';
const origin = 'https://cleardisk.example';
const env = {
  STRIPE_SECRET_KEY: 'sk_test_example',
  STRIPE_PRICE_ID: 'price_test123',
  SITE_ORIGIN: origin,
};
const request = () =>
  new Request(origin + '/api/checkout', {
    method: 'POST',
    headers: { origin },
  });
const session = (body: Record<string, unknown>) =>
  Response.json({ url: 'https://checkout.stripe.com/c/pay/cs_x', ...body });
void test('checkout sells the configured price with the fields an Indian seller needs', async () => {
  const fakeFetch: typeof fetch = async (input, init) => {
    assert.equal(input, 'https://api.stripe.com/v1/checkout/sessions');
    const body = new URLSearchParams(init?.body as URLSearchParams);
    assert.equal(body.get('mode'), 'payment');
    assert.equal(body.get('line_items[0][price]'), 'price_test123');
    assert.equal(body.get('line_items[0][quantity]'), '1');
    assert.equal(body.get('billing_address_collection'), 'required');
    assert.equal(body.get('customer_creation'), 'always');
    assert.ok(body.get('payment_intent_data[description]'));
    assert.equal(
      body.get('payment_intent_data[statement_descriptor_suffix]'),
      'CLEARDISK',
    );
    assert.equal(body.get('metadata[product]'), 'cleardisk');
    assert.equal(
      body.get('payment_intent_data[metadata][product]'),
      'cleardisk',
    );
    assert.equal(body.get('currency'), null, 'Stripe localises the currency');
    assert.equal(
      body.get('success_url'),
      origin + '/thanks?session_id={CHECKOUT_SESSION_ID}',
    );
    return session({ livemode: false });
  };
  const res = await startCheckout(request(), env, fakeFetch);
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), {
    url: 'https://checkout.stripe.com/c/pay/cs_x',
    mode: 'test',
  });
});
void test('a publishable key of the same mode switches to embedded checkout', async () => {
  const embeddedEnv = { ...env, STRIPE_PUBLISHABLE_KEY: 'pk_test_pub' };
  const res = await startCheckout(request(), embeddedEnv, async (_, init) => {
    const body = new URLSearchParams(init?.body as URLSearchParams);
    assert.equal(body.get('ui_mode'), 'embedded');
    assert.equal(
      body.get('return_url'),
      origin + '/thanks?session_id={CHECKOUT_SESSION_ID}',
    );
    assert.equal(body.get('success_url'), null);
    assert.equal(body.get('cancel_url'), null);
    return Response.json({
      client_secret: 'cs_test_abc_secret_xyz',
      url: null,
      livemode: false,
    });
  });
  assert.deepEqual(await res.json(), {
    clientSecret: 'cs_test_abc_secret_xyz',
    publishableKey: 'pk_test_pub',
    mode: 'test',
  });
  const missing = await startCheckout(request(), embeddedEnv, async () =>
    Response.json({ url: null, livemode: false }),
  );
  assert.equal(missing.status, 502);
  const wrongMode = await startCheckout(
    request(),
    { ...env, STRIPE_PUBLISHABLE_KEY: 'pk_live_pub' },
    async (_, init) => {
      const body = new URLSearchParams(init?.body as URLSearchParams);
      assert.equal(body.get('ui_mode'), null, 'falls back to hosted');
      assert.ok(body.get('success_url'));
      return session({ livemode: false });
    },
  );
  assert.equal(wrongMode.status, 200);
});
void test('live keys open live sessions and a test session can never pass as live', async () => {
  const live = { ...env, STRIPE_SECRET_KEY: 'rk_live_example' };
  const ok = await startCheckout(request(), live, async () =>
    session({ livemode: true }),
  );
  assert.deepEqual(await ok.json(), {
    url: 'https://checkout.stripe.com/c/pay/cs_x',
    mode: 'live',
  });
  const wrong = await startCheckout(request(), live, async () =>
    session({ livemode: false }),
  );
  assert.equal(wrong.status, 502);
});
void test('fails closed without a valid key and price id', async () => {
  const never: typeof fetch = async () => {
    throw Error('must not call Stripe');
  };
  for (const broken of [
    { ...env, STRIPE_PRICE_ID: undefined },
    { ...env, STRIPE_PRICE_ID: 'prod_notaprice' },
    { ...env, STRIPE_SECRET_KEY: 'pk_live_publishable' },
    { ...env, SITE_ORIGIN: 'http://cleardisk.example' },
  ])
    assert.equal((await startCheckout(request(), broken, never)).status, 503);
});
void test('tolerates whitespace pasted around the secrets', async () => {
  const padded = {
    ...env,
    STRIPE_SECRET_KEY: ' sk_test_example\n',
    STRIPE_PRICE_ID: 'price_test123 ',
  };
  const res = await startCheckout(request(), padded, async (_, init) => {
    const body = new URLSearchParams(init?.body as URLSearchParams);
    assert.equal(body.get('line_items[0][price]'), 'price_test123');
    assert.equal(
      new Headers(init?.headers).get('Authorization'),
      'Bearer sk_test_example',
    );
    return session({ livemode: false });
  });
  assert.equal(res.status, 200);
});
void test('forwards clean ad attribution into session metadata and drops the rest', async () => {
  const req = new Request(origin + '/api/checkout', {
    method: 'POST',
    headers: { origin, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      attribution: {
        gclid: 'Cj0KCQjw-abc_123',
        utm_source: 'google',
        gbraid: 'bad value!',
        evil: 'x',
      },
    }),
  });
  const res = await startCheckout(req, env, async (_, init) => {
    const body = new URLSearchParams(init?.body as URLSearchParams);
    assert.equal(body.get('metadata[gclid]'), 'Cj0KCQjw-abc_123');
    assert.equal(body.get('metadata[utm_source]'), 'google');
    assert.equal(
      body.get('payment_intent_data[metadata][gclid]'),
      'Cj0KCQjw-abc_123',
    );
    assert.equal(body.get('metadata[gbraid]'), null);
    assert.equal(body.get('metadata[evil]'), null);
    assert.equal(body.get('metadata[product]'), 'cleardisk');
    return session({ livemode: false });
  });
  assert.equal(res.status, 200);
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
void test('retrieveSession returns null for another product and paid details for cleardisk', async () => {
  const other = await retrieveSession('cs_test_example', env, async () =>
    Response.json({
      livemode: false,
      payment_status: 'paid',
      metadata: { product: 'odoo' },
    }),
  );
  assert.equal(other, null);
  const session = await retrieveSession('cs_test_example', env, async () =>
    Response.json({
      livemode: false,
      payment_status: 'paid',
      metadata: { product: 'cleardisk' },
      customer_details: { email: 'buyer@example.com' },
      payment_intent: 'pi_1',
    }),
  );
  assert.deepEqual(session, {
    id: 'cs_test_example',
    paid: true,
    email: 'buyer@example.com',
    paymentIntent: 'pi_1',
  });
});
