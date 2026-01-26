import { experiencesList } from '@/constants/experiences.constants';
import ExperienceItem from './ExperienceItem';

export default function ExperienceList() {
  return (
    <section id="experience" className="mb-32 isolate">
      <header className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--md-fg)] uppercase tracking-tighter">
          Experience
        </h2>
      </header>

      <div className="space-y-20">
        {experiencesList?.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </div>
    </section>
  );
}

