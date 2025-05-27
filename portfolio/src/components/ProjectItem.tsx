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
    <article className="mb-12 border border-neutral-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-black/70 animate-fade-in">
      <section className="flex flex-col md:flex-row p-6">
        <header className="md:w-1/3 mb-4 md:mb-0 pr-0 md:pr-8">
          <h3 className="text-white text-lg font-semibold">
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {title} ↗
              </a>
            ) : (
              title
            )}
          </h3>
          <p className="text-neutral-400 text-sm mb-1 font-medium">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {stack.map((tech, idx) => (
              <span key={idx} className="bg-neutral-800 text-xs px-2 py-1 rounded text-neutral-300 font-medium">
                {tech}
              </span>
            ))}
          </div>
          {docs && (
            <a
              href={docs.startsWith('http') ? docs : `https://github.com/${docs}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0073b1]/10 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold mt-2 hover:bg-[#0073b1]/20 focus:bg-[#0073b1]/20 focus:outline-none transition-all duration-200 shadow-sm"
            >
              Docs ↗
            </a>
          )}
        </header>
        {bullets && bullets.length > 0 && (
          <ul className="md:w-2/3 space-y-4">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex">
                <span className="text-white mr-2">•</span>
                <span className="text-neutral-300 font-medium">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
} 