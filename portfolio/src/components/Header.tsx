'use client';

const contactItems = [
  { label: 'Email', value: 'princeelysee@gmail.com', href: 'mailto:princeelysee@gmail.com' },
  { label: 'LinkedIn', value: 'nishimweprince', href: 'https://linkedin.com/in/nishimweprince' },
  { label: 'GitHub', value: 'nishimweprince', href: 'https://github.com/nishimweprince' },
  { label: 'Mobile', value: '+250 788 478 652', href: 'tel:+250788478652' },
];

export default function Header() {
  return (
    <header className="mb-2">
      <div className="flex flex-col gap-8">
        <div>
          <span className="inline-block !px-2 !py-0.5 bg-[var(--md-fg)] text-[var(--md-bg)] text-[10px] font-bold tracking-widest uppercase rounded-sm mb-4">
            Full Stack Developer
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter m-0 border-none p-0">
            Nishimwe Prince
          </h1>
        </div>

        <address className="not-italic flex flex-wrap gap-x-12 gap-y-6 pt-2">
          {contactItems.map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5 focus-within:ring-1 focus-within:ring-[var(--md-fg)] rounded-sm transition-all">
              <span className="text-[10px] uppercase tracking-widest text-[var(--md-text-muted)] font-bold">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm font-medium hover:text-[var(--md-fg)] underline decoration-[var(--md-border)] underline-offset-4 hover:decoration-[var(--md-fg)] transition-all"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-sm font-medium">{item.value}</span>
              )}
            </div>
          ))}
        </address>

        <section className="mt-4 pl-8 max-w-2xl">
          <p className="text-xl md:text-2xl text-[var(--md-text)] font-medium leading-tight tracking-tight">
            I build high-performance web applications and AI agents with a focus on clean architectural patterns and exceptional user experiences.
          </p>
        </section>
      </div>
    </header>
  );
}
