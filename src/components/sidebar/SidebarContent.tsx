// Use this component to wrap all of page content that used sidebar component

'use client';

import { useSidebar } from '@/contexts/SidebarProvider';
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from '@/config/ui';

export default function SidebarContent({ children }: { children: React.ReactNode }) {
  const { isOpen, isMobile } = useSidebar();

  return (
    <div
      style={{
        marginLeft: isMobile ? 0 : isOpen ? SIDEBAR_WIDTH : 0,
        transition: 'margin-left 0.3s',
      }}
    >
      {children}
    </div>
  );
}
