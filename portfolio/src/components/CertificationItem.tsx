interface CertificationItemProps {
  title: string;
  issuer: string;
  date: string;
  credential?: string | null;
  skills?: string[];
}

export default function CertificationItem({
  title,
  issuer,
  date,
  credential,
  skills = [],
}: CertificationItemProps) {
  return (
    <article className="group !py-4 border-b border-[var(--md-border)] last:border-0">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 !mb-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-[var(--md-fg)] uppercase tracking-tight m-0">
            {credential ? (
              <a
                href={credential}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 decoration-[var(--md-border)] hover:decoration-[var(--md-fg)] transition-all"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <p className="text-sm font-medium text-[var(--md-text-muted)]">
            {issuer}
          </p>
        </div>
        <time className="mono text-[10px] text-[var(--md-text-muted)] font-bold uppercase tracking-widest whitespace-nowrap">
          {date}
        </time>
      </div>

      {skills && skills.length > 0 && (
        <div className="flex flex-wrap !gap-x-4 !gap-y-1 !mt-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-[10px] mono font-bold text-[var(--md-text-muted)] uppercase tracking-tight opacity-60"
            >
              # {skill}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
