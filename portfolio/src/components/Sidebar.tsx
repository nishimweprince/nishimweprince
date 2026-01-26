export default function Sidebar() {
  const navLinks = [
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-72 shrink-0 min-h-screen sticky top-0 bg-[var(--md-bg)] z-10">
      {/* Main Navigation */}
      <nav className="flex-1 px-6 py-6" aria-label="Main Navigation">
        <section className="mb-8">
          <ul className="space-y-1 list-none p-0 !pt-8 m-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group nav-link flex items-center gap-3 px-3 py-2 rounded transition-colors hover:bg-[var(--md-code-bg)]"
                >
                  <span className="w-4 h-[1px] bg-[var(--md-border)] group-hover:bg-[var(--md-fg)] transition-colors"></span>
                  <span className="text-sm text-[var(--md-text-muted)] group-hover:text-[var(--md-fg)] transition-colors">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </aside>
  );
}
