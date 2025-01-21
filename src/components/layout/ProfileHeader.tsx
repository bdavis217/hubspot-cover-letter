import * as React from 'react';
import { Mail, Building2, Linkedin, Github } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import profilePic from '../../assets/images/profile.jpg';

export function ProfileHeader() {
  return (
    <div className="bg-white border-b border-[#cbd6e2]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-start gap-6">
          {/* Avatar */}
          <Avatar className="h-20 w-20 ring-2 ring-[#cbd6e2] ring-offset-2">
            <AvatarImage src={profilePic} alt="Brian Davis" />
            <AvatarFallback className="bg-[#f5f8fa] text-[#516f90]">BD</AvatarFallback>
          </Avatar>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-[#33475b]">Brian Davis</h1>
                <p className="text-[#516f90]">Executive Director, Strategic & Academic Technology</p>
                <p className="text-sm text-[#516f90]">LSU Online & Continuing Education</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm px-3 py-1 rounded-full bg-[#d5f7f0] text-[#00a4bd]">
                  Last Activity: Today
                </span>
                <span className="text-sm px-3 py-1 rounded-full bg-[#d5f7f0] text-[#00a4bd]">
                  Profile Status: Active
                </span>
              </div>
            </div>

            {/* Contact Links */}
            <div className="mt-4 flex items-center gap-6">
              <a 
                href="mailto:bdavis217@gmail.com"
                className="flex items-center gap-2 text-sm text-[#00a4bd] hover:text-[#0097ad] transition-colors"
              >
                <Mail className="h-4 w-4" />
                bdavis217@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/brianelliottdavis/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#00a4bd] hover:text-[#0097ad] transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
              <a 
                href="https://github.com/bdavis217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#00a4bd] hover:text-[#0097ad] transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub Profile
              </a>
              <span className="flex items-center gap-2 text-sm text-[#516f90]">
                <Building2 className="h-4 w-4" />
                20+ Years Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 