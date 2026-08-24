import CertificationsList from '@/components/CertificationsList';
import ExperienceList from '@/components/ExperienceList';
import Header from '@/components/Header';
import ProjectsList from '@/components/ProjectsList';
import Sidebar from '@/components/Sidebar';
import TradingAlgosSpotlight from '@/components/TradingAlgosSpotlight';
import { FaArrowUp, FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Sidebar />

      <main id="main-content" className="site-main">
        <Header />
        <TradingAlgosSpotlight />
        <ExperienceList />
        <ProjectsList />
        <CertificationsList />

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Nishimwe Prince</p>
          <div className="footer-links">
            <a href="#top">Back to top <FaArrowUp className="inline-icon" aria-hidden="true" /></a>
            <a
              href="https://github.com/nishimweprince/nishimweprince/tree/main/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source <FaArrowUpRightFromSquare className="inline-icon" aria-hidden="true" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
