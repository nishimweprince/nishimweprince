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
    <article className="experience-row">
      <div className="experience-meta">
        <time>{date}</time>
        <p>{location}</p>
      </div>

      <div className="experience-body">
        <h3>{title}</h3>
        <a className="company-link" href={website} target="_blank" rel="noopener noreferrer">
          {company} <span aria-hidden="true">↗</span>
        </a>
        <ul>
          {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      </div>
    </article>
  );
}
