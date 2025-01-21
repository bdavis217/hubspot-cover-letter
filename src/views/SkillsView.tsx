import * as React from 'react';
import { Users, Code2, Wrench, CircleDot } from 'lucide-react';
import { cn } from '../lib/utils';

interface Skill {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate';
}

interface SkillCategory {
  name: string;
  icon: typeof Users | typeof Code2 | typeof Wrench;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Leadership",
    icon: Users,
    skills: [
      { name: "Engineering Leadership", level: "expert" },
      { name: "Team Building", level: "expert" },
      { name: "Change Management", level: "expert" },
      { name: "Strategic Planning", level: "expert" },
      { name: "Product Strategy", level: "advanced" },
    ]
  },
  {
    name: "Technical Strategy",
    icon: Code2,
    skills: [
      { name: "Technical Architecture", level: "expert" },
      { name: "DevOps & CI/CD", level: "advanced" },
      { name: "Agile/Waterfall SDLC", level: "expert" },
      { name: "System Scalability", level: "advanced" },
      { name: "Enterprise Solutions", level: "expert" },
    ]
  },
  {
    name: "Technical Skills",
    icon: Wrench,
    skills: [
      { name: "C#, SQL", level: "expert" },
      { name: "Angular", level: "advanced" },
      { name: "TypeScript/JavaScript", level: "advanced" },
      { name: "HTML/CSS", level: "advanced" },
      { name: "AI/ML Solutions", level: "intermediate" },
    ]
  }
];

export function SkillsView() {
  return (
    <div className="bg-white border border-[#cbd6e2] rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div key={category.name} className="space-y-4">
            <div className="flex items-center gap-2">
              <category.icon className="h-5 w-5 text-[#00a4bd]" />
              <h3 className="text-lg font-semibold text-[#33475b]">{category.name}</h3>
            </div>
            
            <div className="grid gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={cn(
                    "p-3 rounded-lg",
                    "border border-[#cbd6e2]",
                    "bg-white hover:bg-[#f5f8fa]",
                    "transition-colors"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[#33475b]">{skill.name}</span>
                    {skill.level === "expert" && (
                      <span className="w-2 h-2 rounded-full bg-[#00a4bd]" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsView; 