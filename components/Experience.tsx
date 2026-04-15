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
  {
    id: '104',
    company: '104',
    url: 'https://www.104.com.tw/',
    role: 'ITPM',
    period: 'Apr 2018 – Feb 2019 · Taiwan',
    tags: ['Project Management', 'Infra', 'Web Security'],
    bullets: [
      'Engineered an automated quarterly application inventory reporting solution by parsing XML data with PHP, cutting manual effort from 3 days to 2 hours and enhancing service ownership transparency.',
      'Orchestrated infrastructure upgrades across firewalls, databases, cloud services, and internal systems by mapping service dependencies, coordinating staged server restarts, validating job recovery workflows, and ensuring seamless system reactivation.',
      'Led project timelines and resource management across multiple departments, facilitating cross-functional review meetings to align stakeholders and proactively resolve systemic and data-related issues.',
    ],
  },
];

function BulletList({ bullets, tags }: { bullets: string[]; tags: string[] }) {
  return (
    <>
      <ul className="space-y-3 mb-4">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-sm text-muted-foreground">
            <span className="mt-1.5 shrink-0 text-kh-accent font-bold text-xs">▹</span>
            {b}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="font-mono text-xs text-kh-accent/80 bg-kh-accent/8 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </>
  );
}

/* ── Mobile accordion ── */
function MobileAccordion() {
  const [openId, setOpenId] = useState<string | null>('freelance');

  return (
    <div className="space-y-2">
      {EXP.map((e) => {
        const isOpen = openId === e.id;
        return (
          <div
            key={e.id}
            className={cn(
              'rounded-lg border transition-colors duration-200',
              isOpen ? 'border-kh-accent/40 bg-kh-accent/5' : 'border-border/50 bg-card/40',
            )}
          >
            {/* Header — always visible */}
            <button
              onClick={() => setOpenId(isOpen ? null : e.id)}
              className="w-full flex items-start justify-between gap-3 px-4 py-4 text-left"
            >
              <div className="min-w-0">
                <p className={cn('font-semibold text-sm leading-snug', isOpen ? 'text-kh-accent' : 'text-foreground')}>
                  {e.role}
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-0.5">
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-kh-accent transition-colors"
                    onClick={(ev) => ev.stopPropagation()}
                  >
                    @ {e.company}
                  </a>
                  {' · '}{e.period}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn(
                  'shrink-0 mt-0.5 text-muted-foreground transition-transform duration-300',
                  isOpen && 'rotate-180 text-kh-accent',
                )}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Expandable content */}
            <div
              className={cn(
                'overflow-hidden transition-all duration-300 ease-in-out',
                isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0',
              )}
            >
              <div className="px-4 pb-4">
                <BulletList bullets={e.bullets} tags={e.tags} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Desktop sidebar tabs ── */
function DesktopTabs() {
  const [active, setActive] = useState('freelance');
  const [visible, setVisible] = useState(true);
  const current = EXP.find((e) => e.id === active)!;

  const handleSwitch = (id: string) => {
    if (id === active) return;
    setVisible(false);
    setTimeout(() => { setActive(id); setVisible(true); }, 250);
  };

  return (
    <div className="flex gap-0 max-w-3xl">
      <ul className="flex-shrink-0 w-[150px] border-l-2 border-border">
        {EXP.map((e) => (
          <li key={e.id}>
            <button
              onClick={() => handleSwitch(e.id)}
              className={cn(
                'w-full text-left px-5 py-4 font-mono text-sm transition-all duration-150 border-l-2 -ml-px',
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

      <div className={cn('flex-1 pl-8 transition-all duration-200', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1')}>
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {current.role}{' '}
          <a href={current.url} target="_blank" rel="noopener noreferrer" className="text-kh-accent hover:underline underline-offset-4">
            @ {current.company}
          </a>
        </h3>
        <p className="font-mono text-xs text-muted-foreground mb-4">{current.period}</p>
        <BulletList bullets={current.bullets} tags={current.tags} />
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden">
        <MobileAccordion />
      </div>
      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopTabs />
      </div>
    </>
  );
}
