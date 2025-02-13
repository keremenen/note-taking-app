'use client'

import { Clock, Tag } from 'lucide-react'
import { Separator } from './ui/separator'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useNoteContext } from '@/lib/hooks'

export default function NoteDetails() {
	const { selectedNote } = useNoteContext()

	return (
		<section className="flex-1 px-6 py-5 flex flex-col">
			<h2 className="text-2xl font-bold">{selectedNote?.title}</h2>
			<section className="text-sm space-y-1 mt-4">
				<div className="flex items-center">
					<span className="flex min-w-28 h-7 items-center gap-x-2">
						<Tag size={16} />
						Tags
					</span>
					{selectedNote?.tags.map((tag, i) => (
						<span key={i}>
							{tag}
							{i < selectedNote.tags.length - 1 && `, `}
						</span>
					))}
				</div>
				<div className="flex items-center">
					<span className="flex min-w-28 h-7 items-center gap-x-2">
						<Clock size={16} />
						Last edited
					</span>
					<span>{selectedNote?.createdAt}</span>
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
