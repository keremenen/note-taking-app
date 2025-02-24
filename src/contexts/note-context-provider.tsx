'use client'
import { deleteNote, editNote, toggleArchiveNote } from '@/actions/actions'
import { getTags } from '@/lib/utils'
import { Note } from '@prisma/client'
import { createContext, useEffect, useState } from 'react'

export const NoteContext = createContext<TNoteContext | null>(null)

type TNoteContext = {
	notes: Note[]
	selectedNoteId: number | null
	selectedNote: Note | undefined
	addNoteMode: boolean
	tags: string[]
	handleActiveAddNoteMode: () => void
	handleEditSelectedNote: (id: number, newNoteData: FormData) => void
	// handleAddNote: (newNote: Note) => void
	handleSetSelectedNoteId: (id: number) => void
	handleDeleteSelectedNote: (id: number) => void
	handleToggleArchiveNote: (id: number) => void
}

type NoteContextProviderProps = {
	data: Note[]
	children: React.ReactNode
}

export default function NoteContextProvider({
	data: notes,
	children,
}: NoteContextProviderProps) {
	// State

	const [selectedNoteId, setSelectedNoteId] = useState<number | null>(1)
	const [addNoteMode, setAddNoteMode] = useState(false)

	// const [tags, setTags] = useState<string[]>(notes.map((note) => note.tags))

	const [tags, setTags] = useState<string[]>(getTags(notes))

	// Derived state
	const selectedNote = notes.find((note) => note.id === selectedNoteId)

	// Handlers

	const handleToggleArchiveNote = (id: number) => {
		toggleArchiveNote(id)
	}

	const handleSetSelectedNoteId = (id: number) => {
		setSelectedNoteId(id)
		setAddNoteMode(false)
	}

	const handleActiveAddNoteMode = () => {
		setSelectedNoteId(null)
		setAddNoteMode(true)
	}

	const handleEditSelectedNote = (id: number, newNoteData: FormData) => {
		editNote(id, newNoteData)
	}

	const handleDeleteSelectedNote = (id: number) => {
		setSelectedNoteId(null)
		deleteNote(id)
	}

	useEffect(() => {
		setTags(getTags(notes))
	}, [notes])

	return (
		<NoteContext.Provider
			value={{
				notes,
				selectedNoteId,
				selectedNote,
				addNoteMode,
				tags,
				handleActiveAddNoteMode,
				handleDeleteSelectedNote,
				handleEditSelectedNote,
				handleToggleArchiveNote,
				handleSetSelectedNoteId,
			}}
		>
			{children}
		</NoteContext.Provider>
	)
}
