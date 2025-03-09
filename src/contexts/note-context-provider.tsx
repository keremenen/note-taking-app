'use client'
import {
	deleteNote,
	editNote,
	archiveNote,
	restoreNote,
	addNote,
} from '@/actions/actions'
import { NoteEssetials } from '@/lib/types'
import { getTagsArrayFromNotes } from '@/lib/utils'
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
	handleAddNote: (noteData: NoteEssetials) => void
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
	const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null)
	const [addNoteMode, setAddNoteMode] = useState(false)
	const [tags, setTags] = useState<string[]>(
		getTagsArrayFromNotes(notes.filter((note) => note.status === 'active'))
	)

	// Derived state
	const selectedNote = notes.find((note) => note.id === selectedNoteId)

	// Handlers
	const handleAddNote = async (noteData: NoteEssetials) => {
		const error = await addNote(noteData)

		if (error) {
			console.log(error.message)
		}

		setAddNoteMode(false)
	}

	const handleEditSelectedNote = async (
		id: string,
		newNoteData: NoteEssetials
	) => {
		const error = await editNote(id, newNoteData)

		if (error) {
			console.log(error.error)
		}
	}

	const handleArchiveSelectedNote = async (id: string) => {
		const error = await archiveNote(id)

		if (error) {
			console.log(error.error)
		}

		setSelectedNoteId(null)
	}

	const handleDeleteSelectedNote = async (id: string) => {
		const error = await deleteNote(id)

		if (error) {
			console.log(error.error)
		}

		setSelectedNoteId(null)
	}

	const handleRestoreSelectedNote = async (id: string) => {
		const error = await restoreNote(id)

		if (error) {
			console.log(error.error)
		}

		setSelectedNoteId(null)
	}

	const handleSetSelectedNoteId = (id: string) => {
		setSelectedNoteId(id)
		setAddNoteMode(false)
	}

	const handleActiveAddNoteMode = () => {
		setSelectedNoteId(null)
		setAddNoteMode(true)
	}

	const handleRecreateTags = (notes: Note[]) => {
		const tagsSet = new Set<string>()

		notes.forEach((note) => {
			note.tags.split(',').forEach((tag) => tagsSet.add(tag.trim()))
		})

		setTags(Array.from(tagsSet))
	}

	useEffect(() => {
		handleRecreateTags(notes.filter((note) => note.status === 'active'))
	}, [notes])

	return (
		<NoteContext.Provider
			value={{
				notes,
				selectedNoteId,
				selectedNote,
				addNoteMode,
				tags,
				handleAddNote,
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
