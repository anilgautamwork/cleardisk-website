import { env, waitUntil } from 'cloudflare:workers';
import { retrieveSession } from '@/lib/checkout';
import { keyForSession } from '@/lib/license';
import { json, sendKeyEmail, type LicenseEnv } from '@/lib/license-env';
export async function GET(request: Request) {
  const e = env as LicenseEnv;
  if (!e.LICENSES || !e.KEY_SECRET)
    return json({ error: 'License service is not configured.' }, 503);
  const sessionId = new URL(request.url).searchParams.get('session_id') ?? '';
  const result = await keyForSession(
    e.LICENSES,
    e.KEY_SECRET,
    sessionId,
    (id) => retrieveSession(id, e),
  );
  if (result.status === 200 && result.issued && result.record.email)
    waitUntil(sendKeyEmail(e, result.record.email, result.record.key));
  return json(result.body, result.status);
}
