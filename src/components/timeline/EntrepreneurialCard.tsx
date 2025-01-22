import * as React from 'react';
import { cn } from '../../lib/utils';
import { Rocket, ArrowUpRight, Code, Brain } from 'lucide-react';

interface Technology {
  name: string;
  icon: React.ElementType;
}

interface Project {
  title: string;
  description: string;
  technologies: Technology[];
}

interface Feature {
  icon: React.ElementType;
  text: string;
}

interface EntrepreneurialCardProps {
  projects: Project[];
  features: Feature[];
  dateRange: string;
}

export function EntrepreneurialCard({ projects, features, dateRange }: EntrepreneurialCardProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-[#ff7a59] p-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 p-2 bg-orange-50 rounded-lg">
            <Rocket className="w-5 h-5 text-[#ff7a59]" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#33475b]">Independent Ventures</h3>
            <p className="text-sm text-[#516f90]">Entrepreneurial Projects</p>
          </div>
        </div>
        <span className="text-sm text-[#ff7a59] font-medium">{dateRange}</span>
      </div>

      {/* Project details */}
      <div className="space-y-3 mb-4">
        {projects.map((project, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <ArrowUpRight className="w-4 h-4 mt-1 text-[#ff7a59] flex-shrink-0" />
            <div>
              <p className="text-sm text-[#33475b]">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-orange-50 text-xs text-[#ff7a59]"
                  >
                    <tech.icon className="w-3 h-3" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mt-6">
        {features.map((feature, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-sm text-[#ff7a59]"
          >
            <feature.icon className="w-4 h-4" />
            {feature.text}
          </span>
        ))}
      </div>
    </div>
  );
} 