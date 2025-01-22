import React from 'react';
import { Rocket } from 'lucide-react';

export type SkillCategory = 'leadership' | 'strategy' | 'technical';

export interface CompanySkillLevel {
  company: string;
  level: 'expert' | 'advanced' | 'intermediate';
  date?: string;  // Optional - will default to company timeline date if not specified
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  companyLevels: CompanySkillLevel[];
  level: 'expert' | 'advanced' | 'intermediate';  // Highest achieved level
  ventures?: {
    icon: typeof Rocket;
    abbr: string;  // e.g., "IV" for Independent Ventures
    date: string;  // e.g., "2021"
    level: 'expert' | 'advanced' | 'intermediate';
  };
} 