import * as React from 'react';
import { Users, LineChart, Target, BarChart } from 'lucide-react';
import { Card } from '../components/ui/card';

const metrics = [
  {
    icon: Users,
    label: 'Teams Led',
    value: '5',
    subValue: 'Current',
    description: 'Leading multiple engineering and product teams'
  },
  {
    icon: LineChart,
    label: 'Years Experience',
    value: '20+',
    description: 'Professional software development and leadership'
  },
  {
    icon: Target,
    label: 'Projects Delivered',
    value: '50+',
    description: 'Enterprise solutions and digital transformations'
  },
  {
    icon: BarChart,
    label: 'Team Size',
    value: '25+',
    description: 'Direct and indirect reports across teams'
  }
];

export function MetricsView() {
  return (
    <>
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-white border-[#cbd6e2] hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-[#e5f5f8] flex items-center justify-center flex-shrink-0">
                <metric.icon className="h-6 w-6 text-[#00a4bd]" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-[#516f90]">{metric.label}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-semibold text-[#33475b]">{metric.value}</p>
                  {metric.subValue && (
                    <p className="text-lg text-[#516f90]">{metric.subValue}</p>
                  )}
                </div>
                <p className="text-sm text-[#516f90]">{metric.description}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}

export default MetricsView; 