'use client'

import { useNoteContext, useSearchContext } from '@/lib/hooks'
import { Button } from './ui/button'
import { Note } from '@prisma/client'
import { getSearchParams } from '@/lib/utils'

type NoteListProps = {
	type?: 'archive' | 'active'
}

export default function NotesList({ type }: NoteListProps) {
	const { searchQuery } = useSearchContext()
	const { notes, handleSetSelectedNoteId, handleActiveAddNoteMode } =
		useNoteContext()

	const selectedTag = getSearchParams('tag')

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
		<section className="basis-72  border-[#E0E4EA] border-r px-5  bg-white overflow-auto  ">
			<div className="mb-4 sticky top-0 bg-white pt-7">
				<Button className="w-full mb-4 " onClick={handleActiveAddNoteMode}>
					Create new note
				</Button>

				{type === 'archive' ? (
					<p className="text-sm text-[#6B7280] mb-4">
						All your archived notes are stored here. You can restore or delete
						them anytime.
					</p>
				) : selectedTag ? (
					<p className="text-sm text-[#6B7280] mb-4">
						All notes with the {selectedTag} tag are shown here.
					</p>
				) : null}

				{filteredNotes.length === 0 && (
					<EmptyListInfo>
						{searchQuery ? (
							<p>
								No notes match your search. Try a different keyword or create a
								new note.
							</p>
						) : type === 'active' ? (
							<p>
								You don’t have any notes yet. Start a new note to capture your
								thoughts and ideas.
							</p>
						) : type === 'archive' ? (
							<p>
								No notes have been archived yet. Move notes here for
								safekeeping, or{' '}
								<span className="underline">create a new note</span>.
							</p>
						) : null}
					</EmptyListInfo>
				)}
			</div>

			{filteredNotes.length === 0 ? null : (
				<section>
					<ul className="space-y-2">
						{filteredNotes.map((note) => (
							<li
								className=" hover:bg-[#F3F5F8] rounded-md hover:cursor-pointer transition duration-300"
								key={Math.random()}
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
												className="bg-[#E0E4EA] rounded-sm text-[12px] px-[6px] py-[2px]"
											>
												{tag.trim()}
											</span>
										))}
									</div>

									<p className="text-[12px]">
										{new Date(note.updatedAt).toLocaleDateString('en-GB', {
											day: 'numeric',
											month: 'short',
											year: 'numeric',
										})}
									</p>
								</button>
							</li>
						))}
					</ul>
				</section>
			)}
		</section>
	)
}

function EmptyListInfo({ children }: { children: React.ReactNode }) {
	return (
		<section className="bg-[#F3F5F8] border-[#E0E4EA] border-2 rounded-md p-2 tracking-tight">
			{children}
		</section>
	)
}
