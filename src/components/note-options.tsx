'use client'
import { usePathname } from 'next/navigation'
import NoteButton from './note-button'

export default function NoteOptions() {
	const pathname = usePathname()
	const isArchive = pathname.includes('archive')

	return (
		<>
			<section className="basis-72 bg-white px-5 py-7 space-y-4 border-[#E0E4EA] border-l">
				{isArchive ? (
					<NoteButton actionType="restore">Restore</NoteButton>
				) : (
					<NoteButton actionType="archive">Archive Note</NoteButton>
				)}
				<NoteButton actionType="delete">Delete Note</NoteButton>
			</section>
		</>
	)
}
