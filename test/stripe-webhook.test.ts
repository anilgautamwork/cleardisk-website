import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import {
  handleStripeEvent,
  verifyStripeSignature,
} from '../lib/stripe-webhook.ts';
import { deriveKey } from '../lib/license.ts';
import { memoryKV } from './helpers.ts';
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
    live: true,
    sendKey: async (email: string, key: string) => {
      sent.push(email + ' ' + key);
    },
  };
  const paid = {
    type: 'checkout.session.completed',
    livemode: true,
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
    live: true,
    sendKey: async (email: string, key: string) => {
      sent.push(email + ' ' + key);
    },
  };
  const paid = {
    type: 'checkout.session.completed',
    livemode: true,
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
  const deps = { kv, keySecret: 's', live: true, sendKey: async () => {} };
  await handleStripeEvent(
    {
      type: 'checkout.session.completed',
      livemode: true,
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
        livemode: true,
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
        livemode: true,
        data: { object: { payment_intent: 'pi_2', refunded: true } },
      },
      deps,
    ),
    'revoked',
  );
  await handleStripeEvent(
    {
      type: 'checkout.session.completed',
      livemode: true,
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
        livemode: true,
        data: { object: { payment_intent: 'pi_3' } },
      },
      deps,
    ),
    'revoked',
  );
  assert.equal(
    await handleStripeEvent(
      {
        type: 'customer.subscription.created',
        livemode: true,
        data: { object: {} },
      },
      deps,
    ),
    'ignored',
  );
});
void test('events are ignored when livemode does not match the account', async () => {
  const kv = memoryKV();
  const sent: string[] = [];
  const paid = {
    type: 'checkout.session.completed',
    livemode: false,
    data: {
      object: {
        id: 'cs_test_mode',
        payment_status: 'paid',
        metadata: { product: 'cleardisk' },
        payment_intent: 'pi_mode',
        customer_details: { email: 'mode@example.com' },
      },
    },
  };
  const deps = (live: boolean) => ({
    kv,
    keySecret: 's',
    live,
    sendKey: async (email: string, key: string) => {
      sent.push(email + ' ' + key);
    },
  });
  assert.equal(await handleStripeEvent(paid, deps(true)), 'ignored');
  assert.equal(sent.length, 0);
  assert.equal(await handleStripeEvent(paid, deps(false)), 'issued');
  assert.equal(sent.length, 1);
});
void test('checkout.session.async_payment_succeeded is handled like checkout.session.completed', async () => {
  const kv = memoryKV();
  const sent: string[] = [];
  const deps = {
    kv,
    keySecret: 's',
    live: true,
    sendKey: async (email: string, key: string) => {
      sent.push(email + ' ' + key);
    },
  };
  const event = {
    type: 'checkout.session.async_payment_succeeded',
    livemode: true,
    data: {
      object: {
        id: 'cs_live_async',
        payment_status: 'paid',
        metadata: { product: 'cleardisk' },
        payment_intent: 'pi_async',
        customer_details: { email: 'async@example.com' },
      },
    },
  };
  assert.equal(await handleStripeEvent(event, deps), 'issued');
  assert.deepEqual(sent, [
    'async@example.com ' + (await deriveKey('s', 'cs_live_async')),
  ]);
});
void test('a failing email send still issues the key and writes the record', async () => {
  const kv = memoryKV();
  const deps = {
    kv,
    keySecret: 's',
    live: true,
    sendKey: async () => {
      throw new Error('send failed');
    },
  };
  const event = {
    type: 'checkout.session.completed',
    livemode: true,
    data: {
      object: {
        id: 'cs_live_failmail',
        payment_status: 'paid',
        metadata: { product: 'cleardisk' },
        payment_intent: 'pi_failmail',
        customer_details: { email: 'failmail@example.com' },
      },
    },
  };
  assert.equal(await handleStripeEvent(event, deps), 'issued');
  assert.equal(
    kv.store.get('session:cs_live_failmail'),
    await deriveKey('s', 'cs_live_failmail'),
  );
});
