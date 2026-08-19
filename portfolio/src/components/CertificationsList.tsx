import { certificationsList } from '@/constants/certifications.constants';
import CertificationItem from './CertificationItem';

export default function CertificationsList() {
  return (
    <section id="certifications" className="page-section credentials-section">
      <header className="section-intro section-intro--split">
        <div>
          <p className="eyebrow">Credentials</p>
          <h2>Learning, made legible.</h2>
        </div>
        <p>Validated foundations across backend engineering, cloud infrastructure, networking, and applied AI.</p>
      </header>

      <div className="credentials-list">
        {certificationsList.map((certification) => (
          <CertificationItem key={`${certification.title}-${certification.date}`} {...certification} />
        ))}
      </div>

      <div className="closing-callout">
        <p className="eyebrow">Have a hard problem?</p>
        <h2>Let&apos;s make it hold.</h2>
        <a className="button button--inverted" href="mailto:princeelysee@gmail.com">princeelysee@gmail.com ↗</a>
      </div>
    </section>
  );
}
