import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				<SidebarTrigger />
				<main className="w-full min-h-screen">{children}</main>
			</SidebarProvider>
		</>
	)
}
