import { Note } from '@prisma/client'
import { clsx, type ClassValue } from 'clsx'

import { twMerge } from 'tailwind-merge'
import { NoteEssetials } from './types'

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

export function getFormDefaultValues(
	actionType: 'add' | 'edit',
	selectedNote: Note | undefined
): NoteEssetials {
	return {
		title: actionType === 'edit' ? selectedNote?.title ?? '' : '',
		content: actionType === 'edit' ? selectedNote?.content ?? '' : '',

		tags: actionType === 'edit' ? selectedNote?.tags ?? '' : '',
	}
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
