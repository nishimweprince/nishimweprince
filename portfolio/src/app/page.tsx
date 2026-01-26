import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ExperienceList from '@/components/ExperienceList';
import CertificationsList from '@/components/CertificationsList';
import ProjectsList from '@/components/ProjectsList';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[var(--md-bg)] text-[var(--md-text)] selection:bg-[var(--md-fg)] selection:text-[var(--md-bg)]">
      {/* Sidebar - Documentation style */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="markdown-container">
          <div className="animate-in stagger-1">
            <Header />

            <div className="space-y-0">
              <ExperienceList />
              <ProjectsList />
              <CertificationsList />
            </div>

            <footer className="mt-40 !pb-20 !pt-10 border-t border-[var(--md-border)]">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[var(--md-text-muted)] text-[10px] mono uppercase tracking-widest font-bold">
                <p>© {new Date().getFullYear()} Nishimwe Prince. All rights reserved.</p>
                <nav className="flex gap-8" aria-label="Footer Navigation">
                  <Link href="#experience" className="hover:text-[var(--md-fg)] transition-colors">Back to top</Link>
                  <Link href="https://github.com/nishimweprince/nishimweprince/tree/main/portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--md-fg)] transition-colors">Source</Link>
                </nav>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
