'use client'
import { usePathname } from 'next/navigation'
import NoteButton from './note-button'
import { useNoteContext } from '@/lib/hooks'

export default function NoteOptions() {
	const pathname = usePathname()
	const isArchive = pathname.includes('archive')
	const { selectedNote } = useNoteContext()

	return (
		<>
			{selectedNote ? (
				<section className="basis-72 bg-neutral-0 dark:bg-neutral-950 px-5 py-7 space-y-4 border-[#E0E4EA] dark:border-neutral-800 border-l">
					{isArchive ? (
						<NoteButton actionType="restore">Restore</NoteButton>
					) : (
						<NoteButton actionType="archive">Archive Note</NoteButton>
					)}
					<NoteButton actionType="delete">Delete Note</NoteButton>
				</section>
			) : null}
		</>
	)
}
