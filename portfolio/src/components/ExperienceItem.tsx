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
    <div className="mb-8">
      <div className="mb-1">
        <span className="font-semibold text-white">{title}</span>{" "}
        <a href="#" className="text-neutral-400 hover:underline">{company} ↗</a>
      </div>
      <div className="text-neutral-500 text-sm mb-2">{date} <span className="mx-1">·</span> {location}</div>
      <ul className="list-disc list-inside text-neutral-300 text-sm pl-2">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
} 