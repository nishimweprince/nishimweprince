interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  location: string;
  bullets: string[];
}

export default function ExperienceItem({
  title,
  company,
  date,
  location,
  bullets,
}: ExperienceItemProps) {
  return (
    <article className="mb-12">
      <section className="flex flex-col md:flex-row">
        <header className="md:w-1/3 mb-4 md:mb-0 pr-0 md:pr-8">
          <h3 className="text-white text-lg font-normal">{title}</h3>
          <nav className="flex items-center text-sm mb-1">
            <a href="#" className="text-neutral-400 hover:underline">
              {company} ↗
            </a>
          </nav>
          <address className="text-neutral-500 text-sm not-italic">
            {date}
            <br />
            {location}
          </address>
        </header>

        <ul className="md:w-2/3 space-y-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex">
              <span className="text-white mr-2">•</span>
              <span className="text-neutral-300">{bullet}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
