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
	selectedNoteId: string | null
	handleAddNote: (newNote: Note) => void
	handleSetSelectedNoteId: (id: string) => void
}

type NoteContextProviderProps = {
	children: React.ReactNode
}

export default function NoteContextProvider({
	children,
}: NoteContextProviderProps) {
	// State
	const [notes, setNotes] = useState(data)
	const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null)

	// Handlers
	const handleAddNote = (newNote: Note) => {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote]
		})
	}

	const handleSetSelectedNoteId = (id: string) => {
		setSelectedNoteId(id)
	}

	return (
		<NoteContext.Provider
			value={{ notes, selectedNoteId, handleAddNote, handleSetSelectedNoteId }}
		>
			{children}
		</NoteContext.Provider>
	)
}
