import { env } from 'cloudflare:workers';
import { verifyStripeSignature, handleStripeEvent } from '@/lib/stripe-webhook';
import { json, sendKeyEmail, type LicenseEnv } from '@/lib/license-env';
export async function POST(request: Request) {
  const e = env as LicenseEnv;
  if (!e.STRIPE_WEBHOOK_SECRET || !e.LICENSES || !e.KEY_SECRET)
    return json({ error: 'Webhook not configured.' }, 503);
  const payload = await request.text();
  if (
    !(await verifyStripeSignature(
      payload,
      request.headers.get('stripe-signature'),
      e.STRIPE_WEBHOOK_SECRET,
    ))
  )
    return json({ error: 'Invalid signature.' }, 400);
  let event: unknown;
  try {
    event = JSON.parse(payload);
  } catch {
    return json({ error: 'Invalid payload.' }, 400);
  }
  const result = await handleStripeEvent(event, {
    kv: e.LICENSES,
    keySecret: e.KEY_SECRET,
    sendKey: (to, key) => sendKeyEmail(e, to, key),
  });
  return json({ received: true, result });
}
