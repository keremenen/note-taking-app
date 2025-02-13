'use client'

import { createContext, useState } from 'react'

const data = [
	{
		id: 1,
		title: 'React Performance Optimization',
		tags: ['Dev', 'React'],
		createdAt: '29 Oct 2024',
	},
	{
		id: 2,
		title: 'Japan Travel Planning',
		tags: ['Travel', 'Personal'],
		createdAt: '28 Oct 2024',
	},
	{
		id: 3,
		title: 'Favorite Pasta Recipes',
		tags: ['Cooking', 'Recipes'],
		createdAt: '27 Oct 2024',
	},
	{
		id: 4,
		title: 'Weekly Workout Plan',
		tags: ['Dev', 'React'],
		createdAt: '29 Oct 2024',
	},
	{
		id: 5,
		title: 'Meal Prep Ideas',
		tags: ['Cooking', 'Health', 'Recipes'],
		createdAt: '29 Oct 2024',
	},
	{
		id: 6,
		title: 'Favorite Pasta Recipes',
		tags: ['Cooking', 'Recipes'],
		createdAt: '27 Oct 2024',
	},
	{
		id: 7,
		title: 'Weekly Workout Plan',
		tags: ['Dev', 'React'],
		createdAt: '29 Oct 2024',
	},
	{
		id: 8,
		title: 'Meal Prep Ideas',
		tags: ['Cooking', 'Health', 'Recipes'],
		createdAt: '29 Oct 2024',
	},
	{
		id: 9,
		title: 'Favorite Pasta Recipes',
		tags: ['Cooking', 'Recipes'],
		createdAt: '27 Oct 2024',
	},
	{
		id: 10,
		title: 'Weekly Workout Plan',
		tags: ['Dev', 'React'],
		createdAt: '29 Oct 2024',
	},
	{
		id: 11,
		title: 'Meal Prep Ideas',
		tags: ['Cooking', 'Health', 'Recipes'],
		createdAt: '29 Oct 2024',
	},
]
export const NoteContext = createContext<TNoteContext | null>(null)

type Note = {
	id: number
	title: string
	tags: string[]
	createdAt: string
}

type TNoteContext = {
	notes: Note[]
	selectedNoteId: number | null
	selectedNote: Note | undefined
	addNoteMode: boolean
	handleActiveAddNoteMode: () => void
	handleAddNote: (newNote: Note) => void
	handleSetSelectedNoteId: (id: number) => void
}

type NoteContextProviderProps = {
	children: React.ReactNode
}

export default function NoteContextProvider({
	children,
}: NoteContextProviderProps) {
	// State
	const [notes, setNotes] = useState(data)
	const [selectedNoteId, setSelectedNoteId] = useState<number | null>(1)
	const [addNoteMode, setAddNoteMode] = useState(false)

	// Derived state
	const selectedNote = notes.find((note) => note.id === selectedNoteId)

	// Handlers
	const handleAddNote = (newNote: Note) => {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote]
		})
	}

	const handleSetSelectedNoteId = (id: number) => {
		setSelectedNoteId(id)
	}

	const handleActiveAddNoteMode = () => {
		setSelectedNoteId(null)
		setAddNoteMode(true)
	}

	console.log(selectedNoteId)

	return (
		<NoteContext.Provider
			value={{
				notes,
				selectedNoteId,
				selectedNote,
				addNoteMode,
				handleActiveAddNoteMode,
				handleAddNote,
				handleSetSelectedNoteId,
			}}
		>
			{children}
		</NoteContext.Provider>
	)
}
