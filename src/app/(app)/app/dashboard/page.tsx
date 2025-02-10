import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
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
]

export default function DashboardPage() {
	return (
		<main className="min-h-screen flex flex-col max-h-screen w-full">
			<header className=" px-8 py-4 border-b border-[#E0E4EA] flex items-center h-20">
				<h1 className="font-bold text-2xl ">All notes</h1>
				<div className="ml-auto flex items-center gap-4">
					<Input
						placeholder="Search by title, content, or tags…"
						className="w-80"
					/>
					<Settings className="ml-auto" />
				</div>
			</header>
			<section className="flex flex-row flex-1 overflow-auto">
				{/* NOTES LIST */}
				<section className="basis-72  border-[#E0E4EA] border-r px-5  bg-white overflow-auto  ">
					<div className="mb-4 sticky top-0 bg-white pt-7">
						<Button className="w-full mb-4 ">Create new note</Button>
					</div>
					<section>
						<ul className="space-y-2">
							{notes.map((note) => (
								<>
									<li
										key={Math.random()}
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

				{/* NOTE DETAILS */}
				<section className="flex-1">data here</section>

				{/* NOTE OPTIONS */}
				<section className="basis-72 bg-white px-5 py-7 space-y-4">
					<Button variant={'outline'} className="w-full">
						Archive Note
					</Button>
					<Button variant={'outline'} className="w-full">
						Delete Note
					</Button>
				</section>
			</section>
		</main>
	)
}
