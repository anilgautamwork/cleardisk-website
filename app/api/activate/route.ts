import { env } from 'cloudflare:workers';
import { activate, signReceipt } from '@/lib/license';
import { json, type LicenseEnv } from '@/lib/license-env';
export async function POST(request: Request) {
  const e = env as LicenseEnv;
  if (!e.LICENSES || !e.LICENSE_SIGNING_KEY)
    return json({ error: 'License service is not configured.' }, 503);
  const body = await request.json().catch(() => null);
  const r = await activate(e.LICENSES, body);
  if (r.status !== 200) return json(r.body, r.status);
  let signature: string;
  try {
    signature = await signReceipt(
      e.LICENSE_SIGNING_KEY,
      r.record.key,
      r.machineId,
    );
  } catch (err) {
    console.error('signReceipt failed', err);
    return json({ error: 'License service is not configured.' }, 503);
  }
  return json({
    key: r.record.key,
    email: r.record.email,
    machineId: r.machineId,
    activatedAt: new Date().toISOString(),
    signature,
  });
}
