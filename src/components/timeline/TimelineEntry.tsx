import * as React from 'react';
import { Briefcase, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import type { CareerPosition, TimelineEntry } from '../../types/career';
import type { Skill } from '../../types/skills';
import { formatDate } from '../../lib/utils';

interface TimelineEntryProps {
  entry: TimelineEntry;
  skills: Skill[];
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
  const findSkill = (skillId: string) => {
    return skills.find(skill => skill.id === skillId);
  };

  const isVentures = entry.id === 'ventures';

  return (
    <div>
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
          
          {/* Description section */}
          <div className="space-y-4 mt-4">
            {entry.achievements.map((achievement) => (
              <div key={achievement.id} className="space-y-2">
                <div className="flex items-start gap-2 text-[#516f90]">
                  <ArrowUpRight 
                    className={cn(
                      "w-4 h-4 mt-1 flex-shrink-0",
                      isVentures ? "text-[#ff7a59]" : "text-[#00a4bd]"
                    )} 
                  />
                  <span>{achievement.description}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 