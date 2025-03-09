'use server'

import prisma from '@/lib/db'
import { NoteEssetials } from '@/lib/types'
import { noteFormSchema } from '@/lib/validations'
import { revalidatePath } from 'next/cache'

export async function editNote(
	noteId: number,
	newNoteData: Omit<NoteEssetials, 'updatedAt'>
) {
	await prisma.note.update({
		where: {
			id: noteId,
		},
		data: newNoteData,
	})
	revalidatePath('/app', 'layout')
}

export async function addNote(noteData: unknown) {
	// Validate the data
	const validatedData = noteFormSchema.safeParse(noteData)
	if (!validatedData.success) {
		return { message: 'Invalid data' }
	}

	// Add the note
	try {
		await prisma.note.create({
			data: {
				status: 'active',
				...validatedData.data,
			},
		})
	} catch (error) {
		return { message: 'Failed to add note', error }
	}

	// Revalidate the cache
	revalidatePath('/app', 'layout')
}

export async function deleteNote(noteId: number) {
	await prisma.note.delete({
		where: {
			id: noteId,
		},
	})
	revalidatePath('/app', 'layout')
}

export async function archiveNote(noteId: number) {
	await prisma.note.update({
		where: {
			id: noteId,
		},
		data: {
			status: 'archived',
		},
	})
	revalidatePath('/app', 'layout')
}

export async function restoreNote(noteId: number) {
	await prisma.note.update({
		where: {
			id: noteId,
		},
		data: {
			status: 'active',
		},
	})
	revalidatePath('/app', 'layout')
}
