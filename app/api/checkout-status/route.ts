import { env } from 'cloudflare:workers';
import { checkoutStatus } from '@/lib/checkout';
export async function GET(request: Request) {
  return checkoutStatus(request, env);
}
