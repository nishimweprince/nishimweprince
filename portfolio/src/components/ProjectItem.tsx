interface ProjectItemProps {
  title: string;
  description: string;
  link?: string | null;
  stack: string[];
  docs?: string | null;
  bullets?: string[];
}

export default function ProjectItem({
  title,
  description,
  link,
  stack,
  docs,
  bullets = [],
}: ProjectItemProps) {
  return (
    <article className="group bg-[var(--md-code-bg)] !p-6 rounded-lg border border-[var(--md-border)] hover:border-[var(--md-fg)] transition-all flex flex-col h-full">
      <header className="!mb-4">
        <h3 className="text-xl font-bold text-[var(--md-fg)] uppercase tracking-tight !m-0">
          {title}
        </h3>
      </header>

      <div className="flex-1">
        <p className="text-[var(--md-text)] text-sm !mb-6 leading-relaxed opacity-80">
          {description}
        </p>

        {bullets && bullets.length > 0 && (
          <ul className="list-none !p-0 !m-0 space-y-2 !mb-6">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="text-[var(--md-text)] text-[13px] flex items-start gap-3 leading-relaxed">
                <span className="w-1.5 h-[1px] !mt-2.5 bg-[var(--md-fg)] mt-2 shrink-0"></span>
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>

      <footer className="mt-auto !pt-6 border-t border-[var(--md-border)] flex flex-col !gap-4">
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] mono font-bold text-[var(--md-text-muted)] uppercase tracking-widest"
            >
              #{tech}
            </span>
          ))}
        </div>

        <nav className="flex gap-6" aria-label="Project links">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-[var(--md-fg)] hover:underline underline-offset-4"
            >
              Live Demo ↗
            </a>
          )}
          {docs && (
            <a
              href={docs.startsWith('http') ? docs : `https://github.com/${docs}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-[var(--md-fg)] hover:underline underline-offset-4"
            >
              Docs ↗
            </a>
          )}
        </nav>
      </footer>
    </article>
  );
}


