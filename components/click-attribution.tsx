'use client';
import { useEffect } from 'react';
import { adsConsent, CONSENT_EVENT } from '@/lib/ads-client';
import { ATTRIBUTION_KEYS, cleanAttribution } from '@/lib/attribution';
const STORAGE_KEY = 'cleardisk.click';
const NINETY_DAYS = 90 * 24 * 60 * 60 * 1000;
/** Attribution remembered from the landing URL, or an empty object. */
export function storedAttribution(): Record<string, string> {
  if (adsConsent() !== 'granted') return {};
  const incoming = cleanAttribution(
    Object.fromEntries(new URLSearchParams(window.location.search)),
  );
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return incoming;
    const { at, data } = JSON.parse(raw) as { at: number; data: unknown };
    return !Number.isFinite(at) ||
      at > Date.now() ||
      Date.now() - at > NINETY_DAYS
      ? incoming
      : { ...cleanAttribution(data), ...incoming };
  } catch {
    return incoming;
  }
}
/** Renders nothing; records gclid/utm parameters from the URL for 90 days. */
export function ClickAttribution() {
  useEffect(() => {
    function capture() {
      if (adsConsent() !== 'granted') return;
      try {
        const params = new URLSearchParams(window.location.search);
        const incoming: Record<string, string> = {};
        for (const key of ATTRIBUTION_KEYS) {
          const value = params.get(key);
          if (value) incoming[key] = value;
        }
        if (!Object.keys(incoming).length) return;
        const data = cleanAttribution({ ...storedAttribution(), ...incoming });
        if (Object.keys(data).length)
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ at: Date.now(), data }),
          );
      } catch {
        // Storage unavailable (private mode, blocked): attribution is optional.
      }
    }
    capture();
    window.addEventListener(CONSENT_EVENT, capture);
    return () => window.removeEventListener(CONSENT_EVENT, capture);
  }, []);
  return null;
}
