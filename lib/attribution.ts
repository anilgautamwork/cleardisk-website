// Ad click identifiers and campaign labels that may travel from a landing
// URL into the Stripe session, so purchases can be matched to ads without a
// tracking pixel. Values are opaque tokens; anything else is dropped.
export const ATTRIBUTION_KEYS = [
  'gclid',
  'gbraid',
  'wbraid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'source',
] as const;
const VALUE = /^[A-Za-z0-9_.:-]{1,200}$/;
export function cleanAttribution(input: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  if (!input || typeof input !== 'object') return out;
  for (const key of ATTRIBUTION_KEYS) {
    const value = (input as Record<string, unknown>)[key];
    if (typeof value === 'string' && VALUE.test(value)) out[key] = value;
  }
  return out;
}
