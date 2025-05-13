import { projectsList } from '@/constants/projects.constants';
import ProjectItem from './ProjectItem';

export default function ProjectsList() {
  return (
    <section className="flex-1 p-8" id="projects">
      <h3 className="text-neutral-400 text-base mb-6">Projects</h3>
      {projectsList?.map((project, i) => (
        <ProjectItem key={i} {...project} />
      ))}
    </section>
  );
} 