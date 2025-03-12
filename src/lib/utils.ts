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

export function getReadableDate(date: Date) {
	return new Date(date).toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	})
}

export function getTagsArrayFromNotes(notes: Note[]) {
	const tagsSet = new Set<string>()
	notes.forEach((note) => {
		note.tags.split(',').forEach((tag) => tagsSet.add(tag.trim()))
	})
	return Array.from(tagsSet)
}
