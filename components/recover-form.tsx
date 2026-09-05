'use client';
import { useState } from 'react';
export function RecoverForm() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState('');
  async function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    const email = new FormData(e.currentTarget).get('email');
    try {
      const r = await fetch('/api/recover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const d = (await r.json()) as { message?: string };
      setMessage(d.message || 'Could not reach the server. Please try again.');
    } catch {
      setMessage('Could not reach the server. Please try again.');
    } finally {
      setPending(false);
    }
  }
  return (
    <form className="flex flex-col gap-3 max-w-sm" onSubmit={submit}>
      <label className="text-sm font-medium" htmlFor="recover-email">
        Email address
      </label>
      <input
        id="recover-email"
        name="email"
        type="email"
        required
        className="rounded-lg border border-border bg-transparent px-3 py-2 text-sm text-foreground"
      />
      <button className="button primary" type="submit" disabled={pending}>
        Send my key
      </button>
      <output aria-live="polite">{message}</output>
    </form>
  );
}
