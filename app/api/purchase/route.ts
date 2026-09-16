import { env } from 'cloudflare:workers';
import { json, retrieveSession } from '@/lib/checkout';
import type { LicenseEnv } from '@/lib/license-env';
export async function GET(request: Request) {
  const sessionId = new URL(request.url).searchParams.get('session_id') ?? '';
  // Always recheck Stripe; the license KV fast path contains no payment amount.
  const session = await retrieveSession(sessionId, env as LicenseEnv);
  return json({ purchase: session?.purchase ?? null });
}
