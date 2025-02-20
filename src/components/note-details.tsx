'use client'

import { Clock, Tag } from 'lucide-react'
import { Separator } from './ui/separator'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useNoteContext } from '@/lib/hooks'
import { Note } from '@prisma/client'
import React, { useState } from 'react'
import { editNote } from '@/actions/actions'

export default function NoteDetails() {
	const { addNoteMode, selectedNote } = useNoteContext()

	return (
		<section className="flex-1 px-6 py-5 flex flex-col">
			{addNoteMode ? (
				<EmptyNoteView />
			) : (
				<>
					<form
						action={(formData) => editNote(selectedNote?.id, formData)}
						className="h-full flex flex-col"
					>
						<NoteDetailsTitle title={selectedNote!.title} />
						<NoteDetailsInfo note={selectedNote!} />
						<Separator className="my-4" />
						<Textarea className="flex-1" id="content" name="content" />
						<Separator className="my-4" />
						<NoteDetailsActions />
					</form>
				</>
			)}
		</section>
	)
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
	const [currentTitle, setCurrentTitle] = useState(title)
	return (
		<input
			id="title"
			name="title"
			value={currentTitle}
			className="text-2xl font-bold w-full bg-inherit outline-none focus:ring-2 hover:ring-2 rounded-sm p-1 transition duration-300"
			onChange={(e) => setCurrentTitle(e.target.value)}
		/>
	)
}

function NoteDetailsInfo({ note }: Props) {
	const [tags, setTags] = useState(note.tags)
	return (
		<section className="text-sm space-y-1 mt-4">
			<div className="flex items-center">
				<span className="flex min-w-28 h-7 items-center gap-x-2">
					<Tag size={16} />
					Tags
				</span>

				<input
					id="tags"
					name="tags"
					onChange={(e) => {
						setTags(e.target.value)
					}}
					value={tags}
					className="w-full bg-inherit p-1 focus:ring-2 hover:ring-2 rounded-sm transition duration-300"
				/>
			</div>
			<div className="flex items-center">
				<span className="flex min-w-28 h-7 items-center gap-x-2">
					<Clock size={16} />
					Last edited
				</span>
				<span className="p-1">
					{new Date(note.createdAt).toLocaleDateString('en-GB', {
						day: 'numeric',
						month: 'short',
						year: 'numeric',
					})}
				</span>
			</div>
		</section>
	)
}

function NoteDetailsActions() {
	return (
		<div className="flex gap-4">
			<Button type="submit">Save</Button>
			<Button variant="outline">Delete</Button>
		</div>
	)
}
