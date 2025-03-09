'use server'

import prisma from '@/lib/db'
import { noteFormSchema, noteIdSchema } from '@/lib/validations'
import { revalidatePath } from 'next/cache'

export async function editNote(noteId: unknown, newNoteData: unknown) {
	// Validate the data
	const validatedNote = noteFormSchema.safeParse(newNoteData)
	const validatedNoteId = noteIdSchema.safeParse(noteId)

	if (!validatedNote.success || !validatedNoteId.success) {
		return { message: 'Invalid data' }
	}

	// Edit the note
	try {
		await prisma.note.update({
			where: {
				id: validatedNoteId.data,
			},
			data: validatedNote.data,
		})
	} catch (error) {
		return { message: 'Failed to edit note', error }
	}

	// Revalidate the cache
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

export async function deleteNote(noteId: string) {
	await prisma.note.delete({
		where: {
			id: noteId,
		},
	})
	revalidatePath('/app', 'layout')
}

export async function archiveNote(noteId: string) {
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

export async function restoreNote(noteId: string) {
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
