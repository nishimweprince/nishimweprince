import { certificationsList } from '@/constants/certifications.constants';
import CertificationItem from './CertificationItem';

export default function CertificationsList() {
  return (
    <section className="flex-1 p-4 md:p-8" id="certifications">
      <h3 className="text-neutral-400 text-base mb-6">Certifications</h3>
      {certificationsList?.map((cert, i) => (
        <CertificationItem key={i} {...cert} />
      ))}
    </section>
  );
} 