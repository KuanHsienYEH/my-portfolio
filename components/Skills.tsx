import { SkillsDonut } from '@/components/d3/SkillsDonut';

const SKILLS = [
  { label: 'Frontend', value: 40 },
  { label: 'Backend', value: 25 },
  { label: 'Data Viz', value: 20 },
  { label: 'Design', value: 15 },
];

export function Skills() {
  return (
    <div id="skills" className="grid gap-8 md:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm font-semibold tracking-tight">Summary</div>
        <ul className="mt-3 space-y-2 text-sm text-white/70">
          {SKILLS.map((s) => (
            <li key={s.label} className="flex items-center justify-between">
              <span>{s.label}</span>
              <span className="text-white/55">{s.value}%</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm font-semibold tracking-tight">Donut (D3)</div>
        <div className="mt-3 h-[260px]">
          <SkillsDonut data={SKILLS} />
        </div>
      </div>
    </div>
  );
}
