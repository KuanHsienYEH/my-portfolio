const WORKS = [
  {
    title: 'Travel Advisor',
    description:
      'Travel web app with real-time data for attractions, accommodations, and recommendations across popular destinations. Integrates Google Maps and Places API.',
    tags: ['React', 'Material-UI', 'Google API'],
    href: 'https://kuanhsienyeh.github.io/travel-advisor/',
    github: 'https://github.com/KuanHsienYEH/travel-advisor',
  },
  {
    title: 'HomeMark E-Commerce',
    description:
      'Leading home improvement e-commerce platform in Taiwan. Built a user-friendly storefront with optimized performance and seamless shopping experience.',
    tags: ['Nuxt.js', 'Vue.js', 'SCSS'],
    href: 'https://www.homemark.com.tw/',
    github: null,
  },
  {
    title: 'Qiu-Yudeng Math',
    description:
      'Educational platform powered by Google Cloud for instructional math videos. Provides a reliable, accessible learning environment for students.',
    tags: ['Vue.js', '.NET MVC', 'Google Cloud'],
    href: 'https://cytmath.xyz/QiuYudengMathematics/',
    github: 'https://github.com/ChenChihChieh/QiuYudengMathematics',
  },
];

export function WorkGallery() {
  return (
    <div id="work" className="grid gap-4 md:grid-cols-3">
      {WORKS.map((w) => (
        <div
          key={w.title}
          className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/[0.07]"
        >
          <div className="text-sm font-semibold tracking-tight">{w.title}</div>
          <div className="mt-2 flex-1 text-sm text-white/65">{w.description}</div>
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
          <div className="mt-4 flex items-center gap-3">
            <a
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white/70"
            >
              Visit ↗
            </a>
            {w.github && (
              <a
                href={w.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/40 hover:text-white/70"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
