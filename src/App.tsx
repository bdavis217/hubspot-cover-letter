import * as React from 'react';
import { Search } from './components/search/Search';
import { Clock, Code, BarChart, Award } from 'lucide-react';
import { cn } from './lib/utils';
import { TimelineView } from './views/TimelineView';
import { SkillsView } from './views/SkillsView';
import { AwardsView } from './views/AwardsView';
import { ProfileHeader } from './components/layout/ProfileHeader';
import { MetricsGrid } from './components/metrics/MetricsGrid';

const navigationItems = [
  { id: 'timeline', label: 'Experience Timeline', icon: Clock },
  { id: 'skills', label: 'Skills & Expertise', icon: Code },
  { id: 'metrics', label: 'Key Metrics', icon: BarChart },
  { id: 'awards', label: 'Awards & Recognition', icon: Award }
];

export function App() {
  const [activeView, setActiveView] = React.useState('timeline');

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f8fa]">
      {/* Top Navigation */}
      <header className="h-16 border-b border-[#cbd6e2] bg-white">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <h1 className="text-xl font-semibold text-[#33475b]">Interactive Cover Letter</h1>
          <div className="w-96">
            <Search />
          </div>
        </div>
      </header>

      {/* Profile Header */}
      <ProfileHeader />

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Sidebar Navigation */}
        <nav className="w-64 flex-shrink-0 bg-white border-r border-[#cbd6e2] p-4">
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveView(item.id)}
                  className={cn(
                    "w-full px-4 py-2 rounded-md",
                    "flex items-center gap-3",
                    "text-sm font-medium",
                    "transition-colors",
                    activeView === item.id
                      ? "bg-[#ff7a59] text-white"
                      : "text-[#33475b] hover:bg-[#f5f8fa]"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <div className="w-[900px]">
            {activeView === 'timeline' && <TimelineView />}
            {activeView === 'metrics' && <MetricsGrid />}
            {activeView === 'skills' && <SkillsView />}
            {activeView === 'awards' && <AwardsView />}
          </div>
        </main>
      </div>
    </div>
  );
} 