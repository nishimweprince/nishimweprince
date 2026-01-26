import { projectsList } from '@/constants/projects.constants';
import ProjectItem from './ProjectItem';

export default function ProjectsList() {
  return (
    <section id="projects" className="mb-32 isolate">
      <header className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--md-fg)] uppercase tracking-tighter">
          Selected Projects
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsList?.map((project, i) => (
          <ProjectItem key={i} {...project} />
        ))}
      </div>
    </section>
  );
}


