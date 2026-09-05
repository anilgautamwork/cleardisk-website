import { json, type CheckoutEnvironment } from './checkout.ts';
import { keyEmail } from './license.ts';
export { json };
export type LicenseEnv = CheckoutEnvironment & {
  LICENSES?: KVNamespace;
  EMAIL?: {
    send(msg: {
      to: string;
      from: { email: string; name: string };
      subject: string;
      text: string;
      html: string;
    }): Promise<unknown>;
  };
  KEY_SECRET?: string;
  LICENSE_SIGNING_KEY?: string;
  STRIPE_WEBHOOK_SECRET?: string;
};
// Delivery is best-effort: a failed or unconfigured send must never fail the
// request that triggered it, so this always resolves.
export async function sendKeyEmail(
  env: LicenseEnv,
  email: string,
  key: string,
): Promise<void> {
  if (!env.EMAIL) {
    console.warn('EMAIL binding missing; key not emailed');
    return;
  }
  const { subject, text, html } = keyEmail(key);
  try {
    await env.EMAIL.send({
      to: email,
      from: { email: 'hello@cleardisk.app', name: 'ClearDisk' },
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error('key email failed', err);
  }
}
