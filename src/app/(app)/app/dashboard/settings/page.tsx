import AppMainWrapper from '@/components/app-main-wrapper'
import AppSectionWrapper from '@/components/app-section-wrapper'
import DashboardHeader from '@/components/dashboard-header'
import SettingsContent from '@/components/settings-content'
import SettingsOptions from '@/components/settings-options'
import { cookies } from 'next/headers'

export default async function SettingsPage() {
	const cookieStore = await cookies()

	const selectedTheme = cookieStore.get('theme')?.value || 'system'
	const selectedFont = cookieStore.get('font')?.value || 'roboto'

	return (
		<AppMainWrapper>
			<DashboardHeader title="Settings" />
			<AppSectionWrapper>
				<SettingsOptions />
				<SettingsContent theme={selectedTheme} font={selectedFont} />
			</AppSectionWrapper>
		</AppMainWrapper>
	)
}
