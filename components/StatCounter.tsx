'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 7,  suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Projects Shipped' },
  { value: 60, suffix: '%', label: 'QA Cycle Reduction' },
  { value: 34, suffix: '%', label: 'Engagement Uplift' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3); // ease-out cubic
          setCount(Math.round(ease * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function StatCounter() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 max-w-2xl">
      {STATS.map((s) => (
        <div key={s.label} className="flex flex-col gap-1">
          <p className="text-3xl font-bold text-kh-accent font-mono tracking-tight">
            <Counter value={s.value} suffix={s.suffix} />
          </p>
          <p className="text-xs text-muted-foreground leading-tight">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
