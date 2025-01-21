import * as React from 'react';
import { ArrowUpRight, Youtube, Link as LinkIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface AwardLink {
  url: string;
  label: string;
  icon?: LucideIcon;
}

interface AwardCardProps {
  icon: LucideIcon;
  title: string;
  year: string;
  description?: string;
  links?: AwardLink[];
}

export function AwardCard({ icon: Icon, title, year, description, links }: AwardCardProps) {
  return (
    <div className="p-3 rounded-lg hover:bg-[#f5f8fa] transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="h-8 w-8 rounded-full bg-[#ffeae5] flex items-center justify-center flex-shrink-0">
          <Icon className="h-4 w-4 text-[#ff7a59]" />
        </div>
        <div className="space-y-1 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <h4 className="font-medium leading-none text-[#33475b]">{title}</h4>
            <span className="text-sm text-[#516f90] whitespace-nowrap">{year}</span>
          </div>
          {description && (
            <p className="text-sm text-[#516f90]">{description}</p>
          )}
          {links && links.length > 0 && (
            <div className="flex gap-3 mt-2">
              {links.map((link, index) => {
                const LinkIconComponent = link.icon || LinkIcon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#00a4bd] hover:text-[#0097ad] transition-colors inline-flex items-center gap-1"
                  >
                    <LinkIconComponent className="h-3 w-3" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 