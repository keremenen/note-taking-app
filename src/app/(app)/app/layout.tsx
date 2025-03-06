import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import NoteContextProvider from '@/contexts/note-context-provider'
import SearchContextProvider from '@/contexts/search-context-provider'
import SettingsContextProvider from '@/contexts/settings-context-provider'
import prisma from '@/lib/db'

export default async function AppLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const data = await prisma.note.findMany()

	return (
		<>
			<SearchContextProvider>
				<NoteContextProvider data={data}>
					<SettingsContextProvider>
						<SidebarProvider>
							<AppSidebar />

							{children}
						</SidebarProvider>
					</SettingsContextProvider>
				</NoteContextProvider>
			</SearchContextProvider>
		</>
	)
}
