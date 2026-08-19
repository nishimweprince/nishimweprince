const contactItems = [
  { label: 'Email', value: 'princeelysee@gmail.com', href: 'mailto:princeelysee@gmail.com' },
  { label: 'LinkedIn', value: 'Connect', href: 'https://linkedin.com/in/nishimweprince' },
  { label: 'GitHub', value: '@nishimweprince', href: 'https://github.com/nishimweprince' },
];

export default function Header() {
  return (
    <header id="top" className="hero">
      <div className="mobile-brandbar">
        <a className="monogram" href="#top" aria-label="Nishimwe Prince — home">NP<span className="brand-dot">.</span></a>
        <a className="mobile-contact" href="mailto:princeelysee@gmail.com">Let&apos;s talk</a>
      </div>

      <p className="eyebrow hero-eyebrow">Full-stack engineer · Kigali / Remote</p>
      <h1>
        Systems that
        <span>hold.</span>
      </h1>

      <div className="hero-lower">
        <p className="hero-copy">
          I design and ship web platforms, AI agents, and trading infrastructure for environments where reliability is the feature.
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="#projects">Explore selected work</a>
          <a className="button button--secondary" href="mailto:princeelysee@gmail.com">Start a conversation</a>
        </div>
      </div>

      <div className="system-path" aria-label="Working approach: Design, ship, observe, refine">
        {['Design', 'Ship', 'Observe', 'Refine'].map((step, index) => (
          <div className="system-path__step" key={step}>
            <span className="system-path__index">0{index + 1}</span>
            <span>{step}</span>
          </div>
        ))}
      </div>

      <address id="contact" className="contact-strip">
        {contactItems.map((item) => (
          <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </address>
    </header>
  );
}
