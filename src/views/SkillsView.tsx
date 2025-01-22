import * as React from 'react';
import { cn } from '../lib/utils';
import { Card } from '../components/ui/card';
import { Users, Code, Wrench, ChevronUp } from 'lucide-react';
import { companyIcons } from '../data/timeline';

interface SkillProgress {
  company: string;
  date: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
}

interface Skill {
  name: string;
  description: string;
  positions: SkillProgress[];
}

const levelColors = {
  Expert: 'bg-[#00a4bd] text-white',
  Advanced: 'bg-[#516f90] text-white',
  Intermediate: 'bg-[#cbd6e2] text-[#33475b]'
} as const;

const companyAbbreviations = {
  'LSU Online & Continuing Education': 'LSU',
  'BCBS LA': 'BCBS',
  'Amedisys, Inc - Baton Rouge': 'Amed',
  'Unum - Baton Rouge': 'Unum',
  'Entrepreneurial': 'Entre'
} as const;

const skillCategories = [
  {
    id: 'leadership',
    title: 'Leadership',
    icon: Users,
    skills: [
      {
        name: 'Engineering Leadership',
        description: 'Leading and mentoring engineering teams, fostering growth and innovation.',
        positions: [
          { company: 'LSU Online & Continuing Education', date: '2024', level: 'Expert' },
          { company: 'LSU Online & Continuing Education', date: '2021', level: 'Advanced' },
          { company: 'Unum - Baton Rouge', date: '2019', level: 'Intermediate' }
        ]
      }
      // Add other leadership skills...
    ]
  },
  {
    id: 'strategy',
    title: 'Technical Strategy',
    icon: Code,
    skills: [
      {
        name: 'Technical Architecture',
        description: 'Designing and implementing enterprise-scale system architectures.',
        positions: [
          { company: 'LSU Online & Continuing Education', date: '2024', level: 'Expert' },
          { company: 'LSU Online & Continuing Education', date: '2021', level: 'Expert' },
          { company: 'Unum - Baton Rouge', date: '2019', level: 'Advanced' },
          { company: 'Amedisys, Inc - Baton Rouge', date: '2015', level: 'Advanced' }
        ]
      }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Skills',
    icon: Wrench,
    skills: [
      {
        name: 'C#, SQL',
        description: 'Enterprise application development and database design.',
        positions: [
          { company: 'LSU Online & Continuing Education', date: '2024', level: 'Expert' },
          { company: 'LSU Online & Continuing Education', date: '2021', level: 'Expert' },
          { company: 'Unum - Baton Rouge', date: '2019', level: 'Expert' },
          { company: 'Amedisys, Inc - Baton Rouge', date: '2015', level: 'Advanced' }
        ]
      }
    ]
  }
];

export function SkillsView() {
  const [expandedSkill, setExpandedSkill] = React.useState<string | null>(null);

  return (
    <div className="w-[900px]">
      <div className="grid grid-cols-3 gap-6">
        {skillCategories.map(category => (
          <div key={category.id} className="space-y-4">
            <div className="flex items-center gap-2">
              <category.icon className="w-5 h-5 text-[#00a4bd]" />
              <h2 className="text-lg font-semibold text-[#33475b]">
                {category.title}
              </h2>
            </div>
            
            <div className="space-y-3">
              {category.skills.map(skill => {
                const isExpanded = expandedSkill === skill.name;
                
                return (
                  <Card
                    key={skill.name}
                    className={cn(
                      "transition-all duration-200",
                      "hover:shadow-md cursor-pointer"
                    )}
                  >
                    <button
                      onClick={() => setExpandedSkill(isExpanded ? null : skill.name)}
                      className="w-full p-4 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-[#33475b]">{skill.name}</h3>
                        <ChevronUp 
                          className={cn(
                            "w-4 h-4 text-[#516f90] transition-transform",
                            !isExpanded && "rotate-180"
                          )}
                        />
                      </div>
                      
                      {isExpanded && (
                        <div className="mt-3 animate-in fade-in slide-in-from-top-1">
                          <p className="text-sm text-[#516f90] mb-4">
                            {skill.description}
                          </p>
                          <div className="space-y-3">
                            {skill.positions.map((position, idx) => {
                              const Icon = companyIcons[position.company as keyof typeof companyIcons];
                              return (
                                <div 
                                  key={idx}
                                  className="flex items-center justify-between text-sm py-1.5"
                                >
                                  <div className="flex items-center space-x-4">
                                    <Icon className="w-4 h-4 text-[#516f90]" />
                                    <span className="text-[#33475b] min-w-[45px]">
                                      {companyAbbreviations[position.company as keyof typeof companyAbbreviations]}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-4 ml-auto">
                                    <span className="text-[#516f90] w-[45px] text-right font-mono">
                                      {position.date}
                                    </span>
                                    <span className={cn(
                                      "px-3 py-0.5 rounded-full text-xs font-medium w-[90px] text-center",
                                      levelColors[position.level]
                                    )}>
                                      {position.level}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </button>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 