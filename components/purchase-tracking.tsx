'use client';
import { useEffect } from 'react';
import { CONSENT_EVENT, trackPurchase } from '@/lib/ads-client';
import type { AdsPurchase } from '@/lib/ads-purchase';
/** Only mounted after the existing license endpoint has confirmed payment. */
export function PurchaseTracking({ sessionId }: { sessionId: string }) {
  useEffect(() => {
    const controller = new AbortController();
    let purchase: AdsPurchase | null = null;
    const send = () => trackPurchase(purchase);
    window.addEventListener(CONSENT_EVENT, send);
    fetch('/api/purchase?session_id=' + encodeURIComponent(sessionId), {
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) return;
        const data = (await response.json()) as {
          purchase: AdsPurchase | null;
        };
        if (controller.signal.aborted) return;
        purchase = data.purchase;
        send();
      })
      .catch(() => {
        /* Tracking must never interfere with license delivery. */
      });
    return () => {
      controller.abort();
      window.removeEventListener(CONSENT_EVENT, send);
    };
  }, [sessionId]);
  return null;
}
