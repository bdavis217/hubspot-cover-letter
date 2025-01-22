import * as React from 'react';
import { timelineData } from '../../data/timeline';
import { venturesData } from '../../data/ventures';
import { cn } from '../../lib/utils';
import { Rocket } from 'lucide-react';
import { TimelineEntry } from './TimelineEntry';
import { skills } from '../../data/skills';

// Add company abbreviation mapping at the top
const companyAbbreviations = {
  'LSU Online & Continuing Education': 'LSU',
  'BCBS LA': 'BCBS',
  'Amedisys, Inc - Baton Rouge': 'Amed',
  'Unum - Baton Rouge': 'Unum'
} as const;

// Make sure skills is actually exported and has the correct structure
console.log('Skills:', skills); // Add this temporarily to debug

export function CareerTimeline() {
  const [activePosition, setActivePosition] = React.useState(0);
  const [isVenturesActive, setIsVenturesActive] = React.useState(false);
  const activeEntry = isVenturesActive ? venturesData : timelineData[activePosition];

  const handlePositionClick = (index: number) => {
    setActivePosition(index);
    setIsVenturesActive(false);
  };

  const handleVenturesClick = () => {
    setIsVenturesActive(true);
  };

  return (
    <div className="space-y-4">
      {/* Detail Card */}
      <div className="mb-4">
        <TimelineEntry
          key={activeEntry.id}
          entry={activeEntry}
          skills={skills}
          isActive={true}
          onToggle={() => {}}
          isFirst={!isVenturesActive && activePosition === 0}
          isLast={!isVenturesActive && activePosition === timelineData.length - 1}
        />
      </div>

      {/* Horizontal Timeline with integrated ventures */}
      <div className="relative pt-4 pb-32 bg-[#f5f8fa] rounded-lg">  {/* Increased pb-20 to pb-32, added rounded-lg */}
        {/* Base connecting line */}
        <div className="absolute top-[60px] left-[6%] right-[6%] h-[2px] bg-[#e5f5f8]" />
        
        {/* Active line segment */}
        <div 
          className="absolute top-[60px] left-[6%] h-[2px] bg-[#00a4bd] transition-all duration-300"
          style={{
            width: `${(activePosition / (timelineData.length - 1)) * 88}%`
          }}
        />

        {/* Company nodes */}
        <div className="relative flex justify-between items-start px-4">
          {timelineData.map((position, index) => (
            <div key={position.id} className="relative flex flex-col items-center">
              <button
                onClick={() => handlePositionClick(index)}
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                  index === activePosition 
                    ? "bg-[#00a4bd] border-2 border-[#00a4bd] text-white" 
                    : index < activePosition
                      ? "bg-[#00a4bd] border-2 border-[#00a4bd] text-white"
                      : "bg-white border-2 border-[#cbd6e2] text-[#516f90]"
                )}
              >
                {React.createElement(position.icon, { 
                  className: cn(
                    "w-8 h-8",
                    index <= activePosition ? "text-white" : "text-[#516f90]"
                  )
                })}
              </button>
              <div className="mt-2 text-center">
                <div className={cn(
                  "font-medium",
                  index <= activePosition ? "text-[#00a4bd]" : "text-[#516f90]"
                )}>
                  {companyAbbreviations[position.company as keyof typeof companyAbbreviations]}
                </div>
                <div className="text-sm text-[#516f90]">
                  {position.date.start.split('-')[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Independent Ventures node */}
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-4">
          <div className="relative flex flex-col items-center">
            <div className="h-6 w-px bg-[#ff7a59]" />
            <button
              onClick={handleVenturesClick}
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                isVenturesActive
                  ? "bg-[#ff7a59] border-2 border-[#ff7a59] text-white"
                  : "bg-white border-2 border-[#ff7a59] text-[#ff7a59]"
              )}
            >
              <Rocket className="w-8 h-8" />
            </button>
            <div className="mt-2 text-center">
              <div className={cn(
                "font-medium",
                isVenturesActive ? "text-[#ff7a59]" : "text-[#516f90]"
              )}>
                Independent Ventures
              </div>
              <div className="text-sm text-[#516f90]">2021 - Present</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 