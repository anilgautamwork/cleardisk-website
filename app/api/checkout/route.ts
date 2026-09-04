import { env } from 'cloudflare:workers';
import { startCheckout } from '@/lib/checkout';
export async function POST(request: Request) {
  return startCheckout(request, env);
}
