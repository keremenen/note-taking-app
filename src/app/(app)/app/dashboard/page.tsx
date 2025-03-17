import AppMainWrapper from '@/components/app-main-wrapper'
import AppSectionWrapper from '@/components/app-section-wrapper'
import DashboardHeader from '@/components/dashboard-header'
import NoteDetails from '@/components/note-details'
import NotesList from '@/components/note-list'
import NoteOptions from '@/components/note-options'

export default async function DashboardPage() {
	return (
		<AppMainWrapper>
			<DashboardHeader title="All Notes" />
			<AppSectionWrapper>
				<NotesList type="active" />
				<NoteDetails />
				<NoteOptions />
			</AppSectionWrapper>
		</AppMainWrapper>
	)
}
