/* oxlint-disable react/react-compiler -- Browser consent hydration and external script readiness require post-mount state. */
'use client';
import Script from 'next/script';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  ADS_ID,
  GA_ID,
  CONSENT_EVENT,
  measurementConsent,
  measurementPage,
  chooseAdsConsent,
  consentParameters,
  type Consent,
} from '@/lib/ads-client';
export function GoogleAds({ publicPaths }: { publicPaths: string[] }) {
  const pathname = usePathname();
  const [consent, setConsent] = useState<Consent | null>(null);
  const [mounted, setMounted] = useState(false);
  const [editing, setEditing] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [configured, setConfigured] = useState(false);
  const lastPage = useRef<string | null>(null);
  const adsConfigured = useRef(false);
  const gaConfigured = useRef(false);
  useEffect(() => {
    setEnabled(
      window.location.hostname === 'cleardisk.app' &&
        process.env.SITE_INDEXABLE === 'true',
    );
    setConsent(measurementConsent());
    setMounted(true);
    const update = () => setConsent(measurementConsent());
    window.addEventListener(CONSENT_EVENT, update);
    window.addEventListener('storage', update);
    return () => {
      window.removeEventListener(CONSENT_EVENT, update);
      window.removeEventListener('storage', update);
    };
  }, []);
  useEffect(() => {
    if (!enabled) return;
    const page = measurementPage(window.location.href, publicPaths);
    const analytics = consent !== null && consent !== 'denied' && page !== null;
    const ads = consent === 'granted';
    // Stop GA on recovery, payment, activation and unknown URLs, even after SPA navigation.
    (window as unknown as Record<string, unknown>)['ga-disable-' + GA_ID] =
      !analytics;
    window.gtag?.('consent', 'update', consentParameters(ads, analytics));
    if (!analytics) lastPage.current = null;
    if (!ads && !analytics) return;
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        // oxlint-disable-next-line prefer-rest-params -- Official gtag queue format.
        window.dataLayer!.push(arguments);
      };
      window.gtag('consent', 'default', consentParameters(false));
      window.gtag('js', new Date());
    }
    window.gtag('consent', 'update', consentParameters(ads, analytics));
    let referrer = '';
    try {
      referrer = new URL(document.referrer).origin;
    } catch {
      /* No referrer. */
    }
    const safeConfig = {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      allow_enhanced_conversions: false,
      page_location: page || 'https://cleardisk.app/',
      page_referrer: referrer,
      page_title: 'ClearDisk',
    };
    if (ads && !adsConfigured.current) {
      const url = new URL(safeConfig.page_location);
      const query = new URLSearchParams(window.location.search);
      for (const key of ['gclid', 'gbraid', 'wbraid']) {
        const value = query.get(key);
        if (value && /^[A-Za-z0-9_.:-]{1,200}$/.test(value))
          url.searchParams.set(key, value);
      }
      window.gtag('config', ADS_ID, { ...safeConfig, page_location: url.href });
      adsConfigured.current = true;
    }
    if (analytics && !gaConfigured.current) {
      window.gtag('config', GA_ID, {
        ...safeConfig,
        cookie_expires: 60 * 60 * 24 * 60,
        cookie_update: false,
      });
      gaConfigured.current = true;
    }
    if (analytics && page !== lastPage.current) {
      window.gtag('set', {
        page_location: page,
        page_referrer: referrer,
        page_title: 'ClearDisk',
      });
      window.gtag('event', 'page_view', {
        send_to: GA_ID,
        page_location: page,
        page_referrer: referrer,
        page_title: 'ClearDisk',
      });
      lastPage.current = page;
    }
    setConfigured(true);
  }, [enabled, consent, pathname, publicPaths]);
  useEffect(() => {
    if (!enabled || !consent || consent === 'denied') return;
    const trackDownload = (event: MouseEvent) => {
      const page = measurementPage(window.location.href, publicPaths);
      const link =
        event.target instanceof Element ? event.target.closest('a') : null;
      if (!page || !link || measurementConsent() === 'denied') return;
      const url = new URL(link.href);
      if (
        url.origin === 'https://cleardisk.app' &&
        url.pathname === '/ClearDisk.dmg'
      )
        window.gtag?.('event', 'file_download', {
          send_to: GA_ID,
          page_location: page,
          file_name: 'ClearDisk.dmg',
          file_extension: 'dmg',
          link_url: 'https://cleardisk.app/ClearDisk.dmg',
        });
    };
    document.addEventListener('click', trackDownload);
    return () => document.removeEventListener('click', trackDownload);
  }, [enabled, consent, publicPaths]);
  function choose(choice: Consent) {
    chooseAdsConsent(choice);
    if (choice === 'denied') {
      for (const cookie of document.cookie.split(';')) {
        const name = cookie.split('=')[0].trim();
        if (!/^(_ga|_gcl_)/.test(name)) continue;
        for (const domain of [
          '',
          ';domain=cleardisk.app',
          ';domain=.cleardisk.app',
        ])
          document.cookie = `${name}=;max-age=0;path=/${domain};SameSite=Lax;Secure`;
      }
    }
    setConsent(choice);
    setEditing(false);
  }
  return (
    <>
      {enabled && configured && consent && consent !== 'denied' ? (
        <Script
          id="cleardisk-google-ads"
          strategy="afterInteractive"
          src={
            'https://www.googletagmanager.com/gtag/js?id=' +
            (consent === 'granted' ? ADS_ID : GA_ID)
          }
          onReady={() => {
            window.clearDiskAdsReady = true;
            window.dispatchEvent(new Event(CONSENT_EVENT));
          }}
        />
      ) : null}
      {mounted && (consent === null || editing) ? (
        <section
          className="ads-consent"
          aria-label="Measurement privacy preferences"
        >
          <p>
            Help us understand what works? Google Analytics measures page visits
            and download clicks. Allow all also measures ad clicks and
            purchases. We never send your email, license key or Mac files.
          </p>
          <div>
            <button
              className="button secondary"
              onClick={() => choose('denied')}
            >
              Decline
            </button>
            <button
              className="button secondary"
              onClick={() => choose('analytics')}
            >
              Analytics only
            </button>
            <button
              className="button primary"
              onClick={() => choose('granted')}
            >
              Allow all
            </button>
            <Link href="/privacy">Privacy details</Link>
          </div>
        </section>
      ) : null}
      <button className="ads-preferences" onClick={() => setEditing(true)}>
        Privacy settings
      </button>
    </>
  );
}
