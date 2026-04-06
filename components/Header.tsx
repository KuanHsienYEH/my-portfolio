import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/20 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          KH Yeh
        </Link>
        <nav className="flex items-center gap-4 text-sm text-white/70">
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#experience" className="hover:text-white">Exp</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a
            href="https://github.com/KuanHsienYEH"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
