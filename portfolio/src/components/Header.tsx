import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full py-8 px-8 border-b border-neutral-800">
      <div>
        <h1 className="text-2xl font-bold text-white">Alexandra Moore,</h1>
        <h2 className="text-lg text-neutral-400">Senior Producer</h2>
      </div>
      <nav>
        <Link href="/about" className="text-white text-lg hover:underline">About</Link>
      </nav>
    </header>
  );
} 