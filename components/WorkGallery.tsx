'use client';

import Image from 'next/image';
import { TiltCard } from '@/components/TiltCard';

const FEATURED = [
  {
    title: 'Travel Advisor',
    description: 'Travel web app with real-time recommendations for attractions and accommodations.',
    tags: ['React', 'Material-UI', 'Google API'],
    href: 'https://kuanhsienyeh.github.io/travel-advisor/',
    github: 'https://github.com/KuanHsienYEH/travel-advisor',
    image: '/images/travel-advisor.PNG',
    placeholder: null,
  },
  {
    title: 'HomeMark E-Commerce',
    description: 'Leading Taiwan e-commerce storefront for home improvement and household products.',
    tags: ['Nuxt.js', 'Vue.js', 'SCSS'],
    href: 'https://www.homemark.com.tw/',
    github: null,
    image: '/images/hmk.PNG',
    placeholder: null,
  },
  {
    title: 'Qiu-Yudeng Math Platform',
    description: 'Google Cloud-powered educational platform for math instructional videos.',
    tags: ['Vue.js', '.NET MVC', 'Google Cloud'],
    href: 'https://cytmath.xyz/QiuYudengMathematics/',
    github: 'https://github.com/ChenChihChieh/QiuYudengMathematics',
    image: '/images/qyd.PNG',
    placeholder: null,
  },
];

const OTHER = [
  {
    title: 'Full-Stack Job Platform',
    description: 'Job board with OAuth auth, CRUD postings, and React Hook Form validation.',
    tags: ['React', 'TypeScript', 'Next.js', 'Docker'],
    href: null,
    github: null,
    image: null,
    placeholder: 'JOB',
  },
  {
    title: 'Automation Agent (OpenClaw)',
    description: 'Aggregates and filters job listings by keywords, delivering updates via Telegram.',
    tags: ['OpenAI API', 'Telegram Bot', 'Node.js'],
    href: null,
    github: null,
    image: null,
    placeholder: 'BOT',
  },
];

const WORKS = [...FEATURED, ...OTHER];

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ProjectCard({ work }: { work: typeof WORKS[0] }) {
  const isLinked = !!work.href;
  const Wrapper = isLinked ? 'a' : 'div';
  const wrapperProps = isLinked
    ? { href: work.href!, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <div className="group flex flex-col bg-card/60 backdrop-blur-md rounded-lg overflow-hidden border border-white/8 hover:border-kh-accent/50 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(0,191,255,0.18)] transition-all duration-300 cursor-default h-full">
      {/* Image */}
      <Wrapper {...wrapperProps} className="block overflow-hidden aspect-[16/9]">
        {work.image ? (
          <Image
            src={work.image}
            alt={work.title}
            width={600}
            height={338}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-kh-accent/10 via-card/60 to-card relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,191,255,0.08),transparent_60%)]" />
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-kh-accent/50">
              <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            <span className="font-mono text-xs text-kh-accent/40 tracking-widest uppercase">{work.placeholder}</span>
          </div>
        )}
      </Wrapper>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Title */}
        <h3 className="text-base font-semibold text-foreground/80 group-hover:text-kh-accent transition-colors leading-snug">
          {work.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {work.description}
        </p>

        {/* Tech stack */}
        <ul className="flex flex-wrap gap-2">
          {work.tags.map((t) => (
            <li
              key={t}
              className="font-mono text-[11px] text-kh-accent/80 bg-kh-accent/10 px-2 py-0.5 rounded"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Links */}
        {(work.github || work.href) && (
          <div className="flex gap-3 text-muted-foreground pt-1">
            {work.github && (
              <a
                href={work.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-kh-accent transition-colors"
                aria-label="GitHub"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon />
              </a>
            )}
            {work.href && (
              <a
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-kh-accent transition-colors"
                aria-label="Live Demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function WorkGallery() {
  return (
    <div className="space-y-6">
      {/* Featured — 3 columns */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED.map((w) => (
          <TiltCard key={w.title}>
            <ProjectCard work={w} />
          </TiltCard>
        ))}
      </div>
      {/* Other — 2 columns, centred at lg */}
      <div className="grid gap-6 sm:grid-cols-2 lg:max-w-[calc(66.666%+8px)] mx-auto">
        {OTHER.map((w) => (
          <TiltCard key={w.title}>
            <ProjectCard work={w} />
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
