import { SkillsDonut } from '@/components/d3/SkillsDonut';

const SKILLS = [
  { label: 'Frontend', value: 45 },
  { label: 'Backend', value: 25 },
  { label: 'Database', value: 15 },
  { label: 'DevOps / QA', value: 15 },
];

const TECH = [
  { category: 'Frontend', items: 'React, Vue, Next.js, Nuxt.js, TypeScript, Tailwind, SCSS' },
  { category: 'Backend', items: 'Node.js, Python, C#, ASP.NET, RESTful API' },
  { category: 'Database', items: 'MongoDB, MSSQL, Redis' },
  { category: 'DevOps / QA', items: 'Azure, E2E Testing, CI/CD, Agile / SCRUM' },
];

export function Skills() {
  return (
    <div id="skills" className="grid gap-8 md:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm font-semibold tracking-tight">Tech Stack</div>
        <ul className="mt-3 space-y-3 text-sm">
          {TECH.map((t) => (
            <li key={t.category}>
              <div className="flex items-baseline justify-between">
                <span className="text-white/90">{t.category}</span>
                <span className="text-xs text-white/40">
                  {SKILLS.find((s) => s.label === t.category)?.value}%
                </span>
              </div>
              <div className="mt-0.5 text-xs text-white/50">{t.items}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm font-semibold tracking-tight">Distribution (D3)</div>
        <div className="mt-3 h-[260px]">
          <SkillsDonut data={SKILLS} />
        </div>
      </div>
    </div>
  );
}
