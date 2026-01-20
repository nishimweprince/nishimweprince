import { certificationsList } from '@/constants/certifications.constants';
import CertificationItem from './CertificationItem';

export default function CertificationsList() {
  return (
    <section
      className="flex-1 p-4 md:p-8 bg-neutral-900/40 rounded-2xl border border-neutral-800/60 shadow-lg mt-6 md:mt-8 mb-8 md:mb-10"
      id="certifications"
    >
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#0073b1]/70 mb-2">
          Proof of Skills
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-3">
          Certifications
          <span className="h-px flex-1 bg-gradient-to-r from-[#0073b1] via-neutral-500/40 to-transparent" />
        </h3>
      </header>
      {certificationsList?.map((cert, i) => (
        <CertificationItem key={i} {...cert} />
      ))}
    </section>
  );
} 