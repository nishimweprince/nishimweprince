import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex max-w-[85%] mx-auto justify-between items-center w-full py-8 px-8 border-b border-neutral-800">
      <Link href={`/`}>
        <h1 className="text-2xl font-bold text-white">Nishimwe Prince</h1>
        <h2 className="text-lg text-neutral-400">Full Stack Developer</h2>
      </Link>
      <nav className="w-[50%] flex items-center gap-8 justify-end">
        <Link
          href="#experience"
          className="text-white text-md hover:underline transition-all duration-300"
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className="text-white text-md hover:underline transition-all duration-300"
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}
