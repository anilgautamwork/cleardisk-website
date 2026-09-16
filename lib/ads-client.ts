import type { AdsPurchase } from './ads-purchase.ts';
export const ADS_ID = 'AW-10925384709';
export const ADS_DESTINATION = ADS_ID + '/MoykCO79r_kcEIXI0Nko';
export const CONSENT_KEY = 'cleardisk.ads-consent';
export const CONSENT_EVENT = 'cleardisk:ads-consent';
export type Consent = 'granted' | 'denied';
type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    clearDiskAdsReady?: boolean;
  }
}
let memoryConsent: Consent | null = null;
export function adsConsent(): Consent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : memoryConsent;
  } catch {
    return memoryConsent;
  }
}
export function consentParameters(granted: boolean) {
  return {
    ad_storage: granted ? 'granted' : 'denied',
    ad_user_data: granted ? 'granted' : 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  };
}
export function chooseAdsConsent(choice: Consent) {
  memoryConsent = choice;
  try {
    localStorage.setItem(CONSENT_KEY, choice);
    if (choice === 'denied') localStorage.removeItem('cleardisk.click');
  } catch {
    /* Choice applies to this page when persistence is unavailable. */
  }
  window.gtag?.(
    'consent',
    'update',
    consentParameters(choice === 'granted' && adsConsent() === 'granted'),
  );
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
// Dependency injection makes consent, repeats and failed dispatch testable without Google.
export function dispatchPurchase(
  purchase: AdsPurchase | null,
  deps: {
    consent: boolean;
    ready: boolean;
    send: Gtag;
    sent: Set<string>;
  },
): boolean {
  if (
    !deps.consent ||
    !deps.ready ||
    !purchase ||
    !/^cd_[a-f0-9]{64}$/.test(purchase.transaction_id) ||
    !Number.isFinite(purchase.value) ||
    purchase.value <= 0 ||
    !/^[A-Z]{3}$/.test(purchase.currency) ||
    deps.sent.has(purchase.transaction_id)
  )
    return false;
  deps.send('event', 'conversion', {
    send_to: ADS_DESTINATION,
    value: purchase.value,
    currency: purchase.currency,
    transaction_id: purchase.transaction_id,
  });
  deps.sent.add(purchase.transaction_id);
  return true;
}
const sent = new Set<string>();
export function trackPurchase(purchase: AdsPurchase | null) {
  if (!window.gtag || window.location.hostname !== 'cleardisk.app') return;
  dispatchPurchase(purchase, {
    consent: adsConsent() === 'granted',
    ready: window.clearDiskAdsReady === true,
    send: window.gtag,
    sent,
  });
}
