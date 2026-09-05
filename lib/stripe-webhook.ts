import { issueKey, revokeByPaymentIntent, type KVLike } from './license.ts';
const enc = new TextEncoder();
const hex = (buf: ArrayBuffer) =>
  [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
export async function verifyStripeSignature(
  payload: string,
  header: string | null,
  secret: string,
  now = Date.now() / 1000,
): Promise<boolean> {
  if (!header) return false;
  const parts = Object.fromEntries(
    header.split(',').map((p) => p.split('=') as [string, string]),
  );
  const t = Number(parts.t);
  if (!Number.isFinite(t) || Math.abs(now - t) > 300 || !parts.v1) return false;
  const k = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const expected = hex(
    await crypto.subtle.sign('HMAC', k, enc.encode(`${t}.${payload}`)),
  );
  if (expected.length !== parts.v1.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++)
    diff |= expected.charCodeAt(i) ^ parts.v1.charCodeAt(i);
  return diff === 0;
}
type Deps = {
  kv: KVLike;
  keySecret: string;
  sendKey: (email: string, key: string) => Promise<void>;
};
export async function handleStripeEvent(
  event: unknown,
  deps: Deps,
): Promise<'issued' | 'revoked' | 'ignored'> {
  const e = event as {
    type?: string;
    data?: { object?: Record<string, unknown> };
  };
  const o = e.data?.object ?? {};
  if (e.type === 'checkout.session.completed') {
    const meta = o.metadata as { product?: string } | undefined;
    if (
      o.payment_status !== 'paid' ||
      meta?.product !== 'cleardisk' ||
      typeof o.id !== 'string'
    )
      return 'ignored';
    const email =
      (o.customer_details as { email?: string } | undefined)?.email ?? null;
    const record = await issueKey(deps.kv, deps.keySecret, {
      id: o.id,
      email,
      paymentIntent:
        typeof o.payment_intent === 'string' ? o.payment_intent : null,
    });
    if (record.email)
      await deps
        .sendKey(record.email, record.key)
        .catch((err) => console.error('key email failed', err));
    return 'issued';
  }
  const pi = typeof o.payment_intent === 'string' ? o.payment_intent : null;
  if (
    pi &&
    ((e.type === 'charge.refunded' && o.refunded === true) ||
      e.type === 'charge.dispute.created')
  )
    return (await revokeByPaymentIntent(deps.kv, pi)) ? 'revoked' : 'ignored';
  return 'ignored';
}
