import { Rocket } from 'lucide-react';
import type { TimelineEntry } from '../types/career';

export const VENTURE_INFO = {
  id: 'ventures',
  name: 'Independent Ventures',
  company: 'Entrepreneurial Projects',
  abbr: 'Entre',
  icon: Rocket,
  startDate: '2021',
  endDate: 'Present',
  description: 'Building innovative technology solutions for various industries.',
  color: {
    text: 'text-[#ff7a59]',
    bg: 'bg-[#fff4f2]'
  }
} as const;

export const venturesData: TimelineEntry = {
  id: VENTURE_INFO.id,
  type: 'position',
  date: {
    start: VENTURE_INFO.startDate,
    end: VENTURE_INFO.endDate
  },
  title: VENTURE_INFO.name,
  company: VENTURE_INFO.company,
  description: VENTURE_INFO.description,
  achievements: [
    {
      id: 'v1',
      description: 'Co-founded 3Wrkz, developing AI-driven document processing solutions',
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
    },
    {
      id: 'v3',
      description: 'Guiding product strategy to evolve document processor into a versatile SaaS platform',
      impact: 'Expanding market reach and scalability',
      skills: [
        { skillId: 'product-strategy', level: 'lead' },
        { skillId: 'saas', level: 'lead' }
      ]
    }
  ],
  skills: [
    { skillId: 'modern-tech', level: 'lead' },
    { skillId: 'ai-solutions', level: 'lead' }
  ],
  icon: VENTURE_INFO.icon
};