export interface Achievement {
  id: string;
  description: string;
  impact?: string;
  skills: string[];
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

export interface Skill {
  id: string;
  name: string;
  category: 'leadership' | 'technical' | 'domain' | 'soft';
  description?: string;
}

export interface SkillUsage {
  skillId: string;
  level?: 'lead' | 'contributor' | 'learning';
  context?: string;
}

export interface TimelineEntry {
  id: string;
  type: 'position' | 'achievement' | 'recognition';
  date: {
    start: string;
    end: string | 'Present';
  };
  title: string;
  company: string;
  location?: string;
  description: string;
  achievements: {
    id: string;
    description: string;
    impact?: string;
    skills: SkillUsage[];
  }[];
  skills: SkillUsage[];
} 