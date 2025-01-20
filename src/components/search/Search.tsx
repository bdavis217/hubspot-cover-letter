import * as React from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '../ui/input';

export function Search() {
  return (
    <div className="relative w-96">
      <div className="relative">
        <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search (Press '/' to focus)"
          className="pl-8 w-full"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              e.currentTarget.blur();
            }
          }}
        />
      </div>
    </div>
  );
} 