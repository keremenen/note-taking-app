import { NoteContext } from '@/contexts/note-context-provider'
import { SettingsContext } from '@/contexts/settings-context-provider'
import { useContext } from 'react'

export function useNoteContext() {
	const context = useContext(NoteContext)

	if (!context) {
		throw new Error('useNoteContext must be used within a NoteContextProvider')
	}

	return context
}

export function useSettingsContext() {
	const context = useContext(SettingsContext)

	if (!context) {
		throw new Error(
			'useSettingsContext must be used within a SettingsContextProvider'
		)
	}

	return context
}
