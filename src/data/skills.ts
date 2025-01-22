import { Skill } from '../types/skills';

export const skills: Skill[] = [
  // Leadership Skills
  {
    id: 'eng-leadership',
    name: 'Engineering Leadership',
    category: 'leadership',
    description: 'Leading and mentoring engineering teams, fostering growth and innovation.',
    companies: ['LSU Online & Continuing Education', 'Unum - Baton Rouge'],
    level: 'expert'
  },
  {
    id: 'team-building',
    name: 'Team Building',
    category: 'leadership',
    description: 'Building and developing high-performing engineering teams.',
    companies: ['LSU Online & Continuing Education', 'BCBS LA'],
    level: 'expert'
  },
  {
    id: 'change-management',
    name: 'Change Management',
    category: 'leadership',
    description: 'Leading organizational and technical transformation initiatives.',
    companies: ['LSU Online & Continuing Education'],
    level: 'expert'
  },
  {
    id: 'strategic-planning',
    name: 'Strategic Planning',
    category: 'leadership',
    description: 'Developing and executing long-term technical strategies.',
    companies: ['LSU Online & Continuing Education'],
    level: 'expert'
  },
  {
    id: 'product-strategy',
    name: 'Product Strategy',
    category: 'leadership',
    description: 'Aligning technical solutions with product vision and business goals.',
    companies: ['LSU Online & Continuing Education', 'BCBS LA'],
    level: 'advanced'
  },

  // Technical Strategy Skills
  {
    id: 'tech-architecture',
    name: 'Technical Architecture',
    category: 'strategy',
    description: 'Designing and implementing enterprise-scale system architectures.',
    companies: ['LSU Online & Continuing Education', 'BCBS LA'],
    level: 'expert'
  },
  {
    id: 'devops',
    name: 'DevOps & CI/CD',
    category: 'strategy',
    description: 'Implementing modern DevOps practices and automation pipelines.',
    companies: ['LSU Online & Continuing Education', 'Unum - Baton Rouge'],
    level: 'advanced'
  },
  {
    id: 'agile-sdlc',
    name: 'Agile/Waterfall SDLC',
    category: 'strategy',
    description: 'Leading teams using various software development methodologies.',
    companies: ['LSU Online & Continuing Education', 'Unum - Baton Rouge'],
    level: 'expert'
  },
  {
    id: 'system-scalability',
    name: 'System Scalability',
    category: 'strategy',
    description: 'Designing systems for performance and scale.',
    companies: ['LSU Online & Continuing Education'],
    level: 'advanced'
  },
  {
    id: 'enterprise-solutions',
    name: 'Enterprise Solutions',
    category: 'strategy',
    description: 'Building and maintaining large-scale enterprise applications.',
    companies: ['LSU Online & Continuing Education', 'BCBS LA'],
    level: 'expert'
  },

  // Technical Skills
  {
    id: 'csharp-sql',
    name: 'C#, SQL',
    category: 'technical',
    description: 'Enterprise application development and database design.',
    companies: ['LSU Online & Continuing Education', 'BCBS LA', 'Amedisys, Inc - Baton Rouge'],
    level: 'expert'
  },
  {
    id: 'angular',
    name: 'Angular',
    category: 'technical',
    description: 'Frontend development using Angular framework.',
    companies: ['LSU Online & Continuing Education', 'Unum - Baton Rouge'],
    level: 'advanced'
  },
  {
    id: 'typescript',
    name: 'TypeScript/JavaScript',
    category: 'technical',
    description: 'Modern web development using TypeScript and JavaScript.',
    companies: ['LSU Online & Continuing Education'],
    level: 'advanced'
  },
  {
    id: 'html-css',
    name: 'HTML/CSS',
    category: 'technical',
    description: 'Frontend development and responsive design.',
    companies: ['LSU Online & Continuing Education'],
    level: 'expert'
  },
  {
    id: 'ai-ml',
    name: 'AI/ML Solutions',
    category: 'technical',
    description: 'Implementing AI and machine learning solutions.',
    companies: ['LSU Online & Continuing Education'],
    level: 'intermediate'
  }
];

export const categoryColors = {
  leadership: 'bg-blue-50 border-blue-100',
  strategy: 'bg-purple-50 border-purple-100',
  technical: 'bg-green-50 border-green-100'
} as const; 