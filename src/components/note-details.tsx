import { Clock, Tag } from 'lucide-react'
import React from 'react'
import { Separator } from './ui/separator'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export default function NoteDetails() {
	return (
		<section className="flex-1 px-6 py-5 flex flex-col">
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
			<Textarea className="flex-1" />
			<Separator className="my-4" />

			<div className="flex gap-x-2 mt-auto">
				<Button>Save note</Button>
				<Button variant={'outline'}>Cancel</Button>
			</div>
		</section>
	)
}
