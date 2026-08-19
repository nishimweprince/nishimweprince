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
  const titleContent = credential ? (
    <a href={credential} target="_blank" rel="noopener noreferrer">{title} <span aria-hidden="true">↗</span></a>
  ) : title;

  return (
    <article className="credential-row">
      <div>
        <h3>{titleContent}</h3>
        <p>{issuer}</p>
      </div>
      <div className="credential-skills" aria-label="Skills">
        {skills.slice(0, 3).map((skill) => <span key={skill}>{skill}</span>)}
        {skills.length > 3 && <span>+{skills.length - 3}</span>}
      </div>
      <time>{date}</time>
    </article>
  );
}
