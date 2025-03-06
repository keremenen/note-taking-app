import { Note } from '@prisma/client'
import { clsx, type ClassValue } from 'clsx'
import { useSearchParams } from 'next/navigation'
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

export function getFormDefaultValues(
	actionType: 'add' | 'edit',
	selectedNote: Note | undefined
): {
	title?: string | undefined
	content?: string | undefined
	status?: string | undefined
	tags?: string | undefined
} {
	return {
		title: actionType === 'edit' ? selectedNote?.title : '',
		content: actionType === 'edit' ? selectedNote?.content : '',
		status: actionType === 'edit' ? selectedNote?.status : 'active',
		tags: actionType === 'edit' ? selectedNote?.tags : '',
	}
}

export function getReadableDate(date: Date) {
	return new Date(date).toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	})
}

export function getSearchParams(searchParam: string) {
	const searchParams = useSearchParams()
	const params = searchParams.get(searchParam)
	return params
}
