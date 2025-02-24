'use client'
import { useNoteContext } from '@/lib/hooks'
import { Button } from './ui/button'
import { Archive, Trash } from 'lucide-react'

export default function NoteOptions() {
	const { selectedNoteId, handleDeleteSelectedNote, handleToggleArchiveNote } =
		useNoteContext()

	return (
		<>
			<section className="basis-72 bg-white px-5 py-7 space-y-4 border-[#E0E4EA] border-l">
				{selectedNoteId !== null && (
					<>
						<Button
							variant={'outline'}
							className="w-full"
							onClick={() => handleToggleArchiveNote(selectedNoteId)}
						>
							<Archive size={16} />
							Archive Note
						</Button>
						<Button
							variant={'outline'}
							className="w-full"
							onClick={() => handleDeleteSelectedNote(selectedNoteId)}
						>
							<Trash size={16} />
							Delete Note
						</Button>
					</>
				)}
			</section>
		</>
	)
}
