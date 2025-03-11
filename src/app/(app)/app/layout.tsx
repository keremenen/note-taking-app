import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import NoteContextProvider from '@/contexts/note-context-provider'
import SearchContextProvider from '@/contexts/search-context-provider'
import SettingsContextProvider from '@/contexts/settings-context-provider'
import { auth } from '@/lib/auth'
import prisma from '@/lib/db'
import { redirect } from 'next/navigation'

export default async function AppLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// const session = await auth()
	// if (!session?.user) {
	// 	redirect('/login')
	// }

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
