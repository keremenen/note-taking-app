import { NoteContext } from '@/contexts/note-context-provider'
import { useContext } from 'react'

export function useNoteContext() {
	const context = useContext(NoteContext)

	if (!context) {
		throw new Error('useNoteContext must be used within a NoteContextProvider')
	}

	return context
}
