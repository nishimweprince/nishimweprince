import { certificationsList } from '@/constants/certifications.constants';
import CertificationItem from './CertificationItem';

export default function CertificationsList() {
  return (
    <section id="certifications" className="mb-32 isolate">
      <header className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--md-fg)] uppercase tracking-tighter">
          Certifications
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {certificationsList?.map((cert, i) => (
          <CertificationItem key={i} {...cert} />
        ))}
      </div>
    </section>
  );
}


