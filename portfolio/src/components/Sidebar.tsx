export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-8 w-full max-w-xs p-8 border-r border-neutral-800 min-h-full">
      <div>
        <p className="text-neutral-200 text-base">
          A seasoned Senior Producer with 10+ years of experience, I excel in leading complex marketing and design projects from concept to completion.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-neutral-400 text-sm">
        <a href="mailto:hello@figma.com" className="hover:underline">hello@figma.com ↗</a>
        <a href="tel:5551234567" className="hover:underline">(555) 123-4567 ↗</a>
        <a href="#" className="hover:underline">LinkedIn ↗</a>
      </div>
    </aside>
  );
} 