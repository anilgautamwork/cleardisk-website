// Mirrors the currency options on the Stripe price (price_1UC1KFSH0Xh3U2LGcghSdBPK).
// Stripe presents the buyer's local currency at checkout when the price has it;
// this table lets the pages show the same number. Update both together.
const AMOUNTS: Record<string, number> = {
  USD: 10,
  INR: 599,
  EUR: 8,
  GBP: 8,
  AED: 36.7275,
};
const EUROZONE = new Set(
  'AT BE CY DE EE ES FI FR GR HR IE IT LT LU LV MT NL PT SI SK'.split(' '),
);
export type LocalPrice = { code: string; amount: number; display: string };
export function currencyFor(country: string | null | undefined): string {
  const c = (country || '').toUpperCase();
  if (c === 'IN') return 'INR';
  if (c === 'GB') return 'GBP';
  if (c === 'AE') return 'AED';
  if (EUROZONE.has(c)) return 'EUR';
  return 'USD';
}
export function localPrice(country: string | null | undefined): LocalPrice {
  const code = currencyFor(country);
  const amount = AMOUNTS[code];
  const display = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
    .format(amount)
    .replace(/\u00a0/g, ' ');
  return { code, amount, display };
}
