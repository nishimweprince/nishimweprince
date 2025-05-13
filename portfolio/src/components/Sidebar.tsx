export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-8 w-full max-w-xs p-8 border-r border-neutral-800 min-h-full">
      <p className="text-neutral-200 text-base">
        Full-Stack Developer building Web applications and AI agents.
      </p>
      <nav className="flex flex-col gap-4 text-neutral-400 text-sm">
        <a href="mailto:princeelysee@gmail.com" className="hover:underline">
          princeely@gmail.com ↗
        </a>
        <a target="_blank" href="https://wa.me/250788478652" className="hover:underline">
          (250) 788 478 652 ↗
        </a>
        <a
          target="_blank"
          href="https://linkedin.com/in/nishimweprince"
          className="hover:underline"
        >
          LinkedIn ↗
        </a>
        <a
          target="_blank"
          href="https://github.com/nishimweprince"
          className="hover:underline"
        >
          GitHub ↗
        </a>
      </nav>
    </aside>
  );
}
