'use client'

import { useNoteContext } from '@/lib/hooks'
import { Button } from './ui/button'
import { Note } from '@prisma/client'
import { useSearchParams } from 'next/navigation'

type NoteListProps = {
	type?: 'archive' | 'active'
}

export default function NotesList({ type }: NoteListProps) {
	const searchParams = useSearchParams()
	const tag = searchParams.get('tag')

	const { notes, handleSetSelectedNoteId, handleActiveAddNoteMode } =
		useNoteContext()

	let currentNotes: Note[] = []

	switch (type) {
		case 'archive':
			currentNotes = notes.filter((note) => note.status === 'archived')
			break
		case 'active':
			currentNotes = notes.filter((note) => note.status === 'active')
			break
		default:
			currentNotes = notes
			break
	}

	if (tag) {
		currentNotes = currentNotes.filter((note) =>
			note.tags.toLowerCase().includes(tag.toLowerCase())
		)
	}

	return (
		<section className="basis-72  border-[#E0E4EA] border-r px-5  bg-white overflow-auto  ">
			<div className="mb-4 sticky top-0 bg-white pt-7">
				<Button className="w-full mb-4 " onClick={handleActiveAddNoteMode}>
					Create new note
				</Button>
				{type === 'archive' && (
					<p className="text-sm text-[#6B7280] mb-4">
						All your archived notes are stored here. You can restore or delete
						them anytime.
					</p>
				)}

				{currentNotes.length === 0 && type === 'archive' ? (
					<EmptyListInfo>
						<p>
							No notes have been archived yet. Move notes here for safekeeping,
							or
							<span className="underline">{` `}create a new note</span>.
						</p>
					</EmptyListInfo>
				) : currentNotes.length === 0 ? (
					<EmptyListInfo>
						<p>
							You don’t have any notes yet. Start a new note to capture your
							thoughts and ideas.
						</p>
					</EmptyListInfo>
				) : null}
			</div>
			{currentNotes.length === 0 ? null : (
				<section>
					<ul className="space-y-2">
						{currentNotes.map((note) => (
							<li
								className=" hover:bg-[#F3F5F8] rounded-md hover:cursor-pointer transition duration-300"
								key={Math.random()}
							>
								<button
									onClick={() => handleSetSelectedNoteId(note.id)}
									className="text-left size-[100%] px-2 py-1"
								>
									<h3 className="font-semibold mb-3">{note.title}</h3>
									<div className="space-x-2 mb-3">
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
