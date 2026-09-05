export type CheckoutEnvironment = {
  STRIPE_SECRET_KEY?: string;
  STRIPE_PRICE_ID?: string;
  SITE_ORIGIN?: string;
};
// Every session this site creates carries this marker so other integrations
// sharing the Stripe account (and our own status check) can tell it apart.
export const PRODUCT = 'cleardisk';
const json = (body: unknown, status = 200) =>
  Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
const unavailable = () =>
  json(
    { error: 'Checkout is not available right now. Please try again later.' },
    503,
  );
function configuredOrigin(env: CheckoutEnvironment) {
  try {
    const url = new URL(env.SITE_ORIGIN || '');
    return url.protocol === 'https:' ||
      (url.protocol === 'http:' && url.hostname === 'localhost')
      ? url.origin
      : null;
  } catch {
    return null;
  }
}
// Test and live keys are both accepted; every Stripe object is then checked
// against the key's mode so a test session can never pass as a live purchase.
function keyMode(key: string): 'live' | 'test' | null {
  if (/^(sk|rk)_live_/.test(key)) return 'live';
  if (/^(sk|rk)_test_/.test(key)) return 'test';
  return null;
}
// Secrets are pasted by hand; tolerate stray whitespace around them.
const secret = (value: string | undefined) => (value || '').trim();
const stripeHeaders = (key: string) => ({
  Authorization: `Bearer ${key}`,
  'Stripe-Version': '2024-06-20',
});
export async function startCheckout(
  request: Request,
  env: CheckoutEnvironment,
  requestFetch: typeof fetch = fetch,
): Promise<Response> {
  const origin = configuredOrigin(env);
  const key = secret(env.STRIPE_SECRET_KEY);
  const price = secret(env.STRIPE_PRICE_ID);
  const mode = keyMode(key);
  if (!origin || !mode || !/^price_[A-Za-z0-9]+$/.test(price)) {
    // Read with `wrangler tail`; key prefixes and price ids are not secrets.
    console.warn('checkout unavailable', {
      origin: Boolean(origin),
      key: key.slice(0, 7) || 'unset',
      price: price.slice(0, 6) || 'unset',
      priceLength: price.length,
    });
    return unavailable();
  }
  if (request.headers.get('origin') !== origin)
    return json({ error: 'Request origin not allowed.' }, 403);
  const form = new URLSearchParams({
    mode: 'payment',
    'line_items[0][price]': price,
    'line_items[0][quantity]': '1',
    // The seller is an Indian company: international card payments must carry
    // the buyer's name, billing address and a description of what was sold.
    billing_address_collection: 'required',
    customer_creation: 'always',
    'payment_intent_data[description]': 'ClearDisk 1.0 license (pre-order)',
    'payment_intent_data[statement_descriptor_suffix]': 'CLEARDISK',
    'payment_intent_data[metadata][product]': PRODUCT,
    'metadata[product]': PRODUCT,
    success_url: origin + '/thanks?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: origin + '/buy-now?canceled=1',
  });
  try {
    const response = await requestFetch(
      'https://api.stripe.com/v1/checkout/sessions',
      {
        method: 'POST',
        headers: {
          ...stripeHeaders(key),
          'Content-Type': 'application/x-www-form-urlencoded',
          'Idempotency-Key': crypto.randomUUID(),
        },
        body: form,
        signal: AbortSignal.timeout(12000),
      },
    );
    if (!response.ok)
      return json(
        { error: 'Stripe could not open checkout. Please try again.' },
        502,
      );
    const session = (await response.json()) as {
      url?: string;
      livemode?: boolean;
    };
    if (!session.url || session.livemode !== (mode === 'live'))
      return json({ error: 'Checkout could not be verified.' }, 502);
    const url = new URL(session.url);
    if (url.origin !== 'https://checkout.stripe.com')
      return json({ error: 'Unexpected checkout destination.' }, 502);
    return json({ url: session.url, mode });
  } catch {
    return json({ error: 'Could not reach Stripe. Please try again.' }, 502);
  }
}
export async function checkoutStatus(
  request: Request,
  env: CheckoutEnvironment,
  requestFetch: typeof fetch = fetch,
): Promise<Response> {
  const key = secret(env.STRIPE_SECRET_KEY);
  const mode = keyMode(key);
  if (!mode) return unavailable();
  const sessionId = new URL(request.url).searchParams.get('session_id');
  if (
    !sessionId ||
    !new RegExp(`^cs_${mode}_[A-Za-z0-9_]{1,200}$`).test(sessionId)
  )
    return json({ error: 'Valid checkout session required.' }, 400);
  try {
    const response = await requestFetch(
      'https://api.stripe.com/v1/checkout/sessions/' +
        encodeURIComponent(sessionId),
      {
        headers: stripeHeaders(key),
        signal: AbortSignal.timeout(12000),
      },
    );
    if (!response.ok)
      return json({ error: 'Could not verify this checkout.' }, 404);
    const s = (await response.json()) as {
      livemode?: boolean;
      payment_status?: string;
      metadata?: { product?: string };
      customer_details?: { email?: string | null };
    };
    if (s.livemode !== (mode === 'live') || s.metadata?.product !== PRODUCT)
      return json({ error: 'ClearDisk purchase not found.' }, 404);
    return json({
      paid: s.payment_status === 'paid',
      mode,
      email: s.customer_details?.email ?? null,
    });
  } catch {
    return json({ error: 'Could not verify payment. Please try again.' }, 502);
  }
}
