import { experiencesList } from '@/constants/experiences.constants';
import ExperienceItem from './ExperienceItem';

export default function ExperienceList() {
  return (
    <section className="flex-1 p-4 md:p-8" id='experience'>
      <h3 className="text-neutral-400 text-base mb-6">Experience</h3>
      {experiencesList?.map((exp, i) => (
        <ExperienceItem key={i} {...exp} />
      ))}
    </section>
  );
}
