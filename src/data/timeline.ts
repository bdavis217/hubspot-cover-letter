import { TimelineEntry } from '../types/career';
import { skills } from './skills';

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
          { skillId: 'engLeadership', level: 'lead' },
          { skillId: 'teamBuilding', level: 'lead' }
        ]
      },
      {
        id: 'a2',
        description: 'Strategic oversight of core enterprise systems',
        impact: 'Ensuring alignment with business objectives',
        skills: [
          { skillId: 'techStrategy', level: 'lead' },
          { skillId: 'enterprise', level: 'lead' }
        ]
      },
      {
        id: 'a3',
        description: 'Implementing standardized processes for stability',
        impact: 'Improving system reliability and team efficiency',
        skills: [
          { skillId: 'techStrategy', level: 'lead' },
          { skillId: 'engLeadership', level: 'lead' }
        ]
      }
    ],
    skills: [
      { skillId: 'engLeadership', level: 'lead' },
      { skillId: 'techStrategy', level: 'lead' },
      { skillId: 'teamBuilding', level: 'lead' }
    ]
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
    description: 'Directed application development and technical strategy for business systems.',
    achievements: [
      {
        id: 'b1',
        description: 'Led enterprise architecture modernization',
        impact: 'Improved system reliability and reduced technical debt',
        skills: [{ skillId: 'architecture', level: 'lead' }]
      }
    ],
    skills: [{ skillId: 'architecture', level: 'lead' }]
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
        description: 'Managing project outcome of core product',
        impact: 'Ensured successful delivery and implementation',
        skills: [{ skillId: 'techStrategy', level: 'lead' }]
      }
    ],
    skills: [{ skillId: 'techStrategy', level: 'lead' }]
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
    description: 'Progressed from developer to development manager, leading technical initiatives and teams.',
    achievements: [
      {
        id: 'd1',
        description: 'Designed and developed custom software solutions, collaborating with cross-functional teams',
        impact: 'Delivered integrated healthcare solutions',
        skills: [{ skillId: 'architecture', level: 'contributor' }]
      }
    ],
    skills: [{ skillId: 'architecture', level: 'contributor' }]
  }
]; 