import { buttonVariants } from '@/lib/button-variants';
import { cn } from '@/lib/utils';
import { LINKS } from '@/lib/constants';
import { Download } from "lucide-react";


export function Hero() {
  return (
    <section className="relative overflow-hidden">
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-kh-accent/10 blur-3xl" />
    <div className="absolute right-0 top-32 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
    <div className="absolute left-0 bottom-0 h-[250px] w-[250px] rounded-full bg-white/5 blur-3xl" />
  </div>

  <section className="container pt-28 pb-24 lg:pt-36 lg:pb-32">
    <div className="max-w-5xl">
      <p className="font-mono text-sm tracking-[0.2em] text-kh-accent uppercase">
        Frontend Engineer / React / Performance
      </p>

      <div className="mt-6 space-y-4">
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-foreground leading-[1.05] sm:text-6xl lg:text-7xl">
          Kuan Yeh
        </h1>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-foreground leading-[1.05] sm:text-6xl lg:text-7xl ">
          I build products that scale.
        </h1>

        <div className="relative overflow-hidden mt-2">
          <div className="marquee-track text-xl font-medium text-muted-foreground sm:text-2xl lg:text-3xl">
            <span>
              React • TypeScript • UI Architecture • Performance Optimization • Design Systems • Frontend Strategy •
              &nbsp;&nbsp;
              React • TypeScript • UI Architecture • Performance Optimization • Design Systems • Frontend Strategy •
            </span>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>

      <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
I’m Kuan Yeh, a frontend engineer with 7+ years of experience building scalable web applications. I focus on React, performance, and clean architecture.      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          download="Kuan_Yeh_Resume.pdf"
          href="/Kuan_Yeh_Resume.pdf"
          className=" gap-2 inline-flex items-center justify-center rounded-md border border-kh-accent px-6 py-3 font-mono text-sm text-kh-accent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--kh-accent)]"
        >
          Check out my Resume
            <Download size={16} />

        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md px-6 py-3 font-mono text-sm text-muted-foreground transition-colors hover:text-kh-accent"
        >
          Get in Touch
        </a>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
        <span>7+ years experience</span>
        <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/40 sm:inline-block" />
        <span>React / TypeScript / Next.js</span>
        <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/40 sm:inline-block" />
        <span>Performance / UI Architecture / Scalable Frontend</span>
      </div>

      <div className="mt-10 flex gap-5">
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-kh-accent"
          aria-label="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

        <a
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-kh-accent"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</section>
  );
}
