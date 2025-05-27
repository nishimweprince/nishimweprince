import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col gap-8 w-full max-w-xs p-8 border-r border-neutral-800 min-h-full rounded-xl shadow-lg bg-black/60 backdrop-blur-md transition-all duration-300">
      <p className="text-neutral-200 text-base">
        Full-Stack Developer building Web applications and AI agents.
      </p>
      <nav className="flex flex-col gap-4 text-neutral-400 text-sm">
        <a href="mailto:princeelysee@gmail.com" className="flex items-center gap-2 hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-all duration-200">
          <FiMail className="text-lg" /> princeely@gmail.com ↗
        </a>
        <a target="_blank" href="https://wa.me/250788478652" className="flex items-center gap-2 hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-all duration-200">
          <FiPhone className="text-lg" /> (250) 788 478 652 ↗
        </a>
        <a
          target="_blank"
          href="https://linkedin.com/in/nishimweprince"
          className="flex items-center gap-2 hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-all duration-200"
        >
          <FiLinkedin className="text-lg" /> LinkedIn ↗
        </a>
        <a
          target="_blank"
          href="https://github.com/nishimweprince"
          className="flex items-center gap-2 hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-all duration-200"
        >
          <FiGithub className="text-lg" /> GitHub ↗
        </a>
      </nav>
    </aside>
  );
}
