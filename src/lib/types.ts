import { Note } from '@prisma/client'

export type NoteEssetials = Omit<Note, 'id' | 'createdAt'>

export type AvailableSettings = 'color-theme' | 'font-theme' | 'change-password'
