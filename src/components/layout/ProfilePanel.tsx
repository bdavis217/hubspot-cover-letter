import { Mail, Building2, Linkedin, Globe, Github, Users, Code2, Wrench, CircleDot } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Separator } from '../ui/separator';
import profilePic from '../../assets/images/profile.jpg';
import { cn } from '../../lib/utils';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip';
import { MetricsAndAwards } from '../metrics/MetricsAndAwards';

interface Skill {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate';
}

interface SkillCategory {
  name: string;
  icon: typeof Users | typeof Code2 | typeof Wrench;
  colorClass: {
    bg: string;
    hover: string;
    border: string;
    text: string;
  };
  skills: Skill[];
}

export function ProfilePanel() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Leadership",
      icon: Users,
      colorClass: {
        bg: "bg-blue-50/50 dark:bg-blue-950/50",
        hover: "hover:bg-blue-100/50 dark:hover:bg-blue-900/50",
        border: "border-blue-200/50 dark:border-blue-800/50",
        text: "text-blue-700 dark:text-blue-300"
      },
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
      colorClass: {
        bg: "bg-emerald-50/50 dark:bg-emerald-950/50",
        hover: "hover:bg-emerald-100/50 dark:hover:bg-emerald-900/50",
        border: "border-emerald-200/50 dark:border-emerald-800/50",
        text: "text-emerald-700 dark:text-emerald-300"
      },
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
      colorClass: {
        bg: "bg-purple-50/50 dark:bg-purple-950/50",
        hover: "hover:bg-purple-100/50 dark:hover:bg-purple-900/50",
        border: "border-purple-200/50 dark:border-purple-800/50",
        text: "text-purple-700 dark:text-purple-300"
      },
      skills: [
        { name: "C#, SQL", level: "expert" },
        { name: "Angular", level: "advanced" },
        { name: "TypeScript/JavaScript", level: "advanced" },
        { name: "HTML/CSS", level: "advanced" },
        { name: "AI/ML Solutions", level: "intermediate" },
      ]
    }
  ];

  return (
    <div className="bg-white border-r border-[#cbd6e2]">
      <div className="p-6 space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4 ring-2 ring-[#cbd6e2] ring-offset-2">
            <AvatarImage src={profilePic} alt="Brian Davis" />
            <AvatarFallback className="bg-[#f5f8fa] text-[#516f90]">BD</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold text-[#33475b]">Brian Davis</h2>
          <p className="text-sm font-medium text-[#516f90]">Executive Director, Strategic & Academic Technology</p>
          <p className="text-sm text-[#516f90]">LSU Online & Continuing Education</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="h-4 w-4 text-[#516f90]" />
            <a href="mailto:bdavis217@gmail.com" className="text-[#00a4bd] hover:text-[#0097ad] transition-colors">
              bdavis217@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Linkedin className="h-4 w-4 text-[#516f90]" />
            <a 
              href="https://www.linkedin.com/in/brianelliottdavis/"
              className="text-[#00a4bd] hover:text-[#0097ad] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Github className="h-4 w-4 text-[#516f90]" />
            <a 
              href="https://github.com/bdavis217"
              className="text-[#00a4bd] hover:text-[#0097ad] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Building2 className="h-4 w-4 text-[#516f90]" />
            <span className="text-[#516f90]">20+ Years Experience</span>
          </div>
        </div>

        <Separator className="bg-[#cbd6e2]" />

        {/* Skills */}
        <div className="space-y-6">
          <h3 className="text-sm font-semibold flex items-center gap-2 text-[#33475b]">
            <CircleDot className="h-4 w-4" />
            Skills & Expertise
          </h3>
          
          <div className="grid gap-8">
            {skillCategories.map((category) => (
              <div key={category.name} className="space-y-4">
                <div className="flex items-center gap-2">
                  <category.icon className="h-5 w-5 text-[#00a4bd]" />
                  <h4 className="text-sm font-semibold text-[#33475b]">{category.name}</h4>
                </div>
                
                <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                  {category.skills.map((skill) => (
                    <button
                      key={skill.name}
                      onClick={() => {
                        console.log(`Filter by: ${skill.name}`);
                      }}
                      className={cn(
                        "min-h-[42px] px-4 py-2",
                        "text-sm font-medium",
                        "rounded-lg",
                        "border border-[#cbd6e2]",
                        "bg-white hover:bg-[#f5f8fa]",
                        "text-[#33475b]",
                        "transition-all duration-200",
                        "focus:outline-none focus:ring-2 focus:ring-[#00a4bd] focus:ring-offset-1"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <span>{skill.name}</span>
                        {skill.level === "expert" && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00a4bd]" />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
                
                {category.name !== skillCategories[skillCategories.length - 1].name && (
                  <Separator className="mt-6 bg-[#cbd6e2]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 