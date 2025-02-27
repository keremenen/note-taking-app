'use client'
import { useNoteContext } from '@/lib/hooks'
import NoteForm from './note-form'

export default function NoteDetails() {
	const { addNoteMode, selectedNote } = useNoteContext()

	if (selectedNote) {
		return (
			<NoteWrapper>
				<NoteForm actionType="edit" />
			</NoteWrapper>
		)
	}

	return (
		<>
			{addNoteMode ? (
				<NoteWrapper>
					<NoteForm actionType="add" />
				</NoteWrapper>
			) : (
				<p>empty view</p>
			)}
		</>
	)
}

function NoteWrapper({ children }: { children: React.ReactNode }) {
	return <div className="flex-1 px-6 py-5 flex flex-col">{children}</div>
}
