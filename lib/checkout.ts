export type CheckoutEnvironment = {
  STRIPE_SECRET_KEY?: string;
  SITE_ORIGIN?: string;
};
const json = (body: unknown, status = 200) =>
  Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
const unavailable = () =>
  json(
    {
      error:
        'Test checkout is not available right now. Please try again later.',
    },
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
export async function startCheckout(
  request: Request,
  env: CheckoutEnvironment,
  requestFetch: typeof fetch = fetch,
): Promise<Response> {
  const origin = configuredOrigin(env);
  if (!origin || !env.STRIPE_SECRET_KEY?.startsWith('sk_test_'))
    return unavailable();
  if (request.headers.get('origin') !== origin)
    return json({ error: 'Request origin not allowed.' }, 403);
  const form = new URLSearchParams({
    mode: 'payment',
    'line_items[0][quantity]': '1',
    'line_items[0][price_data][currency]': 'usd',
    'line_items[0][price_data][unit_amount]': '1000',
    'line_items[0][price_data][product_data][name]':
      'ClearDisk 1.0 — Test purchase',
    'line_items[0][price_data][product_data][description]':
      'TEST MODE ONLY. No real charge or license. Planned one-time license for 3 Macs.',
    'metadata[product]': 'cleardisk-preview',
    success_url: origin + '/thanks?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: origin + '/buy-now?canceled=1',
  });
  try {
    const response = await requestFetch(
      'https://api.stripe.com/v1/checkout/sessions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          'Stripe-Version': '2024-06-20',
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
    if (!session.url || session.livemode !== false)
      return json({ error: 'Test checkout could not be verified.' }, 502);
    const url = new URL(session.url);
    if (url.origin !== 'https://checkout.stripe.com')
      return json({ error: 'Unexpected checkout destination.' }, 502);
    return json({ url: session.url, mode: 'test' });
  } catch {
    return json({ error: 'Could not reach Stripe. Please try again.' }, 502);
  }
}
export async function checkoutStatus(
  request: Request,
  env: CheckoutEnvironment,
  requestFetch: typeof fetch = fetch,
): Promise<Response> {
  if (!env.STRIPE_SECRET_KEY?.startsWith('sk_test_')) return unavailable();
  const sessionId = new URL(request.url).searchParams.get('session_id');
  if (!sessionId || !/^cs_test_[A-Za-z0-9_]{1,200}$/.test(sessionId))
    return json({ error: 'Valid test session required.' }, 400);
  try {
    const response = await requestFetch(
      'https://api.stripe.com/v1/checkout/sessions/' +
        encodeURIComponent(sessionId),
      {
        headers: {
          Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
          'Stripe-Version': '2024-06-20',
        },
        signal: AbortSignal.timeout(12000),
      },
    );
    if (!response.ok)
      return json({ error: 'Could not verify this checkout.' }, 404);
    const s = (await response.json()) as {
      livemode?: boolean;
      payment_status?: string;
      amount_total?: number;
      currency?: string;
      metadata?: { product?: string };
    };
    if (
      s.livemode !== false ||
      s.metadata?.product !== 'cleardisk-preview' ||
      s.amount_total !== 1000 ||
      s.currency !== 'usd'
    )
      return json({ error: 'ClearDisk test purchase not found.' }, 404);
    return json({ paid: s.payment_status === 'paid', mode: 'test' });
  } catch {
    return json({ error: 'Could not verify payment. Please try again.' }, 502);
  }
}
