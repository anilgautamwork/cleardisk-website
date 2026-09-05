'use client';
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { ArrowLeft, ArrowUpRight, LoaderCircle } from 'lucide-react';
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
type Flow = { pending: boolean; error: string; start: () => void };
const FlowContext = createContext<Flow | null>(null);
/**
 * Wraps the buy page. Closed: renders the marketing columns. Open: replaces
 * them with a single centred checkout stage at the top of the page.
 */
export function PurchaseFlow({
  stageHeader,
  children,
}: {
  stageHeader: ReactNode;
  children: ReactNode;
}) {
  const [pending, setPending] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const mountRef = useRef<HTMLDivElement>(null);
  const embeddedRef = useRef<EmbeddedCheckout | null>(null);
  useEffect(() => {
    if (!open || !mountRef.current || !embeddedRef.current) return;
    embeddedRef.current.mount(mountRef.current);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [open]);
  useEffect(() => () => embeddedRef.current?.destroy(), []);
  async function start() {
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
  function back() {
    embeddedRef.current?.destroy();
    embeddedRef.current = null;
    setOpen(false);
    setPending(false);
  }
  if (open)
    return (
      <section className="checkout-stage" aria-label="Checkout">
        <div className="checkout-stage-head">
          <div>{stageHeader}</div>
          <button type="button" className="checkout-back" onClick={back}>
            <ArrowLeft size={15} /> Back
          </button>
        </div>
        <div ref={mountRef} className="checkout-mount" />
      </section>
    );
  return (
    <FlowContext.Provider value={{ pending, error, start }}>
      {children}
    </FlowContext.Provider>
  );
}
export function CheckoutButton({ label }: { label: string }) {
  const flow = useContext(FlowContext);
  if (!flow) return null;
  return (
    <>
      <button
        className="button primary"
        disabled={flow.pending}
        onClick={flow.start}
      >
        {flow.pending ? (
          <LoaderCircle className="animate-spin" size={17} />
        ) : null}
        {flow.pending ? 'Opening secure checkout…' : label}
        <ArrowUpRight size={17} />
      </button>
      {flow.error ? (
        <p role="alert" className="checkout-error">
          {flow.error}
        </p>
      ) : null}
    </>
  );
}
