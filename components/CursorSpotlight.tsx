'use client';

import { useEffect, useRef } from 'react';

export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      el.style.background = `radial-gradient(700px at ${e.clientX}px ${e.clientY}px, rgba(0,191,255,0.15), transparent 75%)`;
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
      aria-hidden
    />
  );
}
