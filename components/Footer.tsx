export function Footer() {
  return (
    <footer className="container mt-12 pb-10 pt-10 text-sm text-white/45">
      <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 md:flex-row">
        <div>© {new Date().getFullYear()} KY</div>
        <div className="text-white/35">Built with Next.js + Tailwind + D3</div>
      </div>
    </footer>
  );
}
