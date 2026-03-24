import BaseHeader from '@/components/header/BaseHeader';
import AppHeader from '@/components/header/AppHeader';
import { SidebarProvider } from '@/contexts/SidebarProvider';
import BaseSidebar from '@/components/sidebar/BaseSidebar';
import AppSidebar from '@/components/sidebar/AppSidebar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <BaseHeader>
          <AppHeader />
        </BaseHeader>
        <div className="flex">
          <BaseSidebar>
            <AppSidebar />
          </BaseSidebar>
          {children}
        </div>
      </SidebarProvider>
    </>
  );
}
