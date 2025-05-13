import Header from "./Header";
import Sidebar from "./Sidebar";
import ExperienceList from "./ExperienceList";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <div className="flex flex-1 w-full max-w-7xl mx-auto">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <ExperienceList />
          {children}
        </main>
      </div>
    </div>
  );
} 