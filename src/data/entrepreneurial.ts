import { Code, Brain, Rocket, Workflow, Search, Bot } from 'lucide-react';

export interface EntrepreneurialProject {
  title: string;
  description: string;
  technologies: {
    name: string;
    icon: React.ElementType;
  }[];
}

export interface EntrepreneurialData {
  projects: EntrepreneurialProject[];
  features: {
    icon: React.ElementType;
    text: string;
  }[];
  dateRange: string;
}

export const entrepreneurialData: EntrepreneurialData = {
  projects: [
    {
      title: 'AI Document Processor',
      description: 'Built AI-driven document processor for law firm',
      technologies: [
        { name: 'AI/ML', icon: Brain },
        { name: 'Python', icon: Code }
      ]
    },
    {
      title: 'Workflow Management',
      description: 'Developed workflow management app for real estate transaction coordinators',
      technologies: [
        { name: 'Angular', icon: Code },
        { name: 'TypeScript', icon: Code }
      ]
    }
  ],
  features: [
    { icon: Rocket, text: 'Modern Tech Stack' },
    { icon: Brain, text: 'AI Solutions' }
  ],
  dateRange: '2021 - Present'
}; 