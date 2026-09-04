'use client';
import { useEffect, useState } from 'react';
export function PaymentResult({ sessionId }: { sessionId?: string }) {
  const [message, setMessage] = useState(
    sessionId
      ? 'Checking the test payment with Stripe…'
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
        const d = (await r.json()) as { paid?: boolean; error?: string };
        if (!r.ok) throw Error(d.error || 'Could not verify checkout.');
        if (!controller.signal.aborted)
          setMessage(
            d.paid
              ? 'Your test payment was verified. No real money was charged. This test does not issue an active license.'
              : 'Stripe has not confirmed this test payment yet. You can check again below.',
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
            setMessage('Checking the test payment with Stripe…');
            setRetry((v) => v + 1);
          }}
        >
          Check again
        </button>
      ) : null}
    </div>
  );
}
