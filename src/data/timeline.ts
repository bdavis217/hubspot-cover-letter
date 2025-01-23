import { TimelineEntry } from '../types/career';
import { skills } from './skills';
import { Position } from '../types/timeline';
import { GraduationCap, Shield, Heart, Building2, Rocket } from 'lucide-react';

export const companyIcons = {
  'LSU Online & Continuing Education': GraduationCap,
  'BCBS LA': Shield,
  'Amedisys, Inc - Baton Rouge': Heart,
  'Unum - Baton Rouge': Building2,
} as const;

export const timelineData: TimelineEntry[] = [
  {
    id: '1',
    type: 'position',
    date: {
      start: '2024-08',
      end: 'Present'
    },
    title: 'Executive Director, Strategic & Academic Technology',
    company: 'LSU Online & Continuing Education',
    description: 'Leading strategic technology initiatives and engineering teams across the organization.',
    achievements: [
      {
        id: 'a1',
        description: 'Leading 5 engineering teams and infrastructure team',
        impact: 'Driving technical excellence and team growth',
        skills: [
          { skillId: 'eng-leadership', level: 'lead' },
          { skillId: 'team-building', level: 'lead' }
        ]
      },
      {
        id: 'a2',
        description: 'Strategic oversight of core enterprise systems',
        impact: 'Ensuring alignment with business objectives',
        skills: [
          { skillId: 'tech-architecture', level: 'lead' },
          { skillId: 'enterprise-solutions', level: 'lead' }
        ]
      },
      {
        id: 'a3',
        description: 'Implementing standardized processes for stability',
        impact: 'Improving system reliability and team efficiency',
        skills: [
          { skillId: 'tech-architecture', level: 'lead' },
          { skillId: 'eng-leadership', level: 'lead' }
        ]
      }
    ],
    skills: [
      { skillId: 'eng-leadership', level: 'lead' },
      { skillId: 'tech-architecture', level: 'lead' },
      { skillId: 'team-building', level: 'lead' }
    ],
    icon: GraduationCap,
  },
  {
    id: '2',
    type: 'position',
    date: {
      start: '2021-06',
      end: '2024-08'
    },
    title: 'Apps Dev Director, Business Technology',
    company: 'LSU Online & Continuing Education',
    description: 'Directed application development and technical strategy.',
    achievements: [
      {
        id: 'b1',
        description: 'Led enterprise architecture modernization',
        impact: 'Improved system reliability',
        skills: [{ skillId: 'architecture', level: 'lead' }]
      },
      {
        id: 'b2',
        description: 'Improved system reliability',
        impact: 'Enhanced system performance',
        skills: [{ skillId: 'architecture', level: 'lead' }]
      },
      {
        id: 'b3',
        description: 'Reduced technical debt',
        impact: 'Streamlined maintenance and updates',
        skills: [{ skillId: 'architecture', level: 'lead' }]
      }
    ],
    skills: [{ skillId: 'architecture', level: 'lead' }],
    icon: GraduationCap,
  },
  {
    id: '3',
    type: 'position',
    date: {
      start: '2017-12',
      end: '2019-03'
    },
    title: 'Apps Architect, Manager of Technical Business Solutions',
    company: 'BCBS LA',
    description: 'Led technical strategy and implementation of business solutions.',
    achievements: [
      {
        id: 'c1',
        description: 'Led technical strategy and implementation',
        impact: 'Established architectural direction',
        skills: [{ skillId: 'tech-architecture', level: 'lead' }]
      },
      {
        id: 'c2',
        description: 'Managing project outcome of core product',
        impact: 'Ensured successful delivery',
        skills: [{ skillId: 'tech-architecture', level: 'lead' }]
      },
      {
        id: 'c3',
        description: 'Ensured successful delivery and implementation',
        impact: 'Improved business outcomes',
        skills: [{ skillId: 'tech-architecture', level: 'lead' }]
      }
    ],
    skills: [{ skillId: 'tech-architecture', level: 'lead' }],
    icon: Shield,
  },
  {
    id: '4',
    type: 'position',
    date: {
      start: '2003-12',
      end: '2015-08'
    },
    title: 'Software Developer → Development Manager',
    company: 'Amedisys, Inc - Baton Rouge',
    description: 'Progressed from developer to development manager.',
    achievements: [
      {
        id: 'd1',
        description: 'Progressed from developer to development manager',
        impact: 'Career growth and expanded responsibilities',
        skills: [{ skillId: 'architecture', level: 'contributor' }]
      },
      {
        id: 'd2',
        description: 'Led technical initiatives and teams',
        impact: 'Improved team performance and delivery',
        skills: [{ skillId: 'architecture', level: 'contributor' }]
      },
      {
        id: 'd3',
        description: 'Designed and developed custom software solutions',
        impact: 'Delivered integrated healthcare solutions',
        skills: [{ skillId: 'architecture', level: 'contributor' }]
      }
    ],
    skills: [{ skillId: 'architecture', level: 'contributor' }],
    icon: Heart,
  },
  {
    id: '5',
    type: 'position',
    date: {
      start: '2019-03',
      end: '2021-06'
    },
    title: 'IT Delivery Manager',
    company: 'Unum - Baton Rouge',
    description: 'Led and managed agile teams, overseeing software delivery.',
    achievements: [
      {
        id: 'e1',
        description: 'Led and managed two agile teams (one fully remote), overseeing software delivery and professional development',
        impact: 'Improved delivery efficiency',
        skills: [
          { skillId: 'eng-leadership', level: 'lead' },
          { skillId: 'team-building', level: 'lead' }
        ]
      },
      {
        id: 'e2',
        description: 'Coordinated cross-functional teams of Engineers, QA Staff, and Business Analysts to drive innovation',
        impact: 'Enhanced team collaboration',
        skills: [
          { skillId: 'eng-leadership', level: 'lead' },
          { skillId: 'team-building', level: 'lead' }
        ]
      },
      {
        id: 'e3',
        description: 'Promoted and implemented DevOps, Scrum, and Software Engineering best practices',
        impact: 'Improved development processes',
        skills: [
          { skillId: 'eng-leadership', level: 'lead' },
          { skillId: 'team-building', level: 'lead' }
        ]
      }
    ],
    skills: [
      { skillId: 'eng-leadership', level: 'lead' },
      { skillId: 'team-building', level: 'lead' }
    ],
    icon: Building2
  }
];

export const positions: Position[] = [
  {
    id: 'lsu-director',
    title: 'Executive Director, Strategic & Academic Technology',
    company: 'LSU Online & Continuing Education',
    dateRange: 'Aug 2024 - Present',
    description: [
      'Leading 5 engineering teams and infrastructure team',
      'Strategic oversight of core enterprise systems',
      'Implementing standardized processes for stability'
    ],
    skills: ['Engineering Leadership', 'Technical Strategy', 'Team Building']
  },
  {
    id: 'lsu-apps-director',
    title: 'Apps Dev Director, Business Technology',
    company: 'LSU Online & Continuing Education',
    dateRange: 'Jun 2021 - Aug 2024',
    description: [
      'Led enterprise architecture modernization',
    ],
    skills: ['Enterprise Architecture', 'Technical Leadership', 'System Modernization']
  },
  {
    id: 'bcbs-architect',
    title: 'Apps Architect, Manager of Technical Business Solutions',
    company: 'BCBS LA',
    dateRange: 'Dec 2017 - Mar 2019',
    description: [
      'Led technical strategy and implementation',
      'Managing project outcome of core product',
      'Ensured successful delivery and implementation'
    ],
    skills: ['Technical Strategy', 'Project Management', 'Solution Architecture']
  },
  {
    id: 'amedisys-manager',
    title: 'Software Developer → Development Manager',
    company: 'Amedisys, Inc - Baton Rouge',
    dateRange: 'Dec 2003 - Aug 2015',
    description: [
      'Progressed from developer to development manager',
      'Led technical initiatives and teams',
      'Designed and developed custom software solutions'
    ],
    skills: ['Software Development', 'Team Leadership', 'Healthcare Solutions']
  },
  {
    id: 'unum-manager',
    title: 'IT Delivery Manager',
    company: 'Unum - Baton Rouge',
    dateRange: 'Mar 2019 - Jun 2021',
    description: [
      'Led and managed two agile teams (one fully remote), overseeing software delivery and professional development',
      'Coordinated cross-functional teams of Engineers, QA Staff, and Business Analysts to drive innovation',
      'Promoted and implemented DevOps, Scrum, and Software Engineering best practices'
    ],
    skills: ['Agile Leadership', 'DevOps', 'Cross-functional Team Management']
  }
];

export const venturesData: TimelineEntry = {
  id: 'ventures',
  type: 'position',
  date: {
    start: '2021',
    end: 'Present'
  },
  title: 'Independent Technology Ventures',
  company: 'Independent Ventures',
  description: 'Building and consulting on technology solutions.',
  achievements: [
    {
      id: 'v1',
      description: 'Consulting on enterprise architecture and technical strategy',
      impact: 'Helping organizations modernize their technology stack',
      skills: [
        { skillId: 'tech-architecture', level: 'lead' },
        { skillId: 'strategic-planning', level: 'lead' }
      ]
    }
    // Add more achievements as needed
  ],
  skills: [
    { skillId: 'tech-architecture', level: 'lead' },
    { skillId: 'strategic-planning', level: 'lead' }
  ],
  icon: Rocket
}; 