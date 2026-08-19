import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
];

export default function Sidebar() {
  return (
    <aside className="site-rail">
      <a className="monogram" href="#top" aria-label="Nishimwe Prince home">
        NP<span className="brand-dot">.</span>
      </a>

      <nav className="rail-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="rail-footer">
        <ThemeToggle />
      </div>
    </aside>
  );
}
