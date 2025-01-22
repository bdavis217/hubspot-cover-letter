import { TimelineEntry } from '../types/career';
import { Rocket } from 'lucide-react';

export const venturesData: TimelineEntry = {
  id: 'ventures',
  type: 'position',
  date: {
    start: '2021',
    end: 'Present'
  },
  title: 'Independent Ventures',
  company: 'Entrepreneurial Projects',
  description: 'Building innovative technology solutions for various industries.',
  achievements: [
    {
      id: 'v1',
      description: 'Built AI-driven document processor for law firm',
      impact: 'Automated document processing and analysis',
      skills: [
        { skillId: 'ai-ml', level: 'lead' },
        { skillId: 'python', level: 'lead' }
      ]
    },
    {
      id: 'v2',
      description: 'Developed workflow management app for real estate transaction coordinators',
      impact: 'Streamlined transaction coordination process',
      skills: [
        { skillId: 'angular', level: 'lead' },
        { skillId: 'typescript', level: 'lead' }
      ]
    }
  ],
  skills: [
    { skillId: 'modern-tech', level: 'lead' },
    { skillId: 'ai-solutions', level: 'lead' }
  ],
  icon: Rocket
};