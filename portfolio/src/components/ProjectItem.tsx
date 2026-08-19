interface ProjectItemProps {
  title: string;
  description: string;
  link?: string | null;
  stack: string[];
  docs?: string | null;
  bullets?: string[];
  index?: number;
  compact?: boolean;
}

function resolveDocsUrl(docs: string) {
  return docs.startsWith('http') ? docs : `https://github.com/${docs}`;
}

export default function ProjectItem({
  title,
  description,
  link,
  stack,
  docs,
  bullets = [],
  index = 0,
  compact = false,
}: ProjectItemProps) {
  const number = String(index + 1).padStart(2, '0');

  if (compact) {
    return (
      <article className="archive-project">
        <div className="archive-project__number">{number}</div>
        <div className="archive-project__content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="tag-list" aria-label="Technology stack">
            {stack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          {bullets.length > 0 && (
            <details className="project-details">
              <summary>Implementation notes</summary>
              <ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </details>
          )}
        </div>
        <div className="project-links">
          {link && <a href={link} target="_blank" rel="noopener noreferrer">Project ↗</a>}
          {docs && <a href={resolveDocsUrl(docs)} target="_blank" rel="noopener noreferrer">Docs ↗</a>}
        </div>
      </article>
    );
  }

  const isWide = index === 0;

  return (
    <article className={`project-card${isWide ? ' project-card--wide' : ''}`}>
      <header className="project-card__header">
        <span>{number}</span>
        <span>{stack[0]}</span>
      </header>

      <div className="project-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="tag-list" aria-label="Technology stack">
        {stack.map((technology) => <span key={technology}>{technology}</span>)}
      </div>

      {bullets.length > 0 && (
        <details className="project-details">
          <summary>Why it matters</summary>
          <ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
        </details>
      )}

      <footer className="project-links">
        {link && <a href={link} target="_blank" rel="noopener noreferrer">View project ↗</a>}
        {docs && <a href={resolveDocsUrl(docs)} target="_blank" rel="noopener noreferrer">Read the docs ↗</a>}
      </footer>
    </article>
  );
}
