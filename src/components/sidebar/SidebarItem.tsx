import React from 'react';

interface SidebarItemProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function SidebarItem({ icon, children }: SidebarItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div>{icon}</div>
      <div>{children}</div>
    </div>
  );
}
