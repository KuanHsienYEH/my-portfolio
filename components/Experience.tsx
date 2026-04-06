'use client';

import { useState } from 'react';

const EXP = [
  {
    id: '1',
    company: 'Advantech',
    url: 'https://www.advantech.com/en',
    role: 'Software Engineer',
    period: 'Nov 2019 – Aug 2023',
    bullets: [
      'Built scalable web architecture for enterprise products using React, Redux, Vue, ASP.NET, Redis, and Azure.',
      'Revamped legacy jQuery code to React + Redux — achieved 84% improvement in page load speed (Lighthouse).',
      'Led E2E test automation, reducing manual QA time from half a day to 7 minutes.',
      'Integrated test pipelines into Azure CI/CD for continuous quality assurance.',
      'Mentored junior developers and hosted internal tech talks.',
    ],
  },
  {
    id: '2',
    company: 'Starbit',
    url: 'https://star-bit.io/',
    role: 'Frontend Developer',
    period: 'Feb 2019 – Nov 2019',
    bullets: [
      'Designed and built UI for a cryptocurrency exchange platform with Vue, Vuex, and Nuxt.js.',
      'Collaborated with designers to convert static mockups into responsive pages.',
      'Implemented routing and multilingual (i18n) support for SPA.',
      'Managed CSS structure with SCSS; integrated data via RESTful APIs.',
    ],
  },
  {
    id: '3',
    company: '104 Corp',
    url: 'https://www.104.com.tw/jobs/main/',
    role: 'IT Project Manager',
    period: 'Feb 2019 – Aug 2019',
    bullets: [
      'Implemented Root Cause Analysis workflow to identify and resolve service downtime.',
      'Introduced Change Management practices, reducing human-error downtime by 90%.',
      'Automated AP inventory reports via XML parsing — reduced effort from 3 days to 2 hours.',
      'Led infrastructure update planning and cross-functional coordination.',
    ],
  },
];

export function Experience() {
  const [active, setActive] = useState('1');
  const current = EXP.find((e) => e.id === active)!;

  return (
    <div id="experience" className="grid gap-4 md:grid-cols-[180px_1fr]">
      {/* Sidebar */}
      <ul className="flex gap-2 md:flex-col">
        {EXP.map((e) => (
          <li key={e.id}>
            <button
              onClick={() => setActive(e.id)}
              className={`w-full rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                active === e.id
                  ? 'bg-white/10 text-white'
                  : 'text-white/50 hover:bg-white/5 hover:text-white/80'
              }`}
            >
              {e.company}
            </button>
          </li>
        ))}
      </ul>

      {/* Content */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-sm font-semibold">{current.role}</span>
          <span className="text-sm text-white/50">@</span>
          <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/70 hover:text-white"
          >
            {current.company} ↗
          </a>
        </div>
        <p className="mt-1 text-xs text-white/40">{current.period}</p>
        <ul className="mt-4 space-y-2">
          {current.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-white/70">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
