'use server'

import prisma from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function editNote(noteId: number, formData: FormData) {
	await prisma.note.update({
		where: {
			id: noteId,
		},
		data: {
			title: formData.get('title') as string,
			tags: formData.get('tags') as string,
			content: formData.get('content') as string,
		},
	})
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
