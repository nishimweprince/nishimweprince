import { experiencesList } from '@/constants/experiences.constants';
import ExperienceItem from './ExperienceItem';

export default function ExperienceList() {
  return (
    <section
      className="flex-1 p-4 md:p-8 bg-neutral-900/40 rounded-2xl border border-neutral-800/60 shadow-lg mt-6 md:mt-8"
      id="experience"
    >
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#0073b1]/70 mb-2">
          Background
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-3">
          Experience
          <span className="h-px flex-1 bg-gradient-to-r from-[#0073b1] via-neutral-500/40 to-transparent" />
        </h3>
      </header>
      {experiencesList?.map((exp, i) => (
        <ExperienceItem key={i} {...exp} />
      ))}
    </section>
  );
}
