import { Skill } from '../types/skills';
import { Rocket } from 'lucide-react';
import { VENTURE_INFO } from './ventures';

export const skills: Skill[] = [
  // Leadership Skills
  {
    id: 'eng-leadership',
    name: 'Engineering Leadership',
    category: 'leadership',
    description: 'Leading and mentoring engineering teams, fostering growth and innovation.',
    companyLevels: [
      { company: 'LSU Online & Continuing Education', level: 'expert' },
      { company: 'Unum - Baton Rouge', level: 'expert'},
      { company: 'Amedisys, Inc - Baton Rouge', level: 'intermediate' }
    ],
    level: 'expert',
    ventures: {
      icon: VENTURE_INFO.icon,
      abbr: VENTURE_INFO.abbr,
      date: VENTURE_INFO.startDate,
      level: 'expert'
    }
  },
  {
    id: 'team-building',
    name: 'Team Building',
    category: 'leadership',
    description: 'Building and developing high-performing engineering teams.',
    companyLevels: [
      { company: 'LSU Online & Continuing Education', level: 'expert' },
      { company: 'Amedisys, Inc - Baton Rouge', level: 'intermediate' }
    ],
    level: 'expert',
    ventures: {
      icon: VENTURE_INFO.icon,
      abbr: VENTURE_INFO.abbr,
      date: VENTURE_INFO.startDate,
      level: 'expert'
    }
  },
  {
    id: 'change-management',
    name: 'Change Management',
    category: 'leadership',
    description: 'Leading organizational and technical transformation initiatives.',
    companyLevels: [
      { company: 'LSU Online & Continuing Education', level: 'expert' },
      { company: 'Unum - Baton Rouge', level: 'expert' },
      { company: 'BCBS LA', level: 'expert' },
      { company: 'Amedisys, Inc - Baton Rouge', level: 'intermediate' }
    ],
    level: 'expert',
    ventures: {
      icon: VENTURE_INFO.icon,
      abbr: VENTURE_INFO.abbr,
      date: VENTURE_INFO.startDate,
      level: 'expert'
    }
  },
  {
    id: 'strategic-planning',
    name: 'Strategic Planning',
    category: 'leadership',
    description: 'Developing and executing long-term technical strategies.',
    companyLevels: [
      { company: 'LSU Online & Continuing Education', level: 'expert' }
    ],
    level: 'expert',
    ventures: {
      icon: VENTURE_INFO.icon,
      abbr: VENTURE_INFO.abbr,
      date: '2023',
      level: 'expert'
    }
  },
  {
    id: 'product-strategy',
    name: 'Product Strategy',
    category: 'leadership',
    description: 'Aligning technical solutions with product vision and business goals.',
    companyLevels: [
      { company: 'LSU Online & Continuing Education', level: 'advanced', date: '2021' },
      { company: 'Unum - Baton Rouge', level: 'advanced' },
      { company: 'Amedisys, Inc - Baton Rouge', level: 'intermediate' }
    ],
    level: 'advanced'
  },

  // Technical Strategy Skills
  {
    id: 'tech-architecture',
    name: 'Technical Architecture',
    category: 'strategy',
    description: 'Designing and implementing enterprise-scale system architectures.',
    companyLevels: [
      { company: 'LSU Online & Continuing Education', level: 'expert', date: '2021' },
      { company: 'Unum - Baton Rouge', level: 'expert' },
      { company: 'Amedisys, Inc - Baton Rouge', level: 'advanced' }
    ],
    level: 'expert',
    ventures: {
      icon: VENTURE_INFO.icon,
      abbr: VENTURE_INFO.abbr,
      date: '2024',
      level: 'expert'
    }
  },
  {
    id: 'devops',
    name: 'DevOps & CI/CD',
    category: 'strategy',
    description: 'Implementing modern DevOps practices and automation pipelines.',
    companyLevels: [
      { company: 'LSU Online & Continuing Education', level: 'expert', date: '2024' },
      { company: 'Amedisys, Inc - Baton Rouge', level: 'advanced' }
    ],
    level: 'expert',
    ventures: {
      icon: VENTURE_INFO.icon,
      abbr: VENTURE_INFO.abbr,
      date: '2020',
      level: 'expert'
    }
  },
  {
    id: 'agile-sdlc',
    name: 'Agile/Waterfall SDLC',
    category: 'strategy',
    description: 'Leading teams using various software development methodologies.',
    companyLevels: [
      { company: 'LSU Online & Continuing Education', level: 'expert' },
      { company: 'Unum - Baton Rouge', level: 'expert' },
      { company: 'BCBS LA', level: 'advanced' },
      { company: 'Amedisys, Inc - Baton Rouge', level: 'intermediate' }
    ],
    level: 'expert'
  },
  {
    id: 'system-scalability',
    name: 'System Scalability',
    category: 'strategy',
    description: 'Designing systems for performance and scale.',
    companyLevels: [
      { company: 'LSU Online & Continuing Education', level: 'expert', date: '2021' },
      { company: 'Unum - Baton Rouge', level: 'expert' },
      { company: 'Amedisys, Inc - Baton Rouge', level: 'advanced' }
    ],
    level: 'expert'
  },
  {
    id: 'enterprise-solutions',
    name: 'Enterprise Solutions',
    category: 'strategy',
    description: 'Building and maintaining large-scale enterprise applications.',
    companyLevels: [
      { company: 'LSU Online & Continuing Education', level: 'expert', date: '2021' },
      { company: 'Unum - Baton Rouge', level: 'advanced' },
      { company: 'Amedisys, Inc - Baton Rouge', level: 'advanced' }
    ],
    level: 'expert'
  },

  // Technical Skills
  {
    id: 'csharp-sql',
    name: 'C#, SQL',
    category: 'technical',
    description: 'Enterprise application development and database design.',
    companyLevels: [
      { company: 'LSU Online & Continuing Education', level: 'expert' },
      { company: 'Unum - Baton Rouge', level: 'expert' },
      { company: 'BCBS LA', level: 'expert' },
      { company: 'Amedisys, Inc - Baton Rouge', level: 'advanced' }
    ],
    level: 'expert',
    ventures: {
      icon: VENTURE_INFO.icon,
      abbr: VENTURE_INFO.abbr,
      date: '2020',
      level: 'expert'
    }
  },
  {
    id: 'web-tech',
    name: 'Web Technologies',
    category: 'technical',
    description: 'Modern web development using Angular, TypeScript, and responsive design.',
    companyLevels: [
      { company: 'LSU Online & Continuing Education', level: 'expert' },
      { company: 'Unum - Baton Rouge', level: 'advanced' }
    ],
    level: 'expert',
    ventures: {
      icon: VENTURE_INFO.icon,
      abbr: VENTURE_INFO.abbr,
      date: '2020',
      level: 'expert'
    }
  },
  {
    id: 'ai-ml',
    name: 'AI/ML Solutions',
    category: 'technical',
    description: 'Building custom AI solutions and educating teams on AI implementation.',
    companyLevels: [
      { company: 'LSU Online & Continuing Education', level: 'intermediate', date: '2023' }
    ],
    level: 'intermediate',
    ventures: {
      icon: VENTURE_INFO.icon,
      abbr: VENTURE_INFO.abbr,
      date: '2024',
      level: 'intermediate'
    }
  }
];

export const categoryColors = {
  leadership: 'bg-blue-50 border-blue-100',
  strategy: 'bg-purple-50 border-purple-100',
  technical: 'bg-green-50 border-green-100'
} as const; 