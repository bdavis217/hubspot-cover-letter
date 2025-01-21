import * as React from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { cn } from '../../lib/utils';

export function Search() {
  return (
    <div className="relative">
      <SearchIcon 
        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#516f90]" 
      />
      <Input
        type="search"
        placeholder="Search (Press '/' to focus)"
        className={cn(
          "pl-9 pr-4 h-10",
          "bg-[#f5f8fa]",
          "border border-[#cbd6e2]",
          "text-[#33475b] placeholder:text-[#516f90]",
          "rounded-md",
          "focus-visible:ring-2 focus-visible:ring-[#00a4bd] focus-visible:ring-offset-0",
          "hover:border-[#00a4bd] transition-colors"
        )}
      />
    </div>
  );
} 