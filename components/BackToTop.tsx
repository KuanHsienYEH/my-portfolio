'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={cn(
        'fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full',
        'border border-kh-accent text-kh-accent bg-background/80 backdrop-blur-sm',
        'shadow-[0_0_16px_rgba(0,191,255,0.25)] hover:shadow-[0_0_24px_rgba(0,191,255,0.5)]',
        'hover:bg-kh-accent/10 transition-all duration-300 cursor-pointer',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
      )}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
