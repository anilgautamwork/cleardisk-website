/* oxlint-disable react/react-compiler -- Browser consent hydration and external script readiness require post-mount state. */
'use client';
import Script from 'next/script';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  ADS_ID,
  CONSENT_EVENT,
  adsConsent,
  chooseAdsConsent,
  consentParameters,
  type Consent,
} from '@/lib/ads-client';
export function GoogleAds() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [mounted, setMounted] = useState(false);
  const [editing, setEditing] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [configured, setConfigured] = useState(false);
  useEffect(() => {
    const production =
      window.location.hostname === 'cleardisk.app' &&
      process.env.SITE_INDEXABLE === 'true';
    // Hydrate browser-only preferences after the server render.
    setEnabled(production);
    setConsent(adsConsent());
    setMounted(true);
    const update = () => {
      const choice = adsConsent();
      window.gtag?.(
        'consent',
        'update',
        consentParameters(choice === 'granted'),
      );
      setConsent(choice);
    };
    window.addEventListener(CONSENT_EVENT, update);
    window.addEventListener('storage', update);
    return () => {
      window.removeEventListener(CONSENT_EVENT, update);
      window.removeEventListener('storage', update);
    };
  }, []);
  useEffect(() => {
    if (!enabled || consent !== 'granted') return;
    // External script initialization must complete before rendering Script.
    if (window.gtag) {
      setConfigured(true);
      return;
    }
    window.dataLayer = window.dataLayer || [];
    // Google’s documented queue requires an Arguments object.
    window.gtag = function () {
      // oxlint-disable-next-line prefer-rest-params -- Official gtag queue format.
      window.dataLayer!.push(arguments);
    };
    window.gtag('consent', 'default', consentParameters(false));
    window.gtag('consent', 'update', consentParameters(true));
    window.gtag('js', new Date());
    const location = new URL(window.location.href);
    // Never transmit session_id, activation keys, or arbitrary URL parameters.
    const safeQuery = new URLSearchParams();
    for (const key of ['gclid', 'gbraid', 'wbraid']) {
      const value = location.searchParams.get(key);
      if (value && /^[A-Za-z0-9_.:-]{1,200}$/.test(value))
        safeQuery.set(key, value);
    }
    location.search = safeQuery.toString();
    location.hash = '';
    let referrer = '';
    try {
      const url = new URL(document.referrer);
      referrer = url.origin + url.pathname;
    } catch {
      /* No referrer. */
    }
    window.gtag('config', ADS_ID, {
      send_page_view: false,
      allow_ad_personalization_signals: false,
      allow_enhanced_conversions: false,
      page_location: location.href,
      page_referrer: referrer,
    });
    setConfigured(true);
  }, [enabled, consent]);
  function choose(choice: Consent) {
    chooseAdsConsent(choice);
    setConsent(adsConsent());
    setEditing(false);
  }
  return (
    <>
      {enabled && configured && consent === 'granted' ? (
        <Script
          id="cleardisk-google-ads"
          strategy="afterInteractive"
          src={'https://www.googletagmanager.com/gtag/js?id=' + ADS_ID}
          onReady={() => {
            window.clearDiskAdsReady = true;
            window.dispatchEvent(new Event(CONSENT_EVENT));
          }}
        />
      ) : null}
      {mounted && (consent === null || editing) ? (
        <section
          className="ads-consent"
          aria-label="Advertising measurement preferences"
        >
          <p>
            May we measure ad purchases? With your permission, Google receives
            ad click identifiers and order value, currency and an anonymous
            order ID. We never send your email or license key.
          </p>
          <div>
            <button
              className="button secondary"
              onClick={() => choose('denied')}
            >
              Decline
            </button>
            <button
              className="button primary"
              onClick={() => choose('granted')}
            >
              Allow measurement
            </button>
            <Link href="/privacy">Privacy details</Link>
          </div>
        </section>
      ) : null}
      <button className="ads-preferences" onClick={() => setEditing(true)}>
        Ad privacy settings
      </button>
    </>
  );
}
