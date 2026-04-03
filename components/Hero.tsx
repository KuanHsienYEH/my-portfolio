import { ForceGraph } from '@/components/d3/ForceGraph';

export function Hero() {
  return (
    <section className="container mt-10">
      <div className="frost rounded-3xl p-6 md:p-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm text-white/60">Portfolio</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Clean design. Crisp motion.
            </h1>
            <p className="mt-4 text-base text-white/70">
              Next.js + Tailwind + D3. Apple-ish minimal, with a little depth.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
                href="#work"
              >
                View work
              </a>
              <a
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/5"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-purple-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <div className="px-4 py-3 text-xs text-white/60">
                Force graph (D3)
              </div>
              <div className="h-[280px] md:h-[340px]">
                <ForceGraph />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
