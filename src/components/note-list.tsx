import React from 'react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

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

export default function NotesList() {
	return (
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
	)
}
