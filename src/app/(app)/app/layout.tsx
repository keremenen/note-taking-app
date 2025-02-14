import { AppSidebar } from '@/components/app-sidebar'

import { SidebarProvider } from '@/components/ui/sidebar'
import NoteContextProvider from '@/contexts/note-context-provider'

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NoteContextProvider>
				<SidebarProvider>
					<AppSidebar />

					{children}
				</SidebarProvider>
			</NoteContextProvider>
		</>
	)
}
