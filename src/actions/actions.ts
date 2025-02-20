'use server'

import prisma from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function editNote(noteId, formData: FormData) {
	// await prisma.note.create({
	// 	data: {
	// 		title: formData.get('title') as string,
	// 		tags: formData.get('tags') as string,
	// 		content: formData.get('content') as string,
	// 	},
	// })
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
