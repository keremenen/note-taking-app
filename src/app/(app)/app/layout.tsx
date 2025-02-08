import { AppSidebar } from '@/components/app-sidebar'
import { Input } from '@/components/ui/input'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Settings } from 'lucide-react'

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				{/* <SidebarTrigger /> */}
				<main className="w-full min-h-screen">
					<header className=" px-8 py-4 border-b border-[#E0E4EA] flex items-center">
						<h1 className="font-bold text-2xl ">All notes</h1>
						<div className="ml-auto flex items-center gap-4">
							<Input
								placeholder="Search by title, content, or tags…"
								className="w-80"
							/>
							<Settings className="ml-auto" />
						</div>
					</header>
					{children}
				</main>
			</SidebarProvider>
		</>
	)
}
