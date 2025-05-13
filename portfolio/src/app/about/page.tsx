import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-lg text-neutral-300 max-w-xl mb-8 text-center">
        Alexandra Moore is a seasoned Senior Producer with a passion for leading complex marketing and design projects. This site is a portfolio and resume showcase built with Next.js and Tailwind CSS.
      </p>
      <Link href="/" className="text-blue-400 hover:underline">← Back to Home</Link>
    </div>
  );
} 