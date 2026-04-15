import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WorkGallery } from '@/components/WorkGallery';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { RevealOnScroll } from '@/components/RevealOnScroll';

function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-5 mb-12">
      <h2 className="flex items-baseline gap-2 text-2xl font-bold tracking-tight text-foreground whitespace-nowrap">
        <span className="font-mono text-lg text-kh-accent [text-shadow:0_0_12px_rgba(0,191,255,0.7)]">{num}.</span>
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-dvh">
      <Header />

      <main>
        <Hero />

        {/* Experience + Education */}
        <RevealOnScroll>
          <section id="experience" className="container py-24">
            <SectionHeading num="01" title="Experience" />
            <div className="grid gap-14 lg:grid-cols-[minmax(0,2fr)_320px] lg:items-start">
              <Experience />
              <aside id="education" className="lg:pt-1">
                <Education />
              </aside>
            </div>
          </section>
        </RevealOnScroll>

        {/* Skills */}
        <RevealOnScroll>
          <section id="skills" className="container py-24">
            <SectionHeading num="02" title="Skills" />
            <Skills />
          </section>
        </RevealOnScroll>

        {/* Work */}
        <RevealOnScroll>
          <section id="work" className="container py-24">
            <SectionHeading num="03" title="Work" />
            <WorkGallery />
          </section>
        </RevealOnScroll>

        {/* Contact */}
        <RevealOnScroll>
          <section id="contact" className="container py-24 pb-16">
            <SectionHeading num="04" title="Get in Touch" />
            <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start max-w-4xl">
              {/* Left — info */}
              <div className="space-y-8">
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m currently open to new opportunities. Whether you have a question,
                    a project in mind, or just want to say hi — my inbox is always open.
                  </p>
                </div>
                <div className="space-y-4">
                  <a href="mailto:knight123g@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-kh-accent transition-colors group">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border/60 group-hover:border-kh-accent/50 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </span>
                    knight123g@gmail.com
                  </a>
                  <a href="https://github.com/KuanHsienYEH" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-kh-accent transition-colors group">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border/60 group-hover:border-kh-accent/50 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    </span>
                    github.com/KuanHsienYEH
                  </a>
                  <a href="https://www.linkedin.com/in/kuan-yeh-6b04b0217" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-kh-accent transition-colors group">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border/60 group-hover:border-kh-accent/50 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </span>
                    linkedin.com/in/kuan-yeh
                  </a>
                </div>
              </div>

              {/* Right — form */}
              <div className="bg-card/60 backdrop-blur-md border border-border/50 rounded-xl p-6 lg:p-8">
                <ContactForm />
              </div>
            </div>
          </section>
        </RevealOnScroll>
      </main>

      <Footer />
    </div>
  );
}
