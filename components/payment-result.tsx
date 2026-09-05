'use client';
import { useEffect, useState } from 'react';
const checking = 'Checking your payment with Stripe…';
export function PaymentResult({ sessionId }: { sessionId?: string }) {
  const [message, setMessage] = useState(
    sessionId
      ? checking
      : 'There is no checkout session to verify. No payment has been confirmed.',
  );
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    if (!sessionId) return;
    const controller = new AbortController();
    fetch('/api/checkout-status?session_id=' + encodeURIComponent(sessionId), {
      signal: controller.signal,
    })
      .then(async (r) => {
        const d = (await r.json()) as {
          paid?: boolean;
          mode?: string;
          email?: string | null;
          error?: string;
        };
        if (!r.ok) throw Error(d.error || 'Could not verify checkout.');
        if (controller.signal.aborted) return;
        const to = d.email ? d.email : 'the address you used at checkout';
        setMessage(
          (d.paid
            ? `Payment confirmed. Your ClearDisk 1.0 license key will be emailed to ${to} when 1.0 ships. Questions: hello@cleardisk.app.`
            : 'Stripe has not confirmed this payment yet. Some payment methods take a moment. You can check again below.') +
            (d.mode === 'test' ? ' (Stripe test mode: no real charge.)' : ''),
        );
      })
      .catch((e: unknown) => {
        if (!controller.signal.aborted)
          setMessage(
            e instanceof Error ? e.message : 'Could not verify checkout.',
          );
      });
    return () => controller.abort();
  }, [sessionId, retry]);
  return (
    <div className="notice">
      <output aria-live="polite">{message}</output>
      {sessionId ? (
        <button
          className="button secondary"
          onClick={() => {
            setMessage(checking);
            setRetry((v) => v + 1);
          }}
        >
          Check again
        </button>
      ) : null}
    </div>
  );
}
