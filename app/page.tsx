import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WorkGallery } from '@/components/WorkGallery';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Footer } from '@/components/Footer';
import { ViewCounter } from '@/components/ViewCounter';
import { ContactForm } from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-5 mb-12">
      <h2 className="flex items-baseline gap-2 text-2xl font-bold tracking-tight text-foreground whitespace-nowrap">
        <span className="font-mono text-lg text-kh-accent">{num}.</span>
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

        {/* Work */}
        <section id="work" className="container mt-8 mb-32">
          <div className="flex items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-5 flex-1">
              <h2 className="flex items-baseline gap-2 text-2xl font-bold tracking-tight text-foreground whitespace-nowrap">
                <span className="font-mono text-lg text-kh-accent">01.</span>
                Work
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <ViewCounter />
          </div>
          <WorkGallery />
        </section>

        {/* Experience */}
        <section id="experience" className="container py-32">
          <SectionHeading num="02" title="Experience" />
          <Experience />
        </section>

        {/* Skills */}
        <section id="skills" className="container py-32">
          <SectionHeading num="03" title="Skills" />
          <Skills />
        </section>

        {/* Contact */}
        <section id="contact" className="container py-32 mb-8">
          <SectionHeading num="04" title="Get in Touch" />
          <Card className="bg-card/80 backdrop-blur-sm border-border/60 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-lg font-mono text-kh-accent">Say Hello</CardTitle>
              <CardDescription>
                Messages go directly to my Telegram. I&apos;ll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
