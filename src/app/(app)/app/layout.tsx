import { AppSidebar } from '@/components/app-sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { SidebarProvider } from '@/components/ui/sidebar'

import { Settings } from 'lucide-react'

const notes = [
	{
		id: 1,
		title: 'React Performance Optimization',
		tags: ['Dev', 'React'],
		createdAt: '29 Oct 2024',
	},
	{
		id: 2,
		title: 'Japan Travel Planning',
		tags: ['Travel', 'Personal'],
		createdAt: '28 Oct 2024',
	},
	{
		id: 3,
		title: 'Favorite Pasta Recipes',
		tags: ['Cooking', 'Recipes'],
		createdAt: '27 Oct 2024',
	},
	{
		id: 4,
		title: 'Weekly Workout Plan',
		tags: ['Dev', 'React'],
		createdAt: '29 Oct 2024',
	},
	{
		id: 5,
		title: 'Meal Prep Ideas',
		tags: ['Cooking', 'Health', 'Recipes'],
		createdAt: '29 Oct 2024',
	},
	{
		id: 6,
		title: 'Reading List',
		tags: ['Personal', 'Dev'],
		createdAt: '05 Oct 2024',
	},
	{
		id: 7,
		title: 'Fitness Goals 2025',
		tags: ['Fitness', 'Health', 'Personal'],
		createdAt: '22 Sep 2024',
	},
]

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				{/* <SidebarTrigger /> */}
				<main className="w-full min-h-screen flex flex-col">
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
					<section className="flex flex-1 flex-row">
						<section className="basis-72 h-auto border-[#E0E4EA] border-r p-5 bg-white">
							<Button className="w-full mb-4">Create new note</Button>
							<section>
								<ul className="space-y-2">
									{notes.map((note) => (
										<>
											<li
												key={note.id}
												className="p-2 hover:bg-[#F3F5F8] rounded-md hover:cursor-pointer !m-0"
											>
												<h3 className="font-semibold mb-3">{note.title}</h3>
												<div className="space-x-2 mb-3">
													{note.tags.map((tag) => (
														<span
															key={tag}
															className="bg-[#E0E4EA] rounded-sm text-[12px] px-[6px] py-[2px]"
														>
															{tag}
														</span>
													))}
												</div>

												<p className="text-[12px]">{note.createdAt}</p>
											</li>
											<Separator className="!m-1 " />
										</>
									))}
								</ul>
							</section>
						</section>
						{children}
					</section>
				</main>
			</SidebarProvider>
		</>
	)
}
