import { env } from 'cloudflare:workers';
import { retrieveSession } from '@/lib/checkout';
import { issueKey, type LicenseRecord } from '@/lib/license';
import { json, sendKeyEmail, type LicenseEnv } from '@/lib/license-env';
export async function GET(request: Request) {
  const e = env as LicenseEnv;
  if (!e.LICENSES || !e.KEY_SECRET)
    return json({ error: 'License service is not configured.' }, 503);
  const sessionId = new URL(request.url).searchParams.get('session_id');
  if (!sessionId) return json({ error: 'ClearDisk purchase not found.' }, 404);
  const existingKey = await e.LICENSES.get('session:' + sessionId);
  if (existingKey) {
    const raw = await e.LICENSES.get('key:' + existingKey);
    const record = raw ? (JSON.parse(raw) as LicenseRecord) : null;
    return json({ key: existingKey, email: record ? record.email : null });
  }
  const session = await retrieveSession(sessionId, e);
  if (!session) return json({ error: 'ClearDisk purchase not found.' }, 404);
  if (!session.paid) return json({ error: 'Payment not confirmed yet.' }, 404);
  const record = await issueKey(e.LICENSES, e.KEY_SECRET, session);
  if (record.email) await sendKeyEmail(e, record.email, record.key);
  return json({ key: record.key, email: record.email });
}
