'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="flex flex-col md:flex-row max-w-[85%] mx-auto justify-between items-start md:items-center w-full py-6 px-4 md:py-8 md:px-8 border-b border-neutral-800 rounded-xl shadow-lg bg-black/70 backdrop-blur-md transition-all duration-300 gap-4 md:gap-6">
      <Link href={`/`} className="mb-2 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Nishimwe Prince</h1>
        <h2 className="text-base md:text-lg text-neutral-400 font-medium">
          Full Stack Developer • Web Apps & AI Agents
        </h2>
      </Link>
      <button
        aria-label="Open menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        className="md:hidden ml-auto text-white focus:outline-none"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <nav
        className={`w-full md:w-[50%] flex-col md:flex-row flex items-start md:items-center gap-4 md:gap-5 justify-end transition-all duration-300 bg-black/80 md:bg-transparent z-20 ${menuOpen ? 'flex absolute top-20 left-0 px-4 py-4 border-b border-neutral-800 rounded-b-xl shadow-lg' : 'hidden md:flex static'
          }`}
      >
        <Link
          href="#experience"
          className="text-white p-1 px-4 rounded-md hover:bg-[#ffffff]/20 active:bg-[#0073b1]/30 focus-visible:bg-[#0073b1]/20 focus-visible:ring-2 focus-visible:ring-[#0073b1] focus-visible:outline-none transition-all duration-300 ease-in-out"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          Experience
        </Link>
        <Link
          href="#certifications"
          className="text-white p-1 px-4 rounded-md hover:bg-[#ffffff]/20 active:bg-[#0073b1]/30 focus-visible:bg-[#0073b1]/20 focus-visible:ring-2 focus-visible:ring-[#0073b1] focus-visible:outline-none transition-all duration-300 ease-in-out"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          Certifications
        </Link>
        <Link
          href="#projects"
          className="text-white p-1 px-4 rounded-md hover:bg-[#ffffff]/20 active:bg-[#0073b1]/30 focus-visible:bg-[#0073b1]/20 focus-visible:ring-2 focus-visible:ring-[#0073b1] focus-visible:outline-none transition-all duration-300 ease-in-out"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}
