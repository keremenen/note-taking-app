import AppMainWrapper from '@/components/app-main-wrapper'
import AppSectionWrapper from '@/components/app-section-wrapper'
import DashboardHeader from '@/components/dashboard-header'
import SettingsContent from '@/components/settings-content'
import SettingsOptions from '@/components/settings-options'

export default async function SettingsPage() {
	return (
		<AppMainWrapper>
			<DashboardHeader title="Settings" />
			<AppSectionWrapper>
				<SettingsOptions />
				<SettingsContent />
			</AppSectionWrapper>
		</AppMainWrapper>
	)
}
