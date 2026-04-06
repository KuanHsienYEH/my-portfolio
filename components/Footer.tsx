export function Footer() {
  return (
    <footer className="container mt-12 pb-10 pt-10 text-sm text-white/45">
      <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 md:flex-row">
        <div className="flex items-center gap-4">
          <span>© {new Date().getFullYear()} KH Yeh</span>
          <a
            href="https://github.com/KuanHsienYEH"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/software-engineer-kh-yeh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70"
          >
            LinkedIn
          </a>
        </div>
        <div className="text-white/35">Built with Next.js + Tailwind + D3</div>
      </div>
    </footer>
  );
}
