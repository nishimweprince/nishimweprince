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
    <article className="mb-12 border border-neutral-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-black/70 animate-fade-in">
      <section className="flex flex-col md:flex-row p-6">
        <header className="md:w-1/3 mb-4 md:mb-0 pr-0 md:pr-8">
          <h3 className="text-white text-lg font-semibold mb-1">{title}</h3>
          <p className="text-neutral-400 text-sm font-medium mb-1">{issuer}</p>
          <time className="text-neutral-500 text-sm mb-2 block">{date}</time>
          {credential && (
            <a
              href={credential}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0073b1]/10 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold mt-2 hover:bg-[#0073b1]/20 focus:bg-[#0073b1]/20 focus:outline-none transition-all duration-200 shadow-sm"
            >
              Show credential ↗
            </a>
          )}
        </header>
        {skills && skills.length > 0 && (
          <ul className="md:w-2/3 flex flex-wrap gap-2 mt-2">
            {skills.map((skill, idx) => (
              <li key={idx} className="bg-neutral-800 h-fit text-xs px-2 py-1 rounded text-neutral-300 font-medium">
                {skill}
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
} 