'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, LoaderCircle } from 'lucide-react';
type EmbeddedCheckout = { mount(target: HTMLElement): void; destroy(): void };
type StripeJs = (publishableKey: string) => {
  initEmbeddedCheckout(options: {
    clientSecret: string;
  }): Promise<EmbeddedCheckout>;
};
declare global {
  interface Window {
    Stripe?: StripeJs;
  }
}
const STRIPE_JS = 'https://js.stripe.com/v3/';
function loadStripe(): Promise<StripeJs> {
  return new Promise((resolve, reject) => {
    if (window.Stripe) return resolve(window.Stripe);
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${STRIPE_JS}"]`,
    );
    const script = existing ?? document.createElement('script');
    script.addEventListener('load', () =>
      window.Stripe
        ? resolve(window.Stripe)
        : reject(Error('Stripe could not be loaded.')),
    );
    script.addEventListener('error', () =>
      reject(Error('Stripe could not be loaded. Check your connection.')),
    );
    if (!existing) {
      script.src = STRIPE_JS;
      script.async = true;
      document.head.appendChild(script);
    }
  });
}
type CheckoutResponse = {
  url?: string;
  clientSecret?: string;
  publishableKey?: string;
  error?: string;
};
type Status = 'loading' | 'ready' | 'hosted' | 'error';
/** Mounts Stripe's embedded checkout as soon as the buy page loads. */
export function EmbeddedCheckoutCard({ label }: { label: string }) {
  const [status, setStatus] = useState<Status>('loading');
  const [error, setError] = useState('');
  const [hostedUrl, setHostedUrl] = useState('');
  const [checkout, setCheckout] = useState<EmbeddedCheckout | null>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  async function start() {
    setStatus('loading');
    setError('');
    try {
      const r = await fetch('/api/checkout', { method: 'POST' });
      const data = (await r.json()) as CheckoutResponse;
      if (!r.ok) throw Error(data.error || 'Checkout is unavailable.');
      if (data.clientSecret && data.publishableKey) {
        const stripe = await loadStripe();
        setCheckout(
          await stripe(data.publishableKey).initEmbeddedCheckout({
            clientSecret: data.clientSecret,
          }),
        );
        return;
      }
      if (!data.url) throw Error('Checkout is unavailable.');
      if (new URL(data.url).origin !== 'https://checkout.stripe.com')
        throw Error('Unexpected checkout destination.');
      setHostedUrl(data.url);
      setStatus('hosted');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not open checkout.');
      setStatus('error');
    }
  }
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    void start();
  }, []);
  useEffect(() => {
    if (!checkout || !mountRef.current) return;
    checkout.mount(mountRef.current);
    setStatus('ready');
    return () => checkout.destroy();
  }, [checkout]);
  return (
    <div className="checkout-card">
      <div ref={mountRef} />
      {status === 'loading' ? (
        <p className="checkout-loading" aria-live="polite">
          <LoaderCircle className="animate-spin" size={18} />
          Loading secure checkout…
        </p>
      ) : null}
      {status === 'error' ? (
        <div className="checkout-fallback">
          <p role="alert" className="checkout-error">
            {error}
          </p>
          <button className="button primary" onClick={() => void start()}>
            {label} <ArrowUpRight size={17} />
          </button>
        </div>
      ) : null}
      {status === 'hosted' ? (
        <div className="checkout-fallback">
          <a className="button primary" href={hostedUrl}>
            {label} <ArrowUpRight size={17} />
          </a>
        </div>
      ) : null}
    </div>
  );
}
