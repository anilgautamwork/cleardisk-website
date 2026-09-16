import type { KVLike } from './license.ts';
export type AdsPurchase = {
  transaction_id: string;
  value: number;
  currency: string;
};
// Stripe charge units, not payout units. ISK and UGX deliberately use /100.
const zeroDecimal = new Set(
  'BIF CLP DJF GNF JPY KMF KRW MGA PYG RWF VND VUV XAF XOF XPF'.split(' '),
);
const threeDecimal = new Set('BHD JOD KWD OMR TND'.split(' '));
export async function verifiedPurchase(
  session: Record<string, unknown>,
): Promise<AdsPurchase | null> {
  const meta = session.metadata as Record<string, unknown> | undefined;
  if (
    session.livemode !== true ||
    session.payment_status !== 'paid' ||
    session.status !== 'complete' ||
    meta?.product !== 'cleardisk' ||
    typeof session.id !== 'string' ||
    !/^cs_live_[A-Za-z0-9_]{1,200}$/.test(session.id) ||
    !Number.isSafeInteger(session.amount_total) ||
    (session.amount_total as number) <= 0 ||
    typeof session.currency !== 'string' ||
    !/^[a-zA-Z]{3}$/.test(session.currency)
  )
    return null;
  const currency = session.currency.toUpperCase();
  if (!Intl.supportedValuesOf('currency').includes(currency)) return null;
  const divisor = zeroDecimal.has(currency)
    ? 1
    : threeDecimal.has(currency)
      ? 1000
      : 100;
  // Do not expose the session ID: it is also a bearer token for license recovery.
  const hash = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode('cleardisk:ads:' + session.id),
  );
  const transaction_id =
    'cd_' +
    [...new Uint8Array(hash)]
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  return {
    transaction_id,
    value: (session.amount_total as number) / divisor,
    currency,
  };
}
export async function recordOfflinePurchase(
  kv: KVLike,
  session: Record<string, unknown>,
  eventTime: unknown,
) {
  const purchase = await verifiedPurchase(session);
  const metadata = session.metadata as Record<string, unknown> | undefined;
  // Unknown/legacy consent never qualifies for an import.
  if (
    !purchase ||
    metadata?.ads_consent !== 'granted' ||
    !Number.isSafeInteger(eventTime) ||
    (eventTime as number) <= 0
  )
    return;
  const ids: Record<string, string> = {};
  for (const key of ['gclid', 'gbraid', 'wbraid']) {
    const value = metadata[key];
    if (typeof value === 'string' && /^[A-Za-z0-9_.:-]{1,200}$/.test(value))
      ids[key] = value;
  }
  if (!Object.keys(ids).length) return;
  const key = 'ads-order:' + purchase.transaction_id;
  if (await kv.get(key)) return;
  await kv.put(
    key,
    JSON.stringify({
      ...purchase,
      ...ids,
      conversion_time: new Date((eventTime as number) * 1000).toISOString(),
      ad_user_data: 'GRANTED',
      ad_personalization: 'DENIED',
    }),
    { expirationTtl: 90 * 86400 },
  );
}
