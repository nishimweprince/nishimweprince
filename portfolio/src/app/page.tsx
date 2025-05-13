import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ExperienceList from '@/components/ExperienceList';
import ProjectsList from '@/components/ProjectsList';

export default function Home() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <section className="flex flex-1 w-full max-w-7xl mx-auto">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <ExperienceList />
          <ProjectsList />
        </main>
      </section>
    </section>
  );
}
