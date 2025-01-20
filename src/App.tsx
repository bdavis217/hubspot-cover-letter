import { Search } from './components/search/Search';
import { ProfilePanel } from './components/layout/ProfilePanel';
import { TimelinePanel } from './components/layout/TimelinePanel';
import { MetricsPanel } from './components/layout/MetricsPanel';

export function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="border-b">
        <div className="h-14 px-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Interactive Cover Letter</h1>
          <Search />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex">
        {/* Left Panel - Profile */}
        <div className="w-80 border-r shrink-0">
          <ProfilePanel />
        </div>

        {/* Middle Panel - Timeline */}
        <div className="flex-1 min-w-0">
          <TimelinePanel />
        </div>

        {/* Right Panel - Metrics */}
        <div className="w-72 border-l shrink-0">
          <MetricsPanel />
        </div>
      </main>
    </div>
  );
} 