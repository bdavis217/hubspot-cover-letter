import { Skill } from '../types/career';

export const skills: Record<string, Skill> = {
  engLeadership: {
    id: 'engLeadership',
    name: 'Engineering Leadership',
    category: 'leadership',
    description: 'Leading and growing engineering teams'
  },
  techStrategy: {
    id: 'techStrategy',
    name: 'Technical Strategy',
    category: 'leadership',
    description: 'Defining and executing technical vision'
  },
  teamBuilding: {
    id: 'teamBuilding',
    name: 'Team Building',
    category: 'leadership',
    description: 'Building and developing high-performing teams'
  },
  architecture: {
    id: 'architecture',
    name: 'Software Architecture',
    category: 'technical',
    description: 'System design and architectural patterns'
  },
  clinicalSystems: {
    id: 'clinicalSystems',
    name: 'Clinical Systems',
    category: 'domain',
    description: 'Healthcare clinical systems expertise'
  },
  csharp: {
    id: 'csharp',
    name: 'C#',
    category: 'technical',
    description: '.NET development'
  },
  sql: {
    id: 'sql',
    name: 'SQL',
    category: 'technical',
    description: 'Database development and optimization'
  },
  regulatory: {
    id: 'regulatory',
    name: 'Regulatory Compliance',
    category: 'domain',
    description: 'Healthcare compliance requirements'
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    category: 'technical',
    description: 'Large-scale enterprise systems'
  }
}; 