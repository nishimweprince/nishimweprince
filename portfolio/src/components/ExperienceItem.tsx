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
    <article className="mb-8 md:mb-10 border border-neutral-800/70 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#0073b1]/50 transition-all duration-300 bg-black/70/90 animate-fade-in">
      <section className="flex flex-col md:flex-row p-5 md:p-6 gap-4 md:gap-6">
        <header className="md:w-1/3 mb-4 md:mb-0 pr-0 md:pr-8">
          <h3 className="text-white text-lg md:text-xl font-semibold mb-1">
            {title}
          </h3>
          <nav className="flex items-center text-sm mb-1">
            <a
              href={website}
              target="_blank"
              className="text-neutral-300 hover:text-blue-300 hover:underline font-medium transition-colors"
            >
              {company} ↗
            </a>
          </nav>
          <address className="text-neutral-500 text-xs md:text-sm not-italic mb-2 leading-relaxed">
            {date}
            <br />
            {location}
          </address>
        </header>
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
      </section>
    </article>
  );
}
