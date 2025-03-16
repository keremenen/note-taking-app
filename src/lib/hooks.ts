import { NoteContext } from '@/contexts/note-context-provider'
import { SearchContext } from '@/contexts/search-context-provider'
import { SettingsContext } from '@/contexts/settings-context-provider'
import { UserContext } from '@/contexts/user-context-provider'
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

export function useSearchContext() {
	const context = useContext(SearchContext)

	if (!context) {
		throw new Error(
			'useSearchContext must be used within a SearchContextProvider'
		)
	}

	return context
}

export function useUserContext() {
	const context = useContext(UserContext)

	if (!context) {
		throw new Error('useUserContext must be used within a UserContextProvider')
	}

	return context
}
