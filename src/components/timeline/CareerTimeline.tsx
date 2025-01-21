import * as React from 'react';
import { timelineData } from '../../data/timeline';
import { skills } from '../../data/skills';
import { TimelineEntry } from './TimelineEntry';

export function CareerTimeline() {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  return (
    <div className="relative space-y-6">
      <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50" />
      
      <div className="space-y-8">
        {timelineData.map((entry, index) => (
          <TimelineEntry
            key={entry.id}
            entry={entry}
            skills={skills}
            isActive={activeId === entry.id}
            onToggle={() => setActiveId(activeId === entry.id ? null : entry.id)}
            isFirst={index === 0}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </div>
    </div>
  );
} 