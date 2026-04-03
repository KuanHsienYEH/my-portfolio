'use client';

import { useState } from 'react';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setError(null);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as any;
      setError(data?.error ?? 'Failed to send');
      setStatus('error');
      return;
    }

    setStatus('sent');
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 md:grid-cols-2">
      <input
        className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-white/20"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-white/20"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        className="md:col-span-2 min-h-[120px] rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-white/20"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <div className="md:col-span-2 flex items-center justify-between gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
        <div className="text-xs text-white/55">
          {status === 'sent' ? 'Sent.' : status === 'error' ? error : null}
        </div>
      </div>
    </form>
  );
}
