import { headers } from 'next/headers';
import { localPrice, type LocalPrice } from './pricing';
/** Cloudflare sets cf-ipcountry on every request; absent locally → USD. */
export async function visitorPrice(): Promise<LocalPrice> {
  return localPrice((await headers()).get('cf-ipcountry'));
}
