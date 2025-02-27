'use client'

// import { Clock, Lightbulb, Tag } from 'lucide-react'
// import { Separator } from './ui/separator'
// import { Textarea } from './ui/textarea'
// import { Button } from './ui/button'
import { useNoteContext } from '@/lib/hooks'
// import { Note } from '@prisma/client'
// import React, { useEffect, useState } from 'react'
import NoteForm from './note-form'

export default function NoteDetails() {
	const { addNoteMode, selectedNote, handleEditSelectedNote } = useNoteContext()

	if (selectedNote) {
		return (
			<NoteWrapper>
				<NoteForm actionType="edit" />
			</NoteWrapper>
		)
	}

	return (
	
			{addNoteMode ? (
				<NoteWrapper>
					<NoteForm actionType="add" />
				</NoteWrapper>
			) : (
				<p>empty view</p>
			)}
	
}

// function EmptyNoteView() {
// 	return (
// 		<>
// 			<NoteDetailsTitle title="Enter a title" />
// 		</>
// 	)
// }

function NoteWrapper({ children }: { children: React.ReactNode }) {
	return <div className="flex-1 px-6 py-5 flex flex-col">{children}</div>
}

// function NoteDetailsContent({ content }: { content: string }) {
// 	const [currentContent, setCurrentContent] = useState(content)

// 	useEffect(() => {
// 		setCurrentContent(content)
// 	}, [content])

// 	return (
// 		<Textarea
// 			className="flex-1"
// 			id="content"
// 			name="content"
// 			spellCheck="false"
// 			value={currentContent}
// 			onChange={(e) => setCurrentContent(e.target.value)}
// 		/>
// 	)
// }

// function NoteDetailsTitle({ title }: { title: string }) {
// 	const { addNoteMode, selectedNote } = useNoteContext()
// 	const [currentTitle, setCurrentTitle] = useState()

// 	if (addNoteMode) {
// 		setCurrentTitle('Enter a title')
// 	}
// 	// useEffect(() => {
// 	// 	setCurrentTitle(selectedNote?.title)
// 	// }, [selectedNote?.title])

// 	return (
// 		<input
// 			id="title"
// 			name="title"
// 			value={selectedNote?.title}
// 			className="text-2xl font-bold w-full bg-inherit outline-none focus:ring-2 hover:ring-2 rounded-sm p-1 transition duration-300"
// 			// onChange={(e) => setCurrentTitle(e.target.value)}
// 		/>
// 	)
// }

// function NoteDetailsInfo({ note }: Props) {
// 	const [tags, setTags] = useState(note.tags)

// 	useEffect(() => {
// 		setTags(note.tags)
// 	}, [note])

// 	return (
// 		<section className="text-sm space-y-1 mt-4">
// 			<div className="flex items-center">
// 				<span className="flex min-w-28 h-7 items-center gap-x-2">
// 					<Tag size={16} />
// 					Tags
// 				</span>

// 				<input
// 					id="tags"
// 					name="tags"
// 					onChange={(e) => {
// 						setTags(e.target.value)
// 					}}
// 					value={tags}
// 					className="w-full bg-inherit p-1 focus:ring-2 hover:ring-2 rounded-sm transition duration-300"
// 				/>
// 			</div>
// 			<div className="flex items-center">
// 				<span className="flex min-w-28 h-7 items-center gap-x-2">
// 					<Clock size={16} />
// 					Last edited
// 				</span>
// 				<span className="p-1">
// 					{new Date(note.updatedAt).toLocaleDateString('en-GB', {
// 						day: 'numeric',
// 						month: 'short',
// 						year: 'numeric',
// 					})}
// 				</span>
// 			</div>
// 			{/* DELTE THIS AFTER RELEASE */}
// 			<div className="flex items-center">
// 				<span className="flex min-w-28 h-7 items-center gap-x-2">
// 					<Lightbulb size={16} />
// 					Status
// 				</span>
// 				<span className="p-1">{note.status}</span>
// 			</div>
// 		</section>
// 	)
// }

// function NoteDetailsActions() {
// 	return (
// 		<div className="flex gap-4">
// 			<Button type="submit">Save</Button>
// 			<Button variant="outline">Cancel</Button>
// 		</div>
// 	)
// }
