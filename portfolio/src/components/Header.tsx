'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="flex flex-col md:flex-row max-w-[85%] mx-auto justify-between items-start md:items-center w-full py-6 px-4 md:py-8 md:px-8 border-b border-neutral-800">
      <Link href={`/`} className="mb-2 md:mb-0">
        <h1 className="text-2xl font-bold text-white">Nishimwe Prince</h1>
        <h2 className="text-lg text-neutral-400">Full Stack Developer</h2>
      </Link>
      <button
        aria-label="Open menu"
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen(!menuOpen);
        }}
        className="md:hidden ml-auto text-white focus:outline-none"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <nav
        className={`w-full md:w-[50%] flex-col md:flex-row flex items-start md:items-center gap-6 md:gap-8 justify-end transition-all duration-300 bg-black md:bg-transparent z-20 ${menuOpen ? 'flex absolute top-20 left-0 px-4 py-4 border-b border-neutral-800' : 'hidden md:flex static'}`}
      >
        <Link
          href="#experience"
          className="text-white text-md hover:underline transition-all duration-300"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
          }}
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className="text-white text-md hover:underline transition-all duration-300"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
          }}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}
