export type SkillCategory = 'leadership' | 'strategy' | 'technical';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  companies: string[];  // Will match company names from timeline
  level: 'expert' | 'advanced' | 'intermediate';
} 