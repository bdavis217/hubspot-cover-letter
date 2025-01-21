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
      <Card className={cn(
        "transition-all duration-300",
        "hover:shadow-lg",
        isActive && "ring-1 ring-blue-500/20 shadow-lg"
      )}>
        <div 
          className="cursor-pointer p-6 space-y-4"
          onClick={onToggle}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-semibold text-lg leading-none">
                  {entry.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {entry.company}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {`${formatDate(entry.date.start)} - ${formatDate(entry.date.end)}`}
              </span>
              <ChevronDown className={cn(
                "h-4 w-4 text-muted-foreground transition-transform duration-300",
                isActive && "rotate-180"
              )} />
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <CardContent className="pb-6 space-y-6">
                <p className="text-sm text-muted-foreground">
                  {entry.description}
                </p>

                {/* Achievements with updated styling */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Key Achievements</h4>
                  <div className="space-y-2">
                    {entry.achievements.map((achievement) => (
                      <div key={achievement.id} className="flex items-start gap-2 text-sm text-gray-600">
                        <ArrowUpRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                        <span>{achievement.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills with updated styling */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {entry.skills.map((skillUsage) => (
                    <span
                      key={skillUsage.skillId}
                      className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      {skills[skillUsage.skillId].name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
} 