import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LINKS } from '@/lib/constants';

const NAV = [
  { label: '01. Exp',        href: '#experience' },
  { label: '02. Skills',     href: '#skills' },
  { label: '03. Work',       href: '#work' },
  { label: '04. Contact',    href: '#contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-xl transition-all">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm text-kh-accent hover:opacity-80 transition-opacity"
        >
          &lt;KuanYeh /&gt;
        </Link>

        <nav className="flex items-center gap-0.5 text-sm">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 font-mono text-xs text-muted-foreground hover:text-kh-accent transition-colors"
            >
              {item.label}
            </a>
          ))}

          <Separator orientation="vertical" className="mx-2 h-4" />

          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 font-mono text-xs text-muted-foreground hover:text-kh-accent transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center px-4 py-1.5 font-mono text-xs border border-kh-accent text-kh-accent rounded hover:bg-kh-accent/10 transition-colors"
          >
            LinkedIn
          </a>

          <Separator orientation="vertical" className="mx-2 h-4" />

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
