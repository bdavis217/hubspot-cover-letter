import { Users, Clock, Building2, Code2 } from 'lucide-react';

export interface Metric {
  id: string;
  icon: typeof Users;
  title: string;
  value: string;
  subtitle: string;
  description: string;
}

export const metrics: Metric[] = [
  {
    id: 'engineering-teams',
    icon: Users,
    title: 'Engineering Teams',
    value: '5',
    subtitle: 'Current',
    description: 'Leading engineering and infrastructure teams'
  },
  {
    id: 'tech-leadership',
    icon: Clock,
    title: 'Technology Leadership',
    value: '20+',
    subtitle: 'Years',
    description: 'Engineering and architecture expertise'
  },
  {
    id: 'industries',
    icon: Building2,
    title: 'Industries',
    value: '3',
    subtitle: '',
    description: 'Education, Insurance, Healthcare'
  },
  {
    id: 'enterprise-systems',
    icon: Code2,
    title: 'Enterprise Systems',
    value: '3+',
    subtitle: 'Core',
    description: 'Technical oversight and modernization'
  }
]; 