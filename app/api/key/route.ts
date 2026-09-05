import { env } from 'cloudflare:workers';
import { retrieveSession } from '@/lib/checkout';
import { issueKey, readRecord } from '@/lib/license';
import { json, sendKeyEmail, type LicenseEnv } from '@/lib/license-env';
export async function GET(request: Request) {
  const e = env as LicenseEnv;
  if (!e.LICENSES || !e.KEY_SECRET)
    return json({ error: 'License service is not configured.' }, 503);
  const sessionId = new URL(request.url).searchParams.get('session_id');
  if (!sessionId) return json({ error: 'ClearDisk purchase not found.' }, 404);
  const existingKey = await e.LICENSES.get('session:' + sessionId);
  if (existingKey) {
    const record = await readRecord(e.LICENSES, existingKey);
    // A revoked key (refund/dispute) must not be handed back to a stale
    // thanks-page link even though the old session: mapping still exists.
    if (!record || record.status !== 'active')
      return json({ error: 'ClearDisk purchase not found.' }, 404);
    return json({ key: existingKey, email: record.email });
  }
  const session = await retrieveSession(sessionId, e);
  if (!session) return json({ error: 'ClearDisk purchase not found.' }, 404);
  if (!session.paid) return json({ error: 'Payment not confirmed yet.' }, 404);
  const record = await issueKey(e.LICENSES, e.KEY_SECRET, session);
  if (record.email) await sendKeyEmail(e, record.email, record.key);
  return json({ key: record.key, email: record.email });
}
