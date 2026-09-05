'use client';
import { useState } from 'react';
import { ArrowUpRight, LoaderCircle } from 'lucide-react';
export function CheckoutButton() {
  const [pending, setPending] = useState(false),
    [error, setError] = useState('');
  async function checkout() {
    if (pending) return;
    setPending(true);
    setError('');
    try {
      const r = await fetch('/api/checkout', { method: 'POST' });
      const data = (await r.json()) as { url?: string; error?: string };
      if (!r.ok || !data.url)
        throw Error(data.error || 'Checkout is unavailable.');
      const url = new URL(data.url);
      if (url.origin !== 'https://checkout.stripe.com')
        throw Error('Unexpected checkout destination.');
      window.location.assign(data.url);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not open checkout.');
      setPending(false);
    }
  }
  return (
    <>
      <button className="button primary" disabled={pending} onClick={checkout}>
        {pending ? <LoaderCircle className="animate-spin" size={17} /> : null}
        {pending ? 'Opening secure checkout…' : 'Pre-order ClearDisk 1.0 · $10'}
        <ArrowUpRight size={17} />
      </button>
      {error ? (
        <p role="alert" className="checkout-error">
          {error}
        </p>
      ) : null}
    </>
  );
}
