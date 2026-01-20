import { projectsList } from '@/constants/projects.constants';
import ProjectItem from './ProjectItem';

export default function ProjectsList() {
  return (
    <section
      className="flex-1 p-4 md:p-8 bg-neutral-900/40 rounded-2xl border border-neutral-800/60 shadow-lg mt-6 md:mt-8"
      id="projects"
    >
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#0073b1]/70 mb-2">
          Selected Work
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-3">
          Projects
          <span className="h-px flex-1 bg-gradient-to-r from-[#0073b1] via-neutral-500/40 to-transparent" />
        </h3>
      </header>
      {projectsList?.map((project, i) => (
        <ProjectItem key={i} {...project} />
      ))}
    </section>
  );
} 