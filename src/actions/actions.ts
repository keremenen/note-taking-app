'use server'

import prisma from '@/lib/db'
import {
	authFormSchema,
	changePasswordFormSchema,
	noteFormSchema,
	noteIdSchema,
} from '@/lib/validations'
import { Prisma } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import bcrypt from 'bcryptjs'
import { auth, signIn, signOut } from '@/lib/auth'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { error } from 'console'

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
			data: {
				...validatedNote.data,
				// if tags string end with come	, remove it
				tags: validatedNote.data.tags.replace(/,\s*$/, ''),
			},
		})
	} catch (error) {
		return { message: 'Failed to edit note', error }
	}

	// Revalidate the cache
	revalidatePath('/app', 'layout')
}

export async function addNote(noteData: unknown) {
	// Check auth
	const session = await auth()
	if (!session) {
		redirect('/login')
	}

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
				// if tags string end with come	, remove it
				tags: validatedData.data.tags.replace(/,\s*$/, ''),
				User: {
					connect: {
						id: session.user?.id,
					},
				},
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
				hashedPassword: await bcrypt.hash(password, 10),
				preferedColorScheme: 'system',
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
	await signIn('credentials', formData)
}

export async function logIn(prevState: unknown, formData: unknown) {
	// simulate 2 seconds of loading
	await new Promise((resolve) => setTimeout(resolve, 2000))

	if (!(formData instanceof FormData)) {
		return { message: 'Invalid data' }
	}

	try {
		await signIn('credentials', formData)
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return { message: 'Invalid credentials' }

				default:
					return { message: 'Sign in error' }
			}
		}

		throw error
	}
}

export async function logOut() {
	await signOut({ redirectTo: '/login' })
}

export async function changePreferedTheme(theme: string) {
	const session = await auth()
	if (!session) {
		redirect('/login')
	}

	// Change the theme
	try {
		await prisma.user.update({
			where: {
				id: session.user?.id,
			},
			data: {
				preferedColorScheme: theme,
			},
		})
	} catch (error) {
		return { message: 'Failed to change theme', error }
	}
	const cookieStore = await cookies()
	cookieStore.set('theme', theme)
}

export async function changePassword(formData: unknown) {
	const session = await auth()

	if (!session) {
		redirect('/login')
	}

	const validatedFormData = changePasswordFormSchema.safeParse(formData)
	if (!validatedFormData.success) {
		return { errorMessage: 'Invalid data' }
	}

	const user = await prisma.user.findUnique({
		where: {
			id: session.user?.id,
		},
		select: {
			hashedPassword: true,
		},
	})

	if (!user) {
		return { errorMessage: 'User not found' }
	}

	const { hashedPassword: databaseHashedPassword } = user

	const isPasswordMatch = await bcrypt.compare(
		validatedFormData.data.currentPassword,
		databaseHashedPassword
	)

	if (!isPasswordMatch) {
		return { errorMessage: 'Invalid current password' }
	}

	const newHashedPassword = await bcrypt.hash(
		validatedFormData.data.newPassword,
		10
	)

	await prisma.user.update({
		where: {
			id: session.user?.id,
		},
		data: {
			hashedPassword: newHashedPassword,
		},
	})

	return {
		successMessage: 'Password changed successfully',
	}
}
