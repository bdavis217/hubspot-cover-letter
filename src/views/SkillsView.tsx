import * as React from 'react';
import { cn } from '../lib/utils';
import { Card } from '../components/ui/card';
import { Users, Code, Wrench, ChevronUp, Rocket } from 'lucide-react';
import { companyIcons } from '../data/timeline';
import { skills } from '../data/skills';
import { Skill, CompanySkillLevel } from '../types/skills';
import { VENTURE_INFO } from '../data/ventures';
import { timelineData } from '../data/timeline';

const levelColors = {
  'expert': 'bg-[#00a4bd] text-white',
  'advanced': 'bg-[#516f90] text-white',
  'intermediate': 'bg-[#cbd6e2] text-[#33475b]'
} as const;

const companyAbbreviations = {
  'LSU Online & Continuing Education': 'LSU',
  'BCBS LA': 'BCBS',
  'Amedisys, Inc - Baton Rouge': 'Amed',
  'Unum - Baton Rouge': 'Unum'
} as const;

// Group skills by category
const skillCategories = [
  {
    id: 'leadership',
    title: 'Leadership',
    icon: Users,
    skills: skills.filter(skill => skill.category === 'leadership')
  },
  {
    id: 'strategy',
    title: 'Technical Strategy',
    icon: Code,
    skills: skills.filter(skill => skill.category === 'strategy')
  },
  {
    id: 'technical',
    title: 'Technical Skills',
    icon: Wrench,
    skills: skills.filter(skill => skill.category === 'technical')
  }
];

const categoryColors = {
  leadership: 'text-[#00a4bd]',  // HubSpot teal
  strategy: 'text-[#ff7a59]',    // HubSpot orange
  technical: 'text-[#516f90]'    // HubSpot navy
} as const;

export function SkillsView() {
  const [expandedSkill, setExpandedSkill] = React.useState<string | null>(null);

  return (
    <div className="w-[900px]">
      <div className="grid grid-cols-3 gap-6">
        {skillCategories.map(category => (
          <div key={category.id}>
            <h2 className="flex items-center gap-2 mb-4">
              <category.icon className={cn("w-5 h-5", categoryColors[category.id as keyof typeof categoryColors])} />
              <span className={cn("font-medium", categoryColors[category.id as keyof typeof categoryColors])}>
                {category.title}
              </span>
            </h2>
            <div className="space-y-4">
              {category.skills.map(skill => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card
      className={cn(
        "transition-all duration-200",
        "hover:shadow-md cursor-pointer"
      )}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 text-left"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-[#33475b]">{skill.name}</h3>
          <ChevronUp 
            className={cn(
              "w-4 h-4 text-[#516f90] transition-transform",
              !expanded && "rotate-180"
            )}
          />
        </div>
        
        {expanded && (
          <div className="mt-3 animate-in fade-in slide-in-from-top-1">
            <p className="text-sm text-[#516f90] mb-4">
              {skill.description}
            </p>
            <div className="space-y-3">
              {skill.companyLevels.map((companyLevel, idx) => (
                <CompanyLevel key={idx} companyLevel={companyLevel} />
              ))}
              
              {skill.ventures && (
                <div className="flex items-center justify-between text-sm py-1.5">
                  <div className="flex items-center space-x-4">
                    <VENTURE_INFO.icon className={`w-4 h-4 ${VENTURE_INFO.color.text}`} />
                    <span className={VENTURE_INFO.color.text}>
                      {VENTURE_INFO.abbr}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 ml-auto">
                    <span className={VENTURE_INFO.color.text}>
                      {skill.ventures.date}
                    </span>
                    <span className={`px-3 py-0.5 rounded-full text-xs font-medium w-[90px] text-center ${VENTURE_INFO.color.bg} ${VENTURE_INFO.color.text}`}>
                      {skill.ventures.level || 'expert'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </button>
    </Card>
  );
}

function CompanyLevel({ companyLevel }: { companyLevel: CompanySkillLevel }) {
  const Icon = companyIcons[companyLevel.company as keyof typeof companyIcons];
  
  // Get default date from timeline if not specified, extract just the year
  const defaultDate = timelineData
    .find(entry => entry.company === companyLevel.company)
    ?.date.start.split('-')[0] || '';
  
  const displayDate = companyLevel.date || defaultDate;
  
  return (
    <div className="flex items-center justify-between text-sm py-1.5">
      <div className="flex items-center space-x-4">
        <Icon className="w-4 h-4 text-[#516f90]" />
        <span className="text-[#33475b] min-w-[45px]">
          {companyAbbreviations[companyLevel.company as keyof typeof companyAbbreviations]}
        </span>
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <span className="text-[#516f90] w-[45px] text-right font-mono">
          {displayDate}
        </span>
        <span className={cn(
          "px-3 py-0.5 rounded-full text-xs font-medium w-[90px] text-center",
          levelColors[companyLevel.level]
        )}>
          {companyLevel.level}
        </span>
      </div>
    </div>
  );
} 