import { experiencesList } from '@/constants/experiences.constants';
import ExperienceItem from './ExperienceItem';

export default function ExperienceList() {
  return (
    <section id="experience" className="page-section experience-section">
      <header className="section-intro">
        <p className="eyebrow">Experience</p>
        <h2>Built in the real world.</h2>
        <p>From clinical software and government platforms to AI data systems, work shaped by real constraints and accountable outcomes.</p>
      </header>

      <div className="experience-list">
        {experiencesList.map((experience) => (
          <ExperienceItem key={`${experience.company}-${experience.date}`} {...experience} />
        ))}
      </div>
    </section>
  );
}
