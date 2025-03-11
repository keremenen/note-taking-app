import { z } from 'zod'

export const noteIdSchema = z.string().cuid()

export const noteFormSchema = z.object({
	title: z
		.string({ message: 'Title should be a string' })
		.nonempty({ message: 'Title should not be empty' })
		.trim()
		.max(100, { message: 'Title should be less than 100 characters' }),
	content: z
		.string()
		.max(1000, { message: 'Content should be less than 1000 characters' }),
	tags: z
		.string()
		.nonempty({ message: 'You should type at least one tag' })
		.trim(),
})

export type TNoteForm = z.infer<typeof noteFormSchema>

export const authFormSchema = z.object({
	email: z.string().email({ message: 'Invalid email' }),
	password: z
		.string()
		.min(8, { message: 'Password should be at least 8 characters' }),
})

export type TAuthForm = z.infer<typeof authFormSchema>
