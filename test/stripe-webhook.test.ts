import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import {
  handleStripeEvent,
  verifyStripeSignature,
} from '../lib/stripe-webhook.ts';
import { deriveKey, type KVLike } from '../lib/license.ts';
const memoryKV = (): KVLike & { store: Map<string, string> } => {
  const store = new Map<string, string>();
  return {
    store,
    async get(k) {
      return store.get(k) ?? null;
    },
    async put(k, v) {
      store.set(k, v);
    },
  };
};
const sign = (
  payload: string,
  secret: string,
  t = Math.floor(Date.now() / 1000),
) =>
  `t=${t},v1=${createHmac('sha256', secret).update(`${t}.${payload}`).digest('hex')}`;
void test('signature verification accepts fresh valid signatures only', async () => {
  const payload = '{"id":"evt_1"}';
  assert.equal(
    await verifyStripeSignature(payload, sign(payload, 'whsec_x'), 'whsec_x'),
    true,
  );
  assert.equal(
    await verifyStripeSignature(
      payload,
      sign(payload, 'whsec_other'),
      'whsec_x',
    ),
    false,
  );
  assert.equal(
    await verifyStripeSignature(
      payload + ' ',
      sign(payload, 'whsec_x'),
      'whsec_x',
    ),
    false,
  );
  assert.equal(
    await verifyStripeSignature(
      payload,
      sign(payload, 'whsec_x', 1000),
      'whsec_x',
    ),
    false,
  );
  assert.equal(await verifyStripeSignature(payload, null, 'whsec_x'), false);
});
void test('paid ClearDisk sessions issue a key and email it; other products are ignored', async () => {
  const kv = memoryKV();
  const sent: string[] = [];
  const deps = {
    kv,
    keySecret: 's',
    sendKey: async (email: string, key: string) => {
      sent.push(email + ' ' + key);
    },
  };
  const paid = {
    type: 'checkout.session.completed',
    data: {
      object: {
        id: 'cs_live_1',
        payment_status: 'paid',
        metadata: { product: 'cleardisk' },
        payment_intent: 'pi_1',
        customer_details: { email: 'b@example.com' },
      },
    },
  };
  assert.equal(await handleStripeEvent(paid, deps), 'issued');
  assert.deepEqual(sent, [
    'b@example.com ' + (await deriveKey('s', 'cs_live_1')),
  ]);
  assert.equal(
    await handleStripeEvent(
      {
        ...paid,
        data: {
          object: { ...paid.data.object, metadata: { product: 'odoo' } },
        },
      },
      deps,
    ),
    'ignored',
  );
  assert.equal(
    await handleStripeEvent(
      {
        ...paid,
        data: { object: { ...paid.data.object, payment_status: 'unpaid' } },
      },
      deps,
    ),
    'ignored',
  );
});
void test('a second delivery of the same paid event is ignored and does not re-email', async () => {
  const kv = memoryKV();
  const sent: string[] = [];
  const deps = {
    kv,
    keySecret: 's',
    sendKey: async (email: string, key: string) => {
      sent.push(email + ' ' + key);
    },
  };
  const paid = {
    type: 'checkout.session.completed',
    data: {
      object: {
        id: 'cs_live_dup',
        payment_status: 'paid',
        metadata: { product: 'cleardisk' },
        payment_intent: 'pi_dup',
        customer_details: { email: 'dup@example.com' },
      },
    },
  };
  assert.equal(await handleStripeEvent(paid, deps), 'issued');
  assert.equal(await handleStripeEvent(paid, deps), 'ignored');
  assert.deepEqual(sent, [
    'dup@example.com ' + (await deriveKey('s', 'cs_live_dup')),
  ]);
});
void test('full refunds and disputes revoke; partial refunds do not', async () => {
  const kv = memoryKV();
  const deps = { kv, keySecret: 's', sendKey: async () => {} };
  await handleStripeEvent(
    {
      type: 'checkout.session.completed',
      data: {
        object: {
          id: 'cs_live_2',
          payment_status: 'paid',
          metadata: { product: 'cleardisk' },
          payment_intent: 'pi_2',
          customer_details: { email: 'c@example.com' },
        },
      },
    },
    deps,
  );
  assert.equal(
    await handleStripeEvent(
      {
        type: 'charge.refunded',
        data: { object: { payment_intent: 'pi_2', refunded: false } },
      },
      deps,
    ),
    'ignored',
  );
  assert.equal(
    await handleStripeEvent(
      {
        type: 'charge.refunded',
        data: { object: { payment_intent: 'pi_2', refunded: true } },
      },
      deps,
    ),
    'revoked',
  );
  await handleStripeEvent(
    {
      type: 'checkout.session.completed',
      data: {
        object: {
          id: 'cs_live_3',
          payment_status: 'paid',
          metadata: { product: 'cleardisk' },
          payment_intent: 'pi_3',
          customer_details: { email: 'd@example.com' },
        },
      },
    },
    deps,
  );
  assert.equal(
    await handleStripeEvent(
      {
        type: 'charge.dispute.created',
        data: { object: { payment_intent: 'pi_3' } },
      },
      deps,
    ),
    'revoked',
  );
  assert.equal(
    await handleStripeEvent(
      { type: 'customer.subscription.created', data: { object: {} } },
      deps,
    ),
    'ignored',
  );
});
