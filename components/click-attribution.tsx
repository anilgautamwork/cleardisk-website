'use client';
import { useEffect } from 'react';
import { ATTRIBUTION_KEYS, cleanAttribution } from '@/lib/attribution';
const STORAGE_KEY = 'cleardisk.click';
const NINETY_DAYS = 90 * 24 * 60 * 60 * 1000;
/** Attribution remembered from the landing URL, or an empty object. */
export function storedAttribution(): Record<string, string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const { at, data } = JSON.parse(raw) as { at: number; data: unknown };
    return Date.now() - at > NINETY_DAYS ? {} : cleanAttribution(data);
  } catch {
    return {};
  }
}
/** Renders nothing; records gclid/utm parameters from the URL for 90 days. */
export function ClickAttribution() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const incoming: Record<string, string> = {};
      for (const key of ATTRIBUTION_KEYS) {
        const value = params.get(key);
        if (value) incoming[key] = value;
      }
      const data = cleanAttribution({ ...storedAttribution(), ...incoming });
      if (Object.keys(data).length)
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ at: Date.now(), data }),
        );
    } catch {
      // Storage unavailable (private mode, blocked): attribution is optional.
    }
  }, []);
  return null;
}
