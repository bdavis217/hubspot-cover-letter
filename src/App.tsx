import { ProfilePanel } from './components/layout/ProfilePanel';
import { TimelinePanel } from './components/layout/TimelinePanel';
import { RightPanel } from './components/layout/RightPanel';
import { Search } from './components/search/Search';

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Interactive Cover Letter</h1>
          <div className="w-96">
            <Search />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 grid grid-cols-[350px_1fr_350px] bg-background">
        <ProfilePanel />
        <TimelinePanel />
        <RightPanel />
      </main>
    </div>
  );
} 