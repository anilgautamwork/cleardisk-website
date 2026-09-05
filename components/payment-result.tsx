'use client';
import { useEffect, useRef, useState } from 'react';
const checking = 'Checking your payment with Stripe…';
const notConfirmed = 'Payment not confirmed yet.';
const maxAutoRetries = 10;
const retryDelayMs = 3000;
type Result =
  | { status: 'checking' | 'waiting' | 'error'; message: string }
  | { status: 'success'; key: string; email: string };
export function PaymentResult({ sessionId }: { sessionId?: string }) {
  const [result, setResult] = useState<Result>(
    sessionId
      ? { status: 'checking', message: checking }
      : {
          status: 'error',
          message:
            'There is no checkout session to verify. No payment has been confirmed.',
        },
  );
  const [copied, setCopied] = useState(false);
  const [retry, setRetry] = useState(0);
  const autoRetries = useRef(0);
  useEffect(() => {
    if (!sessionId) return;
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout> | undefined;
    fetch('/api/key?session_id=' + encodeURIComponent(sessionId), {
      signal: controller.signal,
    })
      .then(async (r) => {
        if (controller.signal.aborted) return;
        const d = (await r.json()) as {
          key?: string;
          email?: string;
          error?: string;
        };
        if (!r.ok) {
          const message = d.error || 'Could not verify checkout.';
          if (
            message === notConfirmed &&
            autoRetries.current < maxAutoRetries
          ) {
            autoRetries.current += 1;
            setResult({ status: 'waiting', message });
            timer = setTimeout(() => setRetry((v) => v + 1), retryDelayMs);
          } else {
            setResult({ status: 'error', message });
          }
          return;
        }
        setResult({
          status: 'success',
          key: d.key ?? '',
          email: d.email ?? '',
        });
      })
      .catch((e: unknown) => {
        if (!controller.signal.aborted)
          setResult({
            status: 'error',
            message:
              e instanceof Error ? e.message : 'Could not verify checkout.',
          });
      });
    return () => {
      controller.abort();
      if (timer) clearTimeout(timer);
    };
  }, [sessionId, retry]);
  if (result.status === 'success') {
    const { key, email } = result;
    async function copyKey() {
      try {
        await navigator.clipboard.writeText(key);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Clipboard access can be denied or unavailable; the key is still
        // visible and selectable in the <code> element below.
      }
    }
    return (
      <div className="notice">
        <h2>Your license key</h2>
        <code className="license-key">{key}</code>
        <button className="button secondary" onClick={copyKey}>
          {copied ? 'Copied' : 'Copy'}
        </button>
        <a className="button primary" href={'cleardisk://activate?key=' + key}>
          Open ClearDisk and activate
        </a>
        <p>
          {email
            ? `We also emailed it to ${email}. Keep it somewhere safe.`
            : 'Keep it somewhere safe.'}
        </p>
      </div>
    );
  }
  return (
    <div className="notice">
      <output aria-live="polite">{result.message}</output>
      {sessionId ? (
        <button
          className="button secondary"
          onClick={() => {
            autoRetries.current = 0;
            setResult({ status: 'checking', message: checking });
            setRetry((v) => v + 1);
          }}
        >
          Check again
        </button>
      ) : null}
    </div>
  );
}
