'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const EXP = [
  {
    id: 'freelance',
    company: 'Freelance',
    url: 'https://github.com/KuanHsienYEH',
    role: 'Contractor — Full-Stack Engineer',
    period: 'Sep 2023 – Mar 2026 · United States',
    tags: ['React', 'Next.js', 'Vue.js', '.NET Core', 'Docker', 'GitHub Actions', 'CI/CD'],
    bullets: [
      'Developed scalable user interfaces using React and Next.js with functional components, hooks, and state management patterns, building reusable UI components and establishing a shared design system.',
      'Built frontend features and backend services for an e-learning platform using Vue.js and .NET Core, structuring the codebase with modular architecture for easier maintenance and feature extension.',
      'Implemented CI/CD pipelines with GitHub Actions and Docker, reducing deployment time and improving release reliability.',
    ],
  },
  {
    id: 'advantech',
    company: 'Advantech',
    url: 'https://www.advantech.com/en',
    role: 'Senior Software Engineer',
    period: 'Nov 2019 – Sep 2023 · Taiwan',
    tags: ['React', 'Vue', 'Tailwind CSS', 'Cypress', 'Jest', 'Azure DevOps', 'CI/CD'],
    bullets: [
      'Led development of scalable frontend architectures using React and Vue, improving system performance by 20% through lazy loading and optimized data flow.',
      'Built reusable UI components and contributed to a shared design system, improving development efficiency and reducing technical debt across teams.',
      'Developed drag-and-drop UI components that enabled non-technical teams to build marketing pages, accelerating campaign launches.',
      'Integrated automated testing (Cypress, Jest) including unit, integration, and E2E tests into CI/CD pipelines, reducing QA cycles by 60% and improving release stability.',
      'Architected CI/CD pipelines with Azure DevOps, including multi-stage builds, test parallelization, and blue-green deployments, reducing deployment time by 50%.',
      'Drove product experiments using Google Analytics and A/B testing, increasing user engagement by 34%.',
    ],
  },
  {
    id: 'starbit',
    company: 'Starbit',
    url: 'https://star-bit.io/',
    role: 'Frontend Engineer',
    period: 'Mar 2019 – Sep 2019 · Taiwan',
    tags: ['Vue.js', 'Python APIs', 'REST APIs', 'Performance'],
    bullets: [
      'Developed responsive and high-performance web interfaces for a cryptocurrency trading platform using Vue.js.',
      'Built interactive dashboards and real-time data visualizations for trading systems.',
      'Integrated frontend with backend services (Python-based APIs) to support trading workflows and data synchronization.',
      'Participated in testing and validating wallet-related features, including transaction flows and data accuracy.',
      'Optimized frontend performance and ensured cross-browser compatibility for a smooth user experience.',
    ],
  },
];

export function Experience() {
  const [active, setActive] = useState('freelance');
  const current = EXP.find((e) => e.id === active)!;

  return (
    <div className="flex gap-0 max-w-3xl">
      {/* ── Sidebar ── */}
      <ul className="flex-shrink-0 w-[150px] border-l-2 border-border">
        {EXP.map((e) => (
          <li key={e.id}>
            <button
              onClick={() => setActive(e.id)}
              className={cn(
                'w-full text-left px-5 py-4 font-mono text-sm transition-all duration-150',
                'border-l-2 -ml-px',
                active === e.id
                  ? 'border-l-kh-accent text-kh-accent bg-kh-accent/5'
                  : 'border-l-transparent text-muted-foreground hover:text-kh-accent hover:bg-kh-accent/5',
              )}
            >
              {e.company}
            </button>
          </li>
        ))}
      </ul>

      {/* ── Content ── */}
      <div className="flex-1 pl-8">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {current.role}{' '}
          <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-kh-accent hover:underline underline-offset-4"
          >
            @ {current.company}
          </a>
        </h3>
        <p className="font-mono text-xs text-muted-foreground mb-4">{current.period}</p>

        <ul className="space-y-3 mb-5">
          {current.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="mt-1.5 shrink-0 text-kh-accent font-bold text-xs">▹</span>
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {current.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-xs text-kh-accent/80 bg-kh-accent/8 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
