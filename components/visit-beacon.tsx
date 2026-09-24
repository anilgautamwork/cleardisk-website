'use client';
import { useEffect } from 'react';
/**
 * Counts one visit per arrival from outside the site. Sends only the referring
 * host and campaign label; the Worker reduces both to a fixed source label.
 */
export function VisitBeacon() {
  useEffect(() => {
    let host = '';
    try {
      host = new URL(document.referrer).hostname;
    } catch {
      /* No referrer: typed address or bookmark. */
    }
    if (host === location.hostname) return;
    const query = new URLSearchParams(location.search);
    navigator.sendBeacon?.(
      '/api/visit',
      JSON.stringify({
        host,
        source: query.get('utm_source') || query.get('source'),
      }),
    );
  }, []);
  return null;
}
