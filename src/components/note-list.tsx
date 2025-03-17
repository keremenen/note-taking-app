'use client'

import { useNoteContext, useSearchContext } from '@/lib/hooks'
import { Button } from './ui/button'
import { Note } from '@prisma/client'
import { useSearchParams } from 'next/navigation'

type NoteListProps = {
	type?: 'archive' | 'active'
}

export default function NotesList({ type }: NoteListProps) {
	const { searchQuery } = useSearchContext()
	const { notes, handleActiveAddNoteMode } = useNoteContext()

	const searchParams = useSearchParams()
	const selectedTag = searchParams.get('tag')

	let filteredNotes: Note[] = []

	// Filter notes based on type
	switch (type) {
		case 'archive':
			filteredNotes = notes.filter((note) => note.status === 'archived')
			break
		default:
			filteredNotes = notes.filter((note) => note.status === 'active')
			break
	}

	// Filter notes based on search query
	if (searchQuery) {
		filteredNotes = filteredNotes.filter(
			(note) =>
				// If note title, content or tag includes the search query
				note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
				note.tags.toLowerCase().includes(searchQuery.toLowerCase())
		)
	}

	// Filter notes based on selected tag
	if (selectedTag) {
		filteredNotes = filteredNotes.filter((note) =>
			note.tags.toLowerCase().includes(selectedTag.toLowerCase())
		)
	}

	return (
		<section className="basis-72  border-[#E0E4EA] border-r px-5 dark:bg-neutral-950 dark:border-neutral-800 bg-white overflow-auto dark:text-neural-0">
			<section className="mb-4 sticky top-0  pt-7 ">
				<Button className="w-full mb-4 " onClick={handleActiveAddNoteMode}>
					Create new note
				</Button>

				{type === 'archive' ? (
					<NoteListAdditionalInfo>
						All your archived notes are stored here. You can restore or delete
						them anytime.
					</NoteListAdditionalInfo>
				) : selectedTag ? (
					<NoteListAdditionalInfo>
						All notes with the {selectedTag} tag are shown here.
					</NoteListAdditionalInfo>
				) : null}

				{filteredNotes.length === 0 && <EmptyListInfo type={type} />}
			</section>

			<section>
				<ul className="space-y-2">
					{filteredNotes.map((note) => (
						<SingleNoteSummary key={note.id} note={note} />
					))}
				</ul>
			</section>
		</section>
	)
}

function SingleNoteSummary({ note }: { note: Note }) {
	const { handleSetSelectedNoteId } = useNoteContext()

	return (
		<li
			className="hover:bg-[#F3F5F8] dark:hover:bg-neutral-800 rounded-md hover:cursor-pointer transition duration-300 dark:text-neutral-0"
			key={note.id}
		>
			<button
				onClick={() => handleSetSelectedNoteId(note.id)}
				className="text-left size-[100%] px-2 py-1"
			>
				<h3 className="font-semibold mb-3">{note.title}</h3>
				<div className="mb-3 flex gap-x-3 gap-y-2 flex-wrap">
					{note.tags.split(',').map((tag) => (
						<span
							key={Math.random()}
							className="bg-neutral200 text-neutral-950 dark:bg- rounded-sm text-[12px] px-[6px] py-[2px] dark:bg-neutral-700 dark:text-neutral-0"
						>
							{tag.trim()}
						</span>
					))}
				</div>

				<p className="text-[12px] dark:text-neutral-200">
					{new Date(note.updatedAt).toLocaleDateString('en-GB', {
						day: 'numeric',
						month: 'short',
						year: 'numeric',
					})}
				</p>
			</button>
		</li>
	)
}

function EmptyListInfo({ type }: { type?: 'archive' | 'active' }) {
	const { searchQuery } = useSearchContext()
	const message = searchQuery
		? 'No notes match your search. Try a different keyword or create a new note.'
		: type === 'active'
		? 'You don’t have any notes yet. Start a new note to capture your thoughts and ideas.'
		: type === 'archive'
		? 'No notes have been archived yet. Move notes here for safekeeping, or create a new note.'
		: null

	return message ? (
		<section className="bg-[#F3F5F8] border-[#E0E4EA] border-2 rounded-md px-2 py-1 mt-4 text-sm tracking-tight">
			<p>{message}</p>
		</section>
	) : null
}

function NoteListAdditionalInfo({ children }: { children: string | string[] }) {
	return (
		<section className="text-sm text-[#6B7280]">
			<p>{children}</p>
		</section>
	)
}
