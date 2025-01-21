import * as React from 'react';
import { Trophy, Award, Star, Heart, Medal, Youtube, Link, ExternalLink } from 'lucide-react';
import { Card } from '../components/ui/card';

interface AwardLink {
  url: string;
  label: string;
  icon?: typeof Youtube | typeof ExternalLink;
}

interface AwardItem {
  icon: typeof Trophy | typeof Award | typeof Star | typeof Heart | typeof Medal;
  title: string;
  year: string;
  description: string;
  links?: AwardLink[];
}

const awards: AwardItem[] = [
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
        icon: ExternalLink
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

export function AwardsView() {
  return (
    <div className="grid gap-6">
      {awards.map((award, index) => (
        <Card key={index} className="p-6 bg-white border-[#cbd6e2] hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-[#ffeae5] flex items-center justify-center flex-shrink-0">
              <award.icon className="h-6 w-6 text-[#ff7a59]" />
            </div>
            <div className="space-y-3 flex-1">
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-[#33475b]">{award.title}</h3>
                  <span className="text-sm text-[#516f90]">{award.year}</span>
                </div>
                <p className="mt-2 text-[#516f90]">{award.description}</p>
              </div>
              {award.links && (
                <div className="flex gap-4">
                  {award.links.map((link, linkIndex) => {
                    const Icon = link.icon || ExternalLink;
                    return (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[#00a4bd] hover:text-[#0097ad] transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default AwardsView; 