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
    <article className="mb-8 md:mb-10 border border-neutral-800/70 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#0073b1]/50 transition-all duration-300 bg-black/70/90 animate-fade-in">
      <section className="flex flex-col md:flex-row p-5 md:p-6 gap-4 md:gap-6">
        <header className="md:w-1/3 mb-4 md:mb-0 pr-0 md:pr-8">
          <h3 className="text-white text-lg md:text-xl font-semibold">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                {title} ↗
              </a>
            ) : (
              title
            )}
          </h3>
          <p className="text-neutral-400 text-sm md:text-[0.95rem] mb-2 font-medium leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {stack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-neutral-800/80 text-[11px] md:text-xs px-3 py-1 rounded-full text-neutral-200 font-medium tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
          {docs && (
            <a
              href={docs.startsWith('http') ? docs : `https://github.com/${docs}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0073b1]/10 text-blue-400 px-3 py-1 rounded-full text-[11px] md:text-xs font-semibold mt-3 hover:bg-[#0073b1]/20 focus:bg-[#0073b1]/20 focus-visible:ring-2 focus-visible:ring-[#0073b1] focus-visible:outline-none transition-all duration-200 shadow-sm"
            >
              Docs ↗
            </a>
          )}
        </header>
        {bullets && bullets.length > 0 && (
          <ul className="md:w-2/3 space-y-3 md:space-y-4">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0073b1]" />
                <span className="text-neutral-300 text-sm md:text-[0.95rem] leading-relaxed">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
} 