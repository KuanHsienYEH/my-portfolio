import Image from 'next/image';
import { cn } from '@/lib/utils';

const WORKS = [
  {
    title: 'Travel Advisor',
    description:
      'Travel web application providing users with essential information and recommendations for popular travel destinations. With an intuitive interface and real-time data, users can explore attractions, find accommodations, and make informed travel decisions.',
    tags: ['React', 'Material-UI', 'Google API'],
    href: 'https://kuanhsienyeh.github.io/travel-advisor/',
    github: 'https://github.com/KuanHsienYEH/travel-advisor',
    image: '/images/travel-advisor.PNG',
  },
  {
    title: 'HomeMark E-Commerce',
    description:
      'A leading e-commerce website in Taiwan, offering a wide range of home improvement and household products. Built a user-friendly storefront, optimizing performance, and ensuring a seamless shopping experience.',
    tags: ['Nuxt.js', 'Vue.js', 'SCSS'],
    href: 'https://www.homemark.com.tw/',
    github: null,
    image: '/images/hmk.PNG',
  },
  {
    title: 'Qiu-Yudeng Math Platform',
    description:
      'An educational platform powered by Google Cloud, specifically focused on mathematics. Students can access a wide range of instructional videos on various mathematical topics, providing a seamless and reliable environment.',
    tags: ['Vue.js', '.NET MVC', 'Google Cloud'],
    href: 'https://cytmath.xyz/QiuYudengMathematics/',
    github: 'https://github.com/ChenChihChieh/QiuYudengMathematics',
    image: '/images/qyd.PNG',
  },
];

const OTHER_WORKS = [
  {
    title: 'Full-Stack Job Platform',
    description:
      'Full-stack job platform supporting CRUD operations for job postings and user management. Implements OAuth-based authentication and React Hook Form for data validation.',
    tags: ['React', 'TypeScript', 'MUI', 'Next.js', 'Docker', 'GitHub Actions'],
    href: 'https://github.com/KuanHsienYEH',
    github: 'https://github.com/KuanHsienYEH',
  },
  {
    title: 'Automation Agent (OpenClaw)',
    description:
      'Automated job aggregation and notification system. Collects and filters job listings based on custom keywords, delivering real-time updates via Telegram.',
    tags: ['OpenAI API', 'Telegram Bot', 'Node.js'],
    href: 'https://github.com/KuanHsienYEH',
    github: 'https://github.com/KuanHsienYEH',
  },
];

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function FeaturedProject({ work, index }: { work: typeof WORKS[0]; index: number }) {
  const isEven = index % 2 === 0; // even → image left, text right; odd → image right, text left

  return (
    <div className="relative grid grid-cols-12 items-center mb-28">
      {/* ── Image (55% ≈ 7 cols) ── */}
      <div
        className={cn(
          'relative col-span-7 row-start-1',
          isEven ? 'col-start-1' : 'col-start-6',
        )}
      >
        <a
          href={work.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block group relative z-0 hover:z-20"
        >
          <Image
            src={work.image}
            alt={work.title}
            width={800}
            height={500}
            className="w-full h-auto object-cover rounded transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] group-hover:scale-110"
          />
        </a>
      </div>

      {/* ── Text (overlaps image by ~1-2 cols) ── */}
      <div
        className={cn(
          'relative col-span-7 row-start-1 z-10 flex flex-col',
          isEven ? 'col-start-6 items-end text-right' : 'col-start-1 items-start text-left',
        )}
      >
        <p className="font-mono text-xs text-kh-accent mb-1 tracking-wider">Featured Project</p>
        <h3 className="text-2xl font-bold text-foreground mb-5">
          <a
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-kh-accent transition-colors"
          >
            {work.title}
          </a>
        </h3>

        {/* Description card floating over image */}
        <div className="bg-card/95 backdrop-blur-sm rounded p-6 mb-5 shadow-xl border border-border/40 w-full">
          <p className="text-sm text-muted-foreground leading-relaxed">{work.description}</p>
        </div>

        {/* Tech stack in monospace */}
        <ul className={cn('flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground mb-4', isEven ? 'justify-end' : 'justify-start')}>
          {work.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {/* Icons */}
        <div className={cn('flex gap-4 text-muted-foreground', isEven ? 'justify-end' : 'justify-start')}>
          {work.github && (
            <a
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-kh-accent transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          )}
          <a
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-kh-accent transition-colors"
            aria-label="Visit"
          >
            <ExternalIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export function WorkGallery() {
  return (
    <div>
      {/* Featured Projects */}
      <div>
        {WORKS.map((w, i) => (
          <FeaturedProject key={w.title} work={w} index={i} />
        ))}
      </div>

      {/* Other Noteworthy Projects */}
      <div className="mt-4">
        <h3 className="font-mono text-sm text-kh-accent text-center mb-8">Other Noteworthy Projects</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {OTHER_WORKS.map((w) => (
            <div
              key={w.title}
              className="flex flex-col bg-card/80 rounded p-6 border border-border/50 hover:border-kh-accent/40 hover:-translate-y-1 transition-all duration-200 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-kh-accent">
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                </svg>
                <div className="flex gap-3 text-muted-foreground">
                  {w.github && (
                    <a href={w.github} target="_blank" rel="noopener noreferrer" className="hover:text-kh-accent transition-colors">
                      <GitHubIcon />
                    </a>
                  )}
                  <a href={w.href} target="_blank" rel="noopener noreferrer" className="hover:text-kh-accent transition-colors">
                    <ExternalIcon />
                  </a>
                </div>
              </div>
              <h4 className="text-base font-semibold text-foreground mb-2">
                <a href={w.href} target="_blank" rel="noopener noreferrer" className="hover:text-kh-accent transition-colors">
                  {w.title}
                </a>
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{w.description}</p>
              <ul className="flex flex-wrap gap-3 mt-4 font-mono text-xs text-muted-foreground">
                {w.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
