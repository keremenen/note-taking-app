'use client'

import { Clock, Lightbulb, Tag } from 'lucide-react'
import { Separator } from './ui/separator'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useNoteContext } from '@/lib/hooks'
import { Note } from '@prisma/client'
import React, { useEffect, useState } from 'react'

export default function NoteDetails() {
	const { addNoteMode, selectedNote, handleEditSelectedNote } = useNoteContext()

	return (
		<section className="flex-1 px-6 py-5 flex flex-col">
			{addNoteMode || !selectedNote ? (
				<EmptyNoteView />
			) : (
				<>
					<form
						action={(formData) =>
							handleEditSelectedNote(selectedNote?.id, formData)
						}
						className="h-full flex flex-col"
					>
						<NoteDetailsTitle title={selectedNote.title} />
						<NoteDetailsInfo note={selectedNote} />
						<Separator className="my-4" />
						<NoteDetailsContent content={selectedNote.content} />
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

function NoteDetailsContent({ content }: { content: string }) {
	const [currentContent, setCurrentContent] = useState(content)

	useEffect(() => {
		setCurrentContent(content)
	}, [content])

	return (
		<Textarea
			className="flex-1"
			id="content"
			name="content"
			spellCheck="false"
			value={currentContent}
			onChange={(e) => setCurrentContent(e.target.value)}
		/>
	)
}

function NoteDetailsTitle({ title }: { title: string }) {
	const [currentTitle, setCurrentTitle] = useState(title)

	useEffect(() => {
		setCurrentTitle(title)
	}, [title])

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

	useEffect(() => {
		setTags(note.tags)
	}, [note])

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
					{new Date(note.updatedAt).toLocaleDateString('en-GB', {
						day: 'numeric',
						month: 'short',
						year: 'numeric',
					})}
				</span>
			</div>
			{/* DELTE THIS AFTER RELEASE */}
			<div className="flex items-center">
				<span className="flex min-w-28 h-7 items-center gap-x-2">
					<Lightbulb size={16} />
					Status
				</span>
				<span className="p-1">{note.status}</span>
			</div>
		</section>
	)
}

function NoteDetailsActions() {
	return (
		<div className="flex gap-4">
			<Button type="submit">Save</Button>
			<Button variant="outline">Can</Button>
		</div>
	)
}
