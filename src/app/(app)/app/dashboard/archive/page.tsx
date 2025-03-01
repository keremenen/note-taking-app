import DashboardHeader from '@/components/dashboard-header'
import NoteDetails from '@/components/note-details'
import NotesList from '@/components/note-list'
import NoteOptions from '@/components/note-options'

export default function ArchivedNotesPage() {
	return (
		<main className="min-h-screen flex flex-col max-h-screen w-full">
			<DashboardHeader />
			<section className="flex flex-row flex-1 overflow-auto">
				<NotesList />
				<NoteDetails />
				<NoteOptions />
			</section>
		</main>
	)
}
