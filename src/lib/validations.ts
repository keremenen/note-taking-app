import { z } from 'zod'

export const noteFormSchema = z.object({
	title: z
		.string({ message: 'Title should be a string' })
		.nonempty()
		.trim()
		.max(100, { message: 'Title should be less than 100 characters' }),
	content: z
		.string()
		.max(1000, { message: 'Content should be less than 1000 characters' }),
	tags: z.string().nonempty().trim(),
})
