import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const contactItems = [
  { label: 'Email', value: 'princeelysee@gmail.com', href: 'mailto:princeelysee@gmail.com' },
  { label: 'LinkedIn', value: 'Connect', href: 'https://linkedin.com/in/nishimweprince' },
  { label: 'GitHub', value: '@nishimweprince', href: 'https://github.com/nishimweprince' },
];

export default function Header() {
  return (
    <header id="top" className="hero">
      <div className="mobile-brandbar">
        <a className="monogram" href="#top" aria-label="Nishimwe Prince home">NP<span className="brand-dot">.</span></a>
        <a className="mobile-contact" href="mailto:princeelysee@gmail.com">Let&apos;s talk</a>
      </div>

      <div className="hero-kicker">
        <p className="eyebrow">Full-stack engineer · Kansas City, MO / Remote</p>
        <a href="#trading-algos">
          Now building Trading Algos <span aria-hidden="true">↓</span>
        </a>
      </div>
      <h1>
        Systems that
        <span>hold.</span>
      </h1>

      <div className="hero-lower">
        <p className="hero-copy">
          I design and ship web platforms, AI agents, and trading infrastructure—currently
          focused on a multi-service platform that carries market signals safely into execution.
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="https://trading-algos.nishimweprince.dev" target="_blank" rel="noopener noreferrer">
            Explore Trading Algos <FaArrowUpRightFromSquare className="inline-icon" aria-hidden="true" />
          </a>
          <a className="button button--secondary" href="#projects">Selected work</a>
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
            <FaArrowUpRightFromSquare className="inline-icon" aria-hidden="true" />
          </a>
        ))}
      </address>
    </header>
  );
}
