import AppMainWrapper from '@/components/app-main-wrapper'
import AppSectionWrapper from '@/components/app-section-wrapper'
import DashboardHeader from '@/components/dashboard-header'
import NoteDetails from '@/components/note-details'
import NotesList from '@/components/note-list'
import NoteOptions from '@/components/note-options'

export default function ArchivedNotesPage() {
	return (
		<AppMainWrapper>
			<DashboardHeader title="Archived Notes" />
			<AppSectionWrapper>
				<NotesList type="archive" />
				<NoteDetails />
				<NoteOptions />
			</AppSectionWrapper>
		</AppMainWrapper>
	)
}
