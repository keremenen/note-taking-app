import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const intialNotes = [
	{
		title: 'React Performance Optimization',
		content: '',
		status: 'active',
		tags: 'Dev, React',
	},
	{
		title: 'Japan Travel Planning',
		content: '',
		status: 'active',
		tags: 'Travel, Personal',
	},
	{
		title: 'Favorite Pasta Recipes',
		content: '',
		status: 'active',
		tags: 'Cooking, Recipes',
	},
	{
		title: 'Weekly Workout Plan',
		content: '',
		status: 'active',
		tags: 'Dev, React',
	},
	{
		title: 'Meal Prep Ideas',
		content: '',
		status: 'active',
		tags: 'Cooking, Health, Recipes',
	},
	{
		title: 'Favorite Pasta Recipes',
		content: '',
		status: 'active',
		tags: 'Cooking, Recipes',
	},
	{
		title: 'Weekly Workout Plan',
		content: '',
		status: 'active',
		tags: 'Dev, React',
	},
	{
		title: 'Meal Prep Ideas',
		content: '',
		status: 'active',
		tags: 'Cooking, Health, Recipes',
	},
	{
		title: 'Favorite Pasta Recipes',
		content: '',
		status: 'active',
		tags: 'Cooking, Recipes',
	},
	{
		title: 'Weekly Workout Plan',
		content: '',
		status: 'active',
		tags: 'Dev, React',
	},
	{
		title: 'Meal Prep Ideas',
		content: '',
		status: 'active',
		tags: 'Cooking, Health, Recipes',
	},
]

async function main() {
	console.log('Start seeding ...')

	for (const note of intialNotes) {
		const newNote = await prisma.note.create({
			data: note,
		})

		console.log(`Created note with id: ${newNote.id}`)
	}

	console.log('Seeding finished.')
}
main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
