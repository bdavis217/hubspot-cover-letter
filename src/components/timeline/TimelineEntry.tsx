import * as React from 'react';
import { Briefcase, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import type { CareerPosition } from '../../types/career';
import type { TimelineEntry, Skill } from '../../types/career';
import { formatDate } from '../../lib/utils';

interface TimelineEntryProps {
  entry: TimelineEntry;
  skills: Record<string, Skill>;
  isActive: boolean;
  onToggle: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function TimelineEntry({
  entry,
  skills,
  isActive,
  onToggle,
  isFirst,
  isLast
}: TimelineEntryProps) {
  return (
    <div className="group relative pl-16">
      {/* Timeline Node */}
      <div
        className={cn(
          "absolute left-6 top-6 -translate-x-1/2 -translate-y-1/2",
          "flex h-5 w-5 items-center justify-center",
          "rounded-full border-2 shadow-md",
          "transition-all duration-300",
          isActive 
            ? "scale-125 border-blue-500 bg-white" 
            : "border-muted bg-white group-hover:border-blue-500/50"
        )}
      >
        <div className={cn(
          "h-2 w-2 rounded-full",
          "transition-colors duration-300",
          isActive ? "bg-blue-500" : "bg-muted group-hover:bg-blue-500/50"
        )} />
      </div>

      {/* Content Card */}
      <Card className="bg-white border-[#cbd6e2] hover:shadow-sm transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-[#516f90] whitespace-nowrap">
              {`${formatDate(entry.date.start)} - ${formatDate(entry.date.end)}`}
            </span>
            <ChevronDown className={cn(
              "h-4 w-4 text-[#516f90] transition-transform",
              isActive && "transform rotate-180"
            )} />
          </div>
          <h3 className="text-lg font-semibold text-[#33475b] mt-2">{entry.title}</h3>
          <p className="text-[#516f90]">{entry.company}</p>
          
          {/* Achievement section */}
          <div className="space-y-4 mt-4">
            {entry.achievements.map((achievement) => (
              <div key={achievement.id} className="flex items-start gap-2 text-[#516f90]">
                <ArrowUpRight className="w-4 h-4 mt-1 text-[#00a4bd] flex-shrink-0" />
                <span>{achievement.description}</span>
              </div>
            ))}
          </div>

          {/* Skills section */}
          <div className="flex flex-wrap gap-2 pt-2">
            {entry.skills.map((skillUsage) => (
              <span
                key={skillUsage.skillId}
                className="text-xs px-2 py-1 rounded-full bg-[#e5f5f8] text-[#00a4bd] hover:bg-[#d1eff3] transition-colors"
              >
                {skills[skillUsage.skillId].name}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 