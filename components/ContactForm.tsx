'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
      // Static build fallback — API routes are not available on GitHub Pages
      if (res.status === 404) {
        window.location.href = `mailto:knight123g@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        return;
      }
      const data = (await res.json().catch(() => null)) as { error?: string } | null;
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
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
      <div className="space-y-1.5">
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-card/60 border-border/60"
        />
      </div>
      <div className="space-y-1.5">
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-card/60 border-border/60"
        />
      </div>
      <div className="md:col-span-2 space-y-1.5">
        <Textarea
          placeholder="Your message…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="bg-card/60 border-border/60 resize-none"
        />
      </div>
      <div className="md:col-span-2 flex items-center justify-between gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center px-7 py-4 font-mono text-sm border border-kh-accent text-kh-accent rounded cursor-pointer transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_var(--kh-accent)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        {status === 'sent' && (
          <p className="text-sm text-muted-foreground">Message sent.</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    </form>
  );
}
