import { Note } from '@prisma/client'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getTags(notes: Note[]) {
	const tagsSet = new Set<string>()
	notes.forEach((note) => {
		note.tags.split(',').forEach((tag) => tagsSet.add(tag.trim()))
	})
	return Array.from(tagsSet)
}
