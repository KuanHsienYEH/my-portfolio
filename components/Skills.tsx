import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SkillsBubble } from '@/components/d3/SkillsBubble';

const TECH = [
  {
    category: 'Frontend',
    color: 'bg-blue-500',
    items: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SCSS', 'RWD'],
  },
  {
    category: 'Backend & DB',
    color: 'bg-violet-500',
    items: ['.NET Core', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Docker'],
  },
  {
    category: 'DevOps',
    color: 'bg-cyan-500',
    items: ['CI/CD', 'Azure', 'AWS', 'Vercel', 'Git', 'GitHub Actions'],
  },
  {
    category: 'Testing',
    color: 'bg-pink-500',
    items: ['Cypress', 'Jest', 'E2E Testing'],
  },
];

export function Skills() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Tech stack list */}
      <Card className="bg-card/60 backdrop-blur-sm border-border/60">
        <CardHeader>
          <CardTitle className="text-base">Tech Stack</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {TECH.map((t) => (
            <div key={t.category}>
              <div className="mb-2.5 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${t.color}`} />
                <span className="text-sm font-medium">{t.category}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {t.items.map((item) => (
                  <Badge key={item} variant="secondary" className="text-xs font-normal">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Animated bubble chart */}
      <Card className="bg-card/60 backdrop-blur-sm border-border/60 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-base">Skill Map</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-[340px]">
            <SkillsBubble />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
