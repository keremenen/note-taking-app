'use client'

import { Clock, Tag } from 'lucide-react'
import { Separator } from './ui/separator'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useNoteContext } from '@/lib/hooks'
import { Input } from './ui/input'

export default function NoteDetails() {
	const { selectedNote, addNoteMode } = useNoteContext()

	return (
		<section className="flex-1 px-6 py-5 flex flex-col">
			{addNoteMode ? (
				<EmptyNoteView />
			) : (
				<>
					<NoteDetailsTitle title={selectedNote!.title} />
					<NoteDetailsInfo note={selectedNote!} />
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

function EmptyNoteView() {
	return (
		<>
			<NoteDetailsTitle title="Enter a title" />
		</>
	)
}

function NoteDetailsTitle({ title }: { title: string }) {
	return (
		<input
			defaultValue={title}
			className="text-2xl font-bold w-full bg-inherit outline-none focus:ring-2 hover:ring-2 rounded-sm p-1 transition duration-300"
			onChange={() => {}}
		/>
	)
}

function NoteDetailsInfo({ note }: Props) {
	return (
		<section className="text-sm space-y-1 mt-4">
			<div className="flex items-center">
				<span className="flex min-w-28 h-7 items-center gap-x-2">
					<Tag size={16} />
					Tags
				</span>

				<span>{note?.tags}</span>
			</div>
			<div className="flex items-center">
				<span className="flex min-w-28 h-7 items-center gap-x-2">
					<Clock size={16} />
					Last edited
				</span>
				{/* <span>{note?.createdAt}</span> */}
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
