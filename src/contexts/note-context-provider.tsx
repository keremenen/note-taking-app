'use client'
import {
	deleteNote,
	editNote,
	archiveNote,
	restoreNote,
} from '@/actions/actions'
import { NoteEssetials } from '@/lib/types'
import { getTags } from '@/lib/utils'
import { Note } from '@prisma/client'
import { createContext, useEffect, useState } from 'react'

export const NoteContext = createContext<TNoteContext | null>(null)

type TNoteContext = {
	notes: Note[]
	selectedNoteId: Note['id'] | null
	selectedNote: Note | undefined
	addNoteMode: boolean
	tags: string[]
	handleActiveAddNoteMode: () => void
	handleEditSelectedNote: (
		id: Note['id'],
		newNoteData: Omit<NoteEssetials, 'updatedAt'>
	) => void

	handleSetSelectedNoteId: (id: Note['id']) => void
	handleDeleteSelectedNote: (id: Note['id']) => void
	handleArchiveSelectedNote: (id: Note['id']) => void
	handleRestoreSelectedNote: (id: Note['id']) => void
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
	const [tags, setTags] = useState<string[]>(getTags(notes))

	// Derived state
	const selectedNote = notes.find((note) => note.id === selectedNoteId)

	// Handlers
	const handleArchiveSelectedNote = async (id: number) => {
		await archiveNote(id)
		setSelectedNoteId(null)
	}

	const handleDeleteSelectedNote = async (id: number) => {
		await deleteNote(id)
		setSelectedNoteId(null)
	}

	const handleRestoreSelectedNote = async (id: number) => {
		await restoreNote(id)
		setSelectedNoteId(null)
	}

	const handleEditSelectedNote = async (
		id: number,
		newNoteData: Omit<NoteEssetials, 'updatedAt'>
	) => {
		await editNote(id, newNoteData)
	}

	const handleSetSelectedNoteId = (id: number) => {
		setSelectedNoteId(id)
		setAddNoteMode(false)
	}

	const handleActiveAddNoteMode = () => {
		setSelectedNoteId(null)
		setAddNoteMode(true)
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
				handleArchiveSelectedNote,
				handleSetSelectedNoteId,
				handleRestoreSelectedNote,
			}}
		>
			{children}
		</NoteContext.Provider>
	)
}
