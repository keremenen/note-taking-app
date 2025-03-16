import DashboardHeader from '@/components/dashboard-header'
import SettingsContent from '@/components/settings-content'
import SettingsOptions from '@/components/settings-options'

export default async function SettingsPage() {
	return (
		<main className="min-h-screen flex flex-col max-h-screen w-full">
			<DashboardHeader title="Settings" />
			<section className="flex flex-row flex-1 overflow-auto">
				<SettingsOptions />
				<SettingsContent />
			</section>
		</main>
	)
}
