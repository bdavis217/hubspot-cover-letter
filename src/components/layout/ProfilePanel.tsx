import { Mail, Building2, Phone, Calendar, Link2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Button } from '../../components/ui/button';
import { Separator } from '../ui/separator';

export function ProfilePanel() {
  return (
    <div className="p-6 space-y-6">
      {/* Profile Header */}
      <div className="flex flex-col items-center">
        <Avatar className="h-24 w-24 mb-4 ring-2 ring-border ring-offset-2">
          <AvatarFallback className="bg-muted text-muted-foreground">BD</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-semibold">Brian Davis</h2>
        <p className="text-sm text-muted-foreground">Engineering Leader</p>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-6 gap-2">
        <Button variant="outline" size="sm" className="flex flex-col items-center p-2 h-auto">
          <Mail className="h-4 w-4 mb-1" />
          <span className="text-xs">Note</span>
        </Button>
        <Button variant="outline" size="sm" className="flex flex-col items-center p-2 h-auto">
          <Phone className="h-4 w-4 mb-1" />
          <span className="text-xs">Call</span>
        </Button>
        <Button variant="outline" size="sm" className="flex flex-col items-center p-2 h-auto">
          <Calendar className="h-4 w-4 mb-1" />
          <span className="text-xs">Log</span>
        </Button>
        <Button variant="outline" size="sm" className="flex flex-col items-center p-2 h-auto">
          <Link2 className="h-4 w-4 mb-1" />
          <span className="text-xs">Task</span>
        </Button>
        <Button variant="outline" size="sm" className="flex flex-col items-center p-2 h-auto col-span-2">
          <Mail className="h-4 w-4 mb-1" />
          <span className="text-xs">Meet</span>
        </Button>
      </div>

      <Separator />

      {/* Contact Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <a href="mailto:bdavis217@gmail.com" className="text-primary hover:underline">
            bdavis217@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Building2 className="h-4 w-4 text-muted-foreground" />
          <span>20+ Years Experience</span>
        </div>
      </div>

      <Separator />

      {/* Skills */}
      <div>
        <h3 className="text-sm font-semibold mb-3">Key Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'Engineering Leadership',
            'Team Building',
            'Technical Strategy',
            'AI/ML'
          ].map((skill) => (
            <div
              key={skill}
              className="px-2.5 py-1.5 bg-secondary hover:bg-secondary/80 
                         text-secondary-foreground rounded-md text-xs transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 