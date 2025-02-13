'use client'
import DashboardHeader from '@/components/dashboard-header'
import NoteDetails from '@/components/note-details'
import NotesList from '@/components/note-list'
import NoteOptions from '@/components/note-options'
import { useNoteContext } from '@/lib/hooks'

export default function DashboardPage() {
	return (
		<main className="min-h-screen flex flex-col max-h-screen w-full">
			<DashboardHeader title={'All notes'} />
			<section className="flex flex-row flex-1 overflow-auto">
				{/* NOTES LIST */}

				<NotesList />
				{/* NOTE DETAILS */}
				<NoteDetails />
				{/* NOTE OPTIONS */}
				<NoteOptions />
			</section>
		</main>
	)
}
