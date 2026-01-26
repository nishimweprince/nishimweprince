interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  location: string;
  bullets: string[];
  website: string;
}

export default function ExperienceItem({
  title,
  company,
  date,
  location,
  bullets,
  website,
}: ExperienceItemProps) {
  return (
    <article className="group">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between !mb-2">
        <h3 className="text-xl font-bold text-[var(--md-fg)] uppercase tracking-tight">
          {title}
        </h3>
        <time className="mono text-[10px] text-[var(--md-text-muted)] font-bold uppercase tracking-widest bg-[var(--md-code-bg)] !px-2 !py-1 rounded-sm border border-[var(--md-border)]">
          {date}
        </time>
      </div>

      <div className="flex items-center gap-2 !mb-4">
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold hover:text-[var(--md-fg)] decoration-[var(--md-border)] underline underline-offset-4 hover:decoration-[var(--md-fg)] transition-all"
        >
          {company}
        </a>
        <span className="text-[var(--md-border)]">•</span>
        <span className="text-[11px] font-medium text-[var(--md-text-muted)]">{location}</span>
      </div>

      <ul className="space-y-2 list-none !p-0 !m-0">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="text-[var(--md-text)] text-sm flex items-start gap-3 leading-relaxed">
            <span className="w-1.5 h-1.5 !mt-2 rounded-full bg-[var(--md-border)] !mt-2 shrink-0 group-hover:bg-[var(--md-fg)] transition-colors"></span>
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}
