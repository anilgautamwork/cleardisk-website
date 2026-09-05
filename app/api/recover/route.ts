import { env, waitUntil } from 'cloudflare:workers';
import type { LicenseRecord } from '@/lib/license';
import { json, sendKeyEmail, type LicenseEnv } from '@/lib/license-env';
// Always the same message, whether or not the address ever bought ClearDisk:
// a recover form must not leak which emails exist in the system.
const MESSAGE =
  'If that address bought ClearDisk, the key is on its way. Check spam, then email hello@cleardisk.app.';
export async function POST(request: Request) {
  const e = env as LicenseEnv;
  const body = (await request.json().catch(() => null)) as {
    email?: unknown;
  } | null;
  const email =
    typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (email && e.LICENSES) {
    const key = await e.LICENSES.get('email:' + email);
    const raw = key ? await e.LICENSES.get('key:' + key) : null;
    const record = raw ? (JSON.parse(raw) as LicenseRecord) : null;
    if (record?.status === 'active')
      waitUntil(sendKeyEmail(e, record.email, record.key));
  }
  return json({ message: MESSAGE });
}
