import * as React from 'react';
import { Users, LineChart, Target, Trophy, Award, Star, Heart, Medal, Youtube, Link as LinkIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { cn } from '../../lib/utils';
import { AwardCard } from './AwardCard';

interface Metric {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface Recognition {
  icon: React.ReactNode;
  title: string;
  date: string;
  description: string;
}

const metrics: Metric[] = [
  {
    icon: <Users className="h-4 w-4 text-blue-500" />,
    label: 'Teams Led',
    value: '5 Current'
  },
  {
    icon: <LineChart className="h-4 w-4 text-blue-500" />,
    label: 'Years Experience',
    value: '20+'
  },
  {
    icon: <Target className="h-4 w-4 text-blue-500" />,
    label: 'Projects Delivered',
    value: '50+'
  }
];

const awards = [
  {
    icon: Trophy,
    title: 'StartupBus National Director',
    year: '2022',
    description: 'Led national entrepreneurship and innovation program',
    links: [
      {
        url: 'https://www.youtube.com/watch?v=o0LFSjQSqms',
        label: 'Watch Video',
        icon: Youtube
      },
      {
        url: 'https://startupbus.com',
        label: 'Learn More',
        icon: LinkIcon
      }
    ]
  },
  {
    icon: Award,
    title: 'IT Leader of the Year Finalist',
    year: '2022',
    description: 'Recognition for technical leadership and innovation',
    links: [{
      url: 'https://events.bizzabo.com/374879',
      label: 'Event Details'
    }]
  },
  {
    icon: Star,
    title: 'NOLA Tech 30 Honoree',
    year: '2021',
    description: 'Named among top technology leaders in South Louisiana',
    links: [{
      url: 'https://nolavateblack.com/nola-tech-30-2021/',
      label: 'View Award'
    }]
  },
  {
    icon: Heart,
    title: 'Futures Fund Tech Academy Mentor',
    year: '2020',
    description: 'Mentoring next generation of technology leaders',
    links: [{
      url: 'https://www.thewallsproject.org/futures-fund',
      label: 'Program Details'
    }]
  },
  {
    icon: Medal,
    title: 'Joffrion Award Winner',
    year: '2009',
    description: 'This award recognizes people who have achieved the "most significant contributions" to the company.'
  }
];

export function MetricsAndAwards() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <Card className="bg-white border-[#cbd6e2]">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-[#33475b]">Key Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#f5f8fa] transition-colors"
            >
              <div className="h-10 w-10 rounded-full bg-[#e5f5f8] flex items-center justify-center">
                {React.cloneElement(metric.icon as React.ReactElement, {
                  className: "h-4 w-4 text-[#00a4bd]"
                })}
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#516f90]">{metric.label}</p>
                <p className="font-semibold text-[#33475b]">{metric.value}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Awards & Recognition */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Awards & Recognition</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {awards.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
} 