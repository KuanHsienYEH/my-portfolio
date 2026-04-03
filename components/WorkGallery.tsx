const WORKS = [
  {
    title: 'Project One',
    description: 'Short, clear description. Replace with real content.',
    tags: ['Next.js', 'TypeScript'],
    href: '#',
  },
  {
    title: 'Project Two',
    description: 'Another project. Add screenshots later if you want.',
    tags: ['D3', 'UI'],
    href: '#',
  },
  {
    title: 'Project Three',
    description: 'Minimal. Fast. Focused.',
    tags: ['Tailwind', 'Design'],
    href: '#',
  },
];

export function WorkGallery() {
  return (
    <div id="work" className="grid gap-4 md:grid-cols-3">
      {WORKS.map((w) => (
        <a
          key={w.title}
          href={w.href}
          className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/7"
        >
          <div className="text-sm font-semibold tracking-tight">{w.title}</div>
          <div className="mt-2 text-sm text-white/65">{w.description}</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {w.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4 text-xs text-white/40 group-hover:text-white/60">
            Open →
          </div>
        </a>
      ))}
    </div>
  );
}
