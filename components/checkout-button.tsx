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
export function CheckoutButton() {
  const [pending, setPending] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const mountRef = useRef<HTMLDivElement>(null);
  const embeddedRef = useRef<EmbeddedCheckout | null>(null);
  useEffect(() => {
    if (open && mountRef.current && embeddedRef.current)
      embeddedRef.current.mount(mountRef.current);
  }, [open]);
  useEffect(() => () => embeddedRef.current?.destroy(), []);
  async function checkout() {
    if (pending) return;
    setPending(true);
    setError('');
    try {
      const r = await fetch('/api/checkout', { method: 'POST' });
      const data = (await r.json()) as CheckoutResponse;
      if (!r.ok) throw Error(data.error || 'Checkout is unavailable.');
      if (data.clientSecret && data.publishableKey) {
        const stripe = await loadStripe();
        embeddedRef.current = await stripe(
          data.publishableKey,
        ).initEmbeddedCheckout({ clientSecret: data.clientSecret });
        setOpen(true);
        return;
      }
      if (!data.url) throw Error('Checkout is unavailable.');
      if (new URL(data.url).origin !== 'https://checkout.stripe.com')
        throw Error('Unexpected checkout destination.');
      window.location.assign(data.url);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not open checkout.');
      setPending(false);
    }
  }
  function close() {
    embeddedRef.current?.destroy();
    embeddedRef.current = null;
    setOpen(false);
    setPending(false);
  }
  return (
    <>
      {open ? (
        <div className="embedded-checkout">
          <div ref={mountRef} />
          <button className="button secondary" onClick={close}>
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="button primary"
          disabled={pending}
          onClick={checkout}
        >
          {pending ? <LoaderCircle className="animate-spin" size={17} /> : null}
          {pending ? 'Opening secure checkout…' : 'Buy ClearDisk 1.0 · $10'}
          <ArrowUpRight size={17} />
        </button>
      )}
      {error ? (
        <p role="alert" className="checkout-error">
          {error}
        </p>
      ) : null}
    </>
  );
}
