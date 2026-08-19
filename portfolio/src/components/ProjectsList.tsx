import { projectsList } from '@/constants/projects.constants';
import ProjectItem from './ProjectItem';

const FEATURED_PROJECT_COUNT = 5;

export default function ProjectsList() {
  const featuredProjects = projectsList.slice(0, FEATURED_PROJECT_COUNT);
  const archivedProjects = projectsList.slice(FEATURED_PROJECT_COUNT);

  return (
    <section id="projects" className="page-section projects-section">
      <header className="section-intro section-intro--split">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Systems with a point of view.</h2>
        </div>
        <p>Formal proofs, market infrastructure, and public-facing products — selected for the decisions behind the interface.</p>
      </header>

      <div className="project-grid">
        {featuredProjects.map((project, index) => (
          <ProjectItem key={project.title} {...project} index={index} />
        ))}
      </div>

      {archivedProjects.length > 0 && (
        <details className="project-archive">
          <summary>
            <span>More work</span>
            <span>{archivedProjects.length} additional projects</span>
            <span className="archive-toggle" aria-hidden="true">+</span>
          </summary>
          <div className="archive-list">
            {archivedProjects.map((project, index) => (
              <ProjectItem
                key={project.title}
                {...project}
                index={index + FEATURED_PROJECT_COUNT}
                compact
              />
            ))}
          </div>
        </details>
      )}
    </section>
  );
}
