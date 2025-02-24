import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const intialNotes = [
	{
		title: 'React Performance Optimization',
		content: 'My first note',
		status: 'active',
		tags: 'Dev, React',
	},
	{
		title: 'Japan Travel Planning',
		content: 'My second note',
		status: 'active',
		tags: 'Travel, Personal',
	},
	{
		title: 'Favorite Pasta Recipes',
		content: 'My third note',
		status: 'active',
		tags: 'Cooking, Recipes',
	},
	{
		title: 'Weekly Workout Plan',
		content: 'My Fourth note',
		status: 'active',
		tags: 'Dev, React',
	},
	{
		title: 'Meal Prep Ideas',
		content: 'My Fifth note',
		status: 'active',
		tags: 'Cooking, Health, Recipes',
	},
	{
		title: 'Favorite Pasta Recipes',
		content: 'My Sixth note',
		status: 'active',
		tags: 'Cooking, Recipes',
	},
	{
		title: 'Weekly Workout Plan',
		content: 'My Seventh note',
		status: 'active',
		tags: 'Dev, React',
	},
	{
		title: 'Meal Prep Ideas',
		content: 'My Eighth note',
		status: 'active',
		tags: 'Cooking, Health, Recipes',
	},
	{
		title: 'Favorite Pasta Recipes',
		content: 'My Ninth note',
		status: 'active',
		tags: 'Cooking, Recipes',
	},
	{
		title: 'Weekly Workout Plan',
		content: 'My Tenth note',
		status: 'active',
		tags: 'Dev, React',
	},
	{
		title: 'Meal Prep Ideas',
		content: 'My Eleventh note',
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
