'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Counts external arrivals (once per external entry) and aggregate public page
 * views for Top Pages. Sends only the referring host, campaign label, and clean
 * pathname; no cookies, IP addresses, or visitor IDs are stored.
 */
export function VisitBeacon() {
  const pathname = usePathname();
  const initialSent = useRef(false);

  useEffect(() => {
    if (!pathname) return;
    let host = '';
    try {
      host = new URL(document.referrer).hostname;
    } catch {
      /* No referrer: typed address or bookmark. */
    }
    const isInitial = !initialSent.current;
    initialSent.current = true;
    const arrival = isInitial && host !== location.hostname;
    const query = new URLSearchParams(location.search);
    navigator.sendBeacon?.(
      '/api/visit',
      JSON.stringify({
        host: arrival ? host : '',
        source: arrival
          ? query.get('utm_source') || query.get('source')
          : null,
        path: pathname,
        arrival,
      }),
    );
  }, [pathname]);

  return null;
}
