'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const NAV = [
  { label: '01. Exp',     href: '#experience', id: 'experience' },
  { label: '02. Skills',  href: '#skills',     id: 'skills' },
  { label: '03. Work',    href: '#work',        id: 'work' },
  { label: '04. Contact', href: '#contact',     id: 'contact' },
];

export function Header() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  // Active section tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener('scroll', close, { passive: true, once: true });
    return () => window.removeEventListener('scroll', close);
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-xl transition-all">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm text-kh-accent hover:opacity-80 transition-opacity"
          >
            &lt;KuanYeh /&gt;
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5 text-sm">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-3 py-2 font-mono text-xs transition-colors',
                  active === item.id ? 'text-kh-accent' : 'text-muted-foreground hover:text-kh-accent',
                )}
              >
                {active === item.id && (
                  <span className="absolute bottom-1 left-3 right-3 h-px bg-kh-accent rounded-full" />
                )}
                {item.label}
              </a>
            ))}

            <Separator orientation="vertical" className="mx-2 h-4" />

            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 font-mono text-xs text-muted-foreground hover:text-kh-accent transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center px-4 py-1.5 font-mono text-xs border border-kh-accent text-kh-accent rounded hover:bg-kh-accent/10 transition-colors"
            >
              LinkedIn
            </a>

            <Separator orientation="vertical" className="mx-2 h-4" />
            <ThemeToggle />
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-kh-accent transition-colors"
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-300',
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        {/* Backdrop */}
        <div
          className={cn('absolute inset-0 bg-background/60 backdrop-blur-sm transition-opacity duration-300', menuOpen ? 'opacity-100' : 'opacity-0')}
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel */}
        <nav
          className={cn(
            'absolute right-0 top-16 bottom-0 w-72 bg-background/95 backdrop-blur-xl border-l border-border/40 flex flex-col p-8 gap-2 transition-transform duration-300',
            menuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                'font-mono text-sm py-3 border-b border-border/30 transition-colors',
                active === item.id ? 'text-kh-accent' : 'text-muted-foreground hover:text-kh-accent',
              )}
            >
              {item.label}
            </a>
          ))}

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted-foreground hover:text-kh-accent transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-kh-accent border border-kh-accent rounded px-4 py-2 text-center hover:bg-kh-accent/10 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
