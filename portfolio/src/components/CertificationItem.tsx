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
    <article className="mb-12">
      <section className="flex flex-col md:flex-row">
        <header className="md:w-1/3 mb-4 md:mb-0 pr-0 md:pr-8">
          <h3 className="text-white text-lg font-normal">{title}</h3>
          <p className="text-neutral-400 text-sm mb-1">{issuer}</p>
          <time className="text-neutral-500 text-sm mb-1">{date}</time>
          {credential && (
            <a
              href={credential}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-400 text-xs mt-2 hover:underline"
            >
              Show credential ↗
            </a>
          )}
        </header>
        {skills && skills.length > 0 && (
          <ul className="md:w-2/3 flex flex-wrap gap-2 mt-2">
            {skills.map((skill, idx) => (
              <li key={idx} className="bg-neutral-800 h-fit text-xs px-2 py-1 rounded text-neutral-300">
                {skill}
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
} 