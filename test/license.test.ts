import { test } from 'node:test';
import assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import {
  activate,
  deriveKey,
  issueKey,
  keyEmail,
  keyForSession,
  normalizeKey,
  revokeByPaymentIntent,
  signReceipt,
  verifyReceipt,
} from '../lib/license.ts';
import { memoryKV } from './helpers.ts';
const session = {
  id: 'cs_live_abc123',
  email: 'Buyer@Example.com',
  paymentIntent: 'pi_1',
};
void test('keys are deterministic, canonical and normalize from sloppy input', async () => {
  const key = await deriveKey('secret', 'cs_live_abc123');
  assert.match(key, /^CLDK-[0-9A-HJKMNP-TV-Z]{4}(-[0-9A-HJKMNP-TV-Z]{4}){3}$/);
  assert.equal(key, await deriveKey('secret', 'cs_live_abc123'));
  assert.notEqual(key, await deriveKey('other', 'cs_live_abc123'));
  const body = key.slice(5);
  assert.equal(normalizeKey(body.toLowerCase().replaceAll('-', ' ')), key);
  assert.equal(
    normalizeKey(' cldk ' + body.replaceAll('0', 'O').replaceAll('1', 'I')),
    key,
  );
  assert.equal(normalizeKey('CLDK-1234'), null);
  assert.equal(normalizeKey(''), null);
});
void test('issueKey writes four entries once and repairs missing indexes on retry', async () => {
  const kv = memoryKV();
  const first = await issueKey(kv, 'secret', session);
  assert.equal(kv.store.get('email:buyer@example.com'), first.key);
  assert.equal(kv.store.get('pi:pi_1'), first.key);
  assert.equal(kv.store.get('session:cs_live_abc123'), first.key);
  assert.equal(JSON.parse(kv.store.get('key:' + first.key)!).status, 'active');
  // A failed earlier call can leave the record written but the indexes
  // missing; a retry with the same session must self-heal them.
  kv.store.delete('session:cs_live_abc123');
  kv.store.delete('email:buyer@example.com');
  kv.store.delete('pi:pi_1');
  const second = await issueKey(kv, 'secret', session);
  assert.deepEqual(second, first);
  assert.equal(kv.store.get('email:buyer@example.com'), first.key);
  assert.equal(kv.store.get('pi:pi_1'), first.key);
  assert.equal(kv.store.get('session:cs_live_abc123'), first.key);
});
void test('activate: 400, 404, 403, same machine twice, fourth machine 409', async () => {
  const kv = memoryKV();
  const { key } = await issueKey(kv, 'secret', session);
  const body = (machineId: string, machineName = machineId) => ({
    key,
    machineId,
    machineName,
    appVersion: '1.0.0',
  });
  assert.equal((await activate(kv, { key })).status, 400);
  assert.equal((await activate(kv, body('m1'))).status, 200);
  assert.equal(
    (await activate(kv, { ...body('m1'), key: key.toLowerCase() })).status,
    200,
  );
  assert.equal((await activate(kv, body('m2'))).status, 200);
  assert.equal((await activate(kv, body('m3'))).status, 200);
  const fourth = await activate(kv, body('m4'));
  assert.equal(fourth.status, 409);
  assert.deepEqual(fourth.body.machines, ['m1', 'm2', 'm3']);
  assert.equal(JSON.parse(kv.store.get('key:' + key)!).activations.length, 3);
  assert.equal(
    (await activate(kv, { ...body('m1'), key: 'CLDK-0000-0000-0000-0000' }))
      .status,
    404,
  );
  assert.equal(await revokeByPaymentIntent(kv, 'pi_1'), true);
  assert.equal(await revokeByPaymentIntent(kv, 'pi_missing'), false);
  assert.equal((await activate(kv, body('m1'))).status, 403);
});
void test('receipts verify only for the signed key and machine', async () => {
  const pair = (await webcrypto.subtle.generateKey({ name: 'Ed25519' }, true, [
    'sign',
    'verify',
  ])) as CryptoKeyPair;
  const b64 = (buf: ArrayBuffer) => Buffer.from(buf).toString('base64');
  const pkcs8 = b64(await webcrypto.subtle.exportKey('pkcs8', pair.privateKey));
  const raw = b64(await webcrypto.subtle.exportKey('raw', pair.publicKey));
  const sig = await signReceipt(pkcs8, 'CLDK-AAAA-AAAA-AAAA-AAAA', 'machine-1');
  assert.equal(
    await verifyReceipt(raw, 'CLDK-AAAA-AAAA-AAAA-AAAA', 'machine-1', sig),
    true,
  );
  assert.equal(
    await verifyReceipt(raw, 'CLDK-AAAA-AAAA-AAAA-AAAA', 'machine-2', sig),
    false,
  );
  assert.equal(
    await verifyReceipt(raw, 'CLDK-AAAA-AAAA-AAAA-AAAB', 'machine-1', sig),
    false,
  );
});
void test('keyForSession: a malformed session id is rejected without calling retrieve', async () => {
  const kv = memoryKV();
  let called = false;
  const result = await keyForSession(
    kv,
    'secret',
    'not-a-session',
    async () => {
      called = true;
      return null;
    },
  );
  assert.equal(result.status, 400);
  assert.equal(called, false);
});
void test('keyForSession: an active session: hit is served without calling retrieve', async () => {
  const kv = memoryKV();
  const first = await issueKey(kv, 'secret', session);
  let called = false;
  const result = await keyForSession(kv, 'secret', session.id, async () => {
    called = true;
    return null;
  });
  assert.equal(called, false);
  assert.equal(result.status, 200);
  if (result.status !== 200) throw new Error('unreachable');
  assert.deepEqual(result.body, { key: first.key, email: first.email });
  assert.equal(result.issued, false);
});
void test('keyForSession: a revoked record behind session: is reported not found', async () => {
  const kv = memoryKV();
  await issueKey(kv, 'secret', session);
  await revokeByPaymentIntent(kv, 'pi_1');
  const result = await keyForSession(
    kv,
    'secret',
    session.id,
    async () => null,
  );
  assert.equal(result.status, 404);
  assert.deepEqual(result.body, { error: 'ClearDisk purchase not found.' });
});
void test('keyForSession: a null retrieve is reported not found', async () => {
  const kv = memoryKV();
  const result = await keyForSession(
    kv,
    'secret',
    'cs_live_missing',
    async () => null,
  );
  assert.equal(result.status, 404);
  assert.deepEqual(result.body, { error: 'ClearDisk purchase not found.' });
});
void test('keyForSession: an unpaid session reports pending', async () => {
  const kv = memoryKV();
  const result = await keyForSession(
    kv,
    'secret',
    'cs_live_unpaid',
    async () => ({
      id: 'cs_live_unpaid',
      paid: false,
      email: null,
      paymentIntent: null,
    }),
  );
  assert.equal(result.status, 404);
  assert.deepEqual(result.body, {
    error: 'Payment not confirmed yet.',
    status: 'pending',
  });
});
void test('keyForSession: a paid session issues a key and writes all four entries', async () => {
  const kv = memoryKV();
  const result = await keyForSession(kv, 'secret', 'cs_live_new', async () => ({
    id: 'cs_live_new',
    paid: true,
    email: 'new@example.com',
    paymentIntent: 'pi_new',
  }));
  assert.equal(result.status, 200);
  if (result.status !== 200) throw new Error('unreachable');
  assert.equal(result.issued, true);
  assert.equal(kv.store.get('session:cs_live_new'), result.body.key);
  assert.equal(kv.store.get('email:new@example.com'), result.body.key);
  assert.equal(kv.store.get('pi:pi_new'), result.body.key);
  assert.ok(kv.store.get('key:' + result.body.key));
});
void test('key email carries the key, the activate link and support address', () => {
  const mail = keyEmail('CLDK-AAAA-AAAA-AAAA-AAAA');
  assert.equal(mail.subject, 'Your ClearDisk license key');
  for (const part of [mail.text, mail.html]) {
    assert.ok(part.includes('CLDK-AAAA-AAAA-AAAA-AAAA'));
    assert.ok(
      part.includes('cleardisk://activate?key=CLDK-AAAA-AAAA-AAAA-AAAA'),
    );
    assert.ok(part.includes('https://cleardisk.app/download'));
    assert.ok(part.includes('https://cleardisk.app/recover'));
    assert.ok(part.includes('hello@cleardisk.app'));
  }
});
