import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WorkGallery } from '@/components/WorkGallery';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Footer } from '@/components/Footer';
import { ViewCounter } from '@/components/ViewCounter';
import { ContactForm } from '@/components/ContactForm';

export default function HomePage() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main>
        <Hero />

        <section className="container mt-10">
          <div className="frost rounded-2xl p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold tracking-tight" id="work">
                Work
              </h2>
              <ViewCounter />
            </div>
            <p className="mt-1 text-sm text-[color:var(--muted)]">
              Selected projects from work and side projects.
            </p>
            <div className="mt-6">
              <WorkGallery />
            </div>
          </div>
        </section>

        <section className="container mt-10">
          <div className="frost rounded-2xl p-6">
            <h2 className="text-lg font-semibold tracking-tight" id="experience">
              Experience
            </h2>
            <p className="mt-1 text-sm text-[color:var(--muted)]">
              4+ years across enterprise, crypto, and e-commerce.
            </p>
            <div className="mt-6">
              <Experience />
            </div>
          </div>
        </section>

        <section className="container mt-10">
          <div className="frost rounded-2xl p-6">
            <h2 className="text-lg font-semibold tracking-tight" id="skills">
              Skills
            </h2>
            <p className="mt-1 text-sm text-[color:var(--muted)]">
              A quick snapshot, with a little D3.
            </p>
            <div className="mt-6">
              <Skills />
            </div>
          </div>
        </section>

        <section className="container mt-10">
          <div className="frost rounded-2xl p-6">
            <h2 className="text-lg font-semibold tracking-tight" id="contact">
              Contact
            </h2>
            <p className="mt-1 text-sm text-[color:var(--muted)]">
              Get in touch — messages go directly to my Telegram.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
