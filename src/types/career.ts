import { Skill, SkillCategory } from './skills';
import { LucideIcon } from 'lucide-react';

export interface Achievement {
  id: string;
  description: string;
  impact?: string;
  skills: SkillUsage[];
}

export interface CareerPosition {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  type: 'position' | 'achievement' | 'recognition';
  description: string;
  achievements: Achievement[];
  skills: string[];
  logo?: string;
}

export interface SkillUsage {
  skillId: string;
  level: 'lead' | 'contributor';
}

export interface TimelineEntry {
  id: string;
  type: string;
  date: {
    start: string;
    end: string;
  };
  title: string;
  company: string;
  description: string | string[];
  achievements: Achievement[];
  skills: SkillUsage[];
  icon: any;
} 