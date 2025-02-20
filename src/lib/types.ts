import { Note } from '@prisma/client'

export type NoteEssetials = Omit<Note, 'id' | 'createdAt'>
