import ExperienceItem from "./ExperienceItem";

const experiences = [
  {
    title: "Senior Producer",
    company: "Creative Agency XYZ",
    date: "June 2022 - Present",
    location: "Remote & New York, NY",
    bullets: [
      "Seamlessly facilitate diverse creative experiences: from immersive installations to cinematic narratives. A catalyst for collaboration across all mediums.",
      "Clients include: Lunethra, Driftwell, Clyra, Forgekind and more.",
    ],
  },
  {
    title: "Senior Producer",
    company: "Pixel Studios",
    date: "December 2021 - June 2022",
    location: "New York, NY",
    bullets: [
      "Orchestrated the creation of integrated video, motion, and photo content for multi-platform marketing campaigns, ensuring seamless execution and brand alignment.",
      "Directed all phases of production operations (pre-production, production, post-production), meticulously managing budgets, contracts, and legal requirements to deliver projects on time and within quality standards.",
      "Strategically developed and managed production schedules, creative strategies, and talent relations, optimizing resources to deliver high-quality content within budget parameters.",
      "Clients include: Nestive, Zentrox, Pollenate, Vireo and more.",
    ],
  },
  {
    title: "Content Producer",
    company: "Creative Hub Studio",
    date: "October 2016 - March 2018",
    location: "New York, NY",
    bullets: [
      "Facilitated clear and efficient communication across cross-functional teams (Marketing, Brand, Creative, IT, QA), ensuring seamless collaboration and project alignment.",
    ],
  },
];

export default function ExperienceList() {
  return (
    <section className="flex-1 p-8">
      <h3 className="text-neutral-400 text-base mb-6">Experience</h3>
      {experiences.map((exp, i) => (
        <ExperienceItem key={i} {...exp} />
      ))}
    </section>
  );
} 