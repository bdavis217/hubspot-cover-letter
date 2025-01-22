import * as React from 'react';
import { cn } from '../lib/utils';
import { Card } from '../components/ui/card';
import { ChevronLeft, ChevronRight, GraduationCap, Building2, Heart, Building, Shield } from 'lucide-react';
import { positions } from '../data/timeline';

interface Position {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  description: string[];
  skills: string[];
}

// Industry-specific icon mapping
const companyIcons = {
  'LSU Online & Continuing Education': GraduationCap,
  'BCBS LA': Shield,
  'Amedisys, Inc - Baton Rouge': Heart,
  'Unum - Baton Rouge': Building2,
} as const;

// Add company abbreviation mapping
const companyAbbreviations = {
  'LSU Online & Continuing Education': 'LSU',
  'BCBS LA': 'BCBS',
  'Amedisys, Inc - Baton Rouge': 'Amed',
  'Unum - Baton Rouge': 'Unum',
} as const;

export function TimelineView() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const handlePrevious = () => {
    setActiveIndex((current) => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => Math.min(positions.length - 1, current + 1));
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="space-y-8">
      {/* Position Cards with Navigation */}
      <div className="relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12">
          <button
            onClick={handlePrevious}
            disabled={activeIndex === 0}
            className={cn(
              "p-2 rounded-full transition-colors",
              "hover:bg-[#f5f8fa] disabled:opacity-50"
            )}
          >
            <ChevronLeft className="h-6 w-6 text-[#516f90]" />
          </button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12">
          <button
            onClick={handleNext}
            disabled={activeIndex === positions.length - 1}
            className={cn(
              "p-2 rounded-full transition-colors",
              "hover:bg-[#f5f8fa] disabled:opacity-50"
            )}
          >
            <ChevronRight className="h-6 w-6 text-[#516f90]" />
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {positions.map((position) => (
              <Card 
                key={position.id}
                className="w-full flex-shrink-0 bg-white border-[#cbd6e2]"
              >
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#33475b]">
                      {position.title}
                    </h3>
                    <p className="text-[#516f90]">{position.company}</p>
                    <p className="text-sm text-[#516f90]">{position.dateRange}</p>
                  </div>

                  <ul className="space-y-2">
                    {position.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#33475b]">
                        <span className="text-[#00a4bd]">↗</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-[#f5f8fa] text-[#516f90]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Updated Timeline */}
      <div className="relative pt-8">
        {/* Base Line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[#cbd6e2]" />
        
        {/* Progress Line */}
        <div 
          className="absolute top-1/2 left-0 h-px bg-[#00a4bd] transition-all duration-500"
          style={{
            width: `${(activeIndex / (positions.length - 1)) * 100}%`
          }}
        />

        {/* Timeline Nodes */}
        <div className="relative flex justify-between">
          {positions.map((position, index) => {
            const Icon = companyIcons[position.company as keyof typeof companyIcons] || Building;
            const year = position.dateRange.split(' ').pop()?.split('-')[0];
            const abbr = companyAbbreviations[position.company as keyof typeof companyAbbreviations];

            return (
              <button
                key={position.id}
                onClick={() => setActiveIndex(index)}
                className="group flex flex-col items-center"
              >
                <div 
                  className={cn(
                    "w-8 h-8 rounded-full transition-all duration-300",
                    "flex items-center justify-center",
                    index <= activeIndex
                      ? "bg-[#00a4bd] border-2 border-white"
                      : "bg-white border-2 border-[#cbd6e2]",
                    "group-hover:border-[#00a4bd]"
                  )}
                >
                  <Icon 
                    className={cn(
                      "w-4 h-4 transition-colors",
                      index <= activeIndex 
                        ? "text-white" 
                        : "text-[#516f90]"
                    )}
                  />
                </div>
                <div className="mt-2 text-center space-y-1">
                  <p className="text-xs font-medium text-[#33475b]">
                    {abbr}
                  </p>
                  <p className="text-xs text-[#516f90]">
                    {year}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: positions.length }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              i === activeIndex
                ? "bg-[#00a4bd]"
                : "bg-[#cbd6e2]"
            )}
          />
        ))}
      </div>
    </div>
  );
} 