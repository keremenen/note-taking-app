import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Clock, Settings, Tag } from 'lucide-react'

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
								<div key={Math.random()}>
									<li className="p-2 hover:bg-[#F3F5F8] rounded-md hover:cursor-pointer !m-0">
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
								</div>
							))}
						</ul>
					</section>
				</section>

				{/* NOTE DETAILS */}
				<section className="flex-1 px-6 py-5">
					<h2 className="text-2xl font-bold">React Performance Optimization</h2>
					<section className="text-sm space-y-1 mt-4">
						<div className="flex items-center">
							<span className="flex min-w-28 h-7 items-center gap-x-2">
								<Tag size={16} />
								Tags
							</span>
							<span>Dev, React</span>
						</div>
						<div className="flex items-center">
							<span className="flex min-w-28 h-7 items-center gap-x-2">
								<Clock size={16} />
								Last edited
							</span>
							<span>29 Oct 2024</span>
						</div>
					</section>
					<Separator className="my-4" />
					<Textarea className="" />
					<Separator className="my-4" />

					<div className="flex gap-x-2">
						<Button>Save note</Button>
						<Button variant={'outline'}>Cancel</Button>
					</div>
				</section>

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
