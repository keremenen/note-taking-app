'use client'

import { Clock, Tag } from 'lucide-react'
import { Separator } from './ui/separator'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useNoteContext } from '@/lib/hooks'

export default function NoteDetails() {
	const { selectedNote, addNoteMode } = useNoteContext()

	return (
		<section className="flex-1 px-6 py-5 flex flex-col">
			{!selectedNote ? (
				<p>no data</p>
			) : (
				<>
					<NoteDetailsTitle note={selectedNote} />
					<NoteDetailsInfo note={selectedNote} />
					<Separator className="my-4" />
					<Textarea className="flex-1" />
					<Separator className="my-4" />
					<NoteDetailsActions />
				</>
			)}
		</section>
	)
}

type Note = {
	id: number
	title: string
	tags: string[]
	createdAt: string
}

type Props = {
	note: Note
}

function NoteDetailsTitle({ note }: Props) {
	return <h2 className="text-2xl font-bold">{note.title}</h2>
}

function NoteDetailsInfo({ note }: Props) {
	return (
		<section className="text-sm space-y-1 mt-4">
			<div className="flex items-center">
				<span className="flex min-w-28 h-7 items-center gap-x-2">
					<Tag size={16} />
					Tags
				</span>
				{note?.tags.map((tag, i) => (
					<span key={i}>
						{tag}
						{i < note.tags.length - 1 && `, `}
					</span>
				))}
			</div>
			<div className="flex items-center">
				<span className="flex min-w-28 h-7 items-center gap-x-2">
					<Clock size={16} />
					Last edited
				</span>
				<span>{note?.createdAt}</span>
			</div>
		</section>
	)
}

function NoteDetailsActions() {
	return (
		<div className="flex gap-4">
			<Button>Save</Button>
			<Button variant="outline">Delete</Button>
		</div>
	)
}
