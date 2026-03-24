'use client';

import { useSidebar } from '@/contexts/SidebarProvider';
import { Menu } from 'lucide-react';

import { HEADER_HEIGHT } from '@/config/ui';

export default function AppHeader() {
  const { toggle } = useSidebar();
  return (
    <div className="flex items-center justify-between px-4 py-2" style={{ height: HEADER_HEIGHT }}>
      <div className="flex items-center gap-2">
        <button onClick={toggle} className="w-8 h-8 bg-primary rounded-full">
          <Menu />
        </button>
        <span className="text-lg font-bold">BaseHeader</span>
      </div>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#" className="text-sm font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-sm font-medium">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
