import { AppSidebar } from '@/components/app-sidebar'

import { SidebarProvider } from '@/components/ui/sidebar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				{/* TODO: SIDEBAR TRIGGER */}
				<div className="w-full max-h-screen min-h-screen flex flex-col">
					{children}
				</div>
			</SidebarProvider>
		</>
	)
}
