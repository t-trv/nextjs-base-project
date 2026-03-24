import SidebarItem from './SidebarItem';
import SidebarCategory from './SidebarCategory';

import { Camera, Home, Settings } from 'lucide-react';

export default function AppSidebar() {
  return (
    <div className="bg-gray-100 h-full p-4 space-y-4">
      <SidebarCategory title="Trang chủ">
        <SidebarItem icon={<Home size={16} />}>Tổng quan</SidebarItem>
      </SidebarCategory>
      <SidebarCategory title="Camera">
        <SidebarItem icon={<Camera size={16} />}>Camera 1</SidebarItem>
        <SidebarItem icon={<Camera size={16} />}>Camera 2</SidebarItem>
        <SidebarItem icon={<Camera size={16} />}>Camera 3</SidebarItem>
      </SidebarCategory>
      <SidebarCategory title="Cài đặt">
        <SidebarItem icon={<Settings size={16} />}>Cài đặt chung</SidebarItem>
        <SidebarItem icon={<Settings size={16} />}>Cài đặt camera</SidebarItem>
        <SidebarItem icon={<Settings size={16} />}>Cài đặt hệ thống</SidebarItem>
      </SidebarCategory>
    </div>
  );
}
