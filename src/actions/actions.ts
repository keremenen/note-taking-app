'use server'

import prisma from '@/lib/db'
import { authFormSchema, noteFormSchema, noteIdSchema } from '@/lib/validations'
import { Prisma } from '@prisma/client'
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
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === 'P2002') {
				return { message: 'Email already exists' }
			}
		}
	}

	// Revalidate the cache
	revalidatePath('/app', 'layout')
}

export async function deleteNote(noteId: unknown) {
	// Validate the data
	const validatedNoteId = noteIdSchema.safeParse(noteId)

	if (!validatedNoteId.success) {
		return { message: 'Invalid data' }
	}

	// Delete the note
	try {
		await prisma.note.delete({
			where: {
				id: validatedNoteId.data,
			},
		})
	} catch (error) {
		return { message: 'Failed to add note', error }
	}

	// Revalidate the cache
	revalidatePath('/app', 'layout')
}

export async function archiveNote(noteId: unknown) {
	// Validate the data
	const validatedNoteId = noteIdSchema.safeParse(noteId)

	if (!validatedNoteId.success) {
		return { message: 'Invalid data' }
	}

	// Archive the note
	try {
		await prisma.note.update({
			where: {
				id: validatedNoteId.data,
			},
			data: {
				status: 'archived',
			},
		})
	} catch (error) {
		return { message: 'Failed to archive note', error }
	}

	// Revalidate the cache
	revalidatePath('/app', 'layout')
}

export async function restoreNote(noteId: unknown) {
	// Validate the data
	const validatedNoteId = noteIdSchema.safeParse(noteId)

	if (!validatedNoteId.success) {
		return { message: 'Invalid data' }
	}

	// Restore the note
	try {
		await prisma.note.update({
			where: {
				id: validatedNoteId.data,
			},
			data: {
				status: 'active',
			},
		})
	} catch (error) {
		return { message: 'Failed to restore note', error }
	}

	// Revalidate the cache
	revalidatePath('/app', 'layout')
}

// AUTH ACTIONS

export async function signUp(prevState: unknown, formData: unknown) {
	// simulate 2 seconds of loading
	await new Promise((resolve) => setTimeout(resolve, 2000))

	if (!(formData instanceof FormData)) {
		return { message: 'Invalid data' }
	}

	const formDataEntries = Object.fromEntries(formData.entries())
	const validatedFormData = authFormSchema.safeParse(formDataEntries)

	if (!validatedFormData.success) {
		return {
			message: 'Invalid credentials',
			payload: { email: formData.get('email') },
		}
	}

	const { email, password } = validatedFormData.data

	try {
		await prisma.user.create({
			data: {
				email,
				hashedPassword: password,
			},
		})
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === 'P2002') {
				return { message: 'Email already exists' }
			}
		}
		return { message: 'Failed to create user' }
	}
}

export async function logIn(prevState: unknown, formData: unknown) {
	// simulate 2 seconds of loading
	await new Promise((resolve) => setTimeout(resolve, 2000))

	if (!(formData instanceof FormData)) {
		return { message: 'Invalid data' }
	}
}
