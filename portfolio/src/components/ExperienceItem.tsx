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
    <article className="mb-12 border border-neutral-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-black/70 animate-fade-in">
      <section className="flex flex-col md:flex-row p-6">
        <header className="md:w-1/3 mb-4 md:mb-0 pr-0 md:pr-8">
          <h3 className="text-white text-lg font-semibold mb-1">{title}</h3>
          <nav className="flex items-center text-sm mb-1">
            <a href={website} target="_blank" className="text-neutral-400 hover:underline font-medium">
              {company} ↗
            </a>
          </nav>
          <address className="text-neutral-500 text-sm not-italic mb-2">
            {date}
            <br />
            {location}
          </address>
        </header>
        <ul className="md:w-2/3 space-y-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex">
              <span className="text-white mr-2">•</span>
              <span className="text-neutral-300 font-medium">{bullet}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
