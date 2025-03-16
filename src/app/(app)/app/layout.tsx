import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import NoteContextProvider from '@/contexts/note-context-provider'
import SearchContextProvider from '@/contexts/search-context-provider'
import SettingsContextProvider from '@/contexts/settings-context-provider'
import UserCotnextProvider from '@/contexts/user-context-provider'
import prisma from '@/lib/db'
import auth from '@/middleware'
import { SessionProvider } from 'next-auth/react'

export default async function AppLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = await auth()

	if (!session) {
		return null
	}

	const user = await prisma.user.findUnique({
		where: {
			id: session.user?.id,
		},
	})

	const data = await prisma.note.findMany({
		where: {
			userId: session.user?.id,
		},
	})

	return (
		<>
			<SessionProvider>
				<UserCotnextProvider user={user}>
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
				</UserCotnextProvider>
			</SessionProvider>
		</>
	)
}
