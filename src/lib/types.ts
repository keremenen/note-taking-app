import { Note } from '@prisma/client'

export type NoteEssetials = Omit<
	Note,
	'id' | 'createdAt' | 'updatedAt' | 'status'
>

export type AvailableSettings = 'color-theme' | 'font-theme' | 'change-password'
