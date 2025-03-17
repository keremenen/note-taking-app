import DashboardHeader from '@/components/dashboard-header'
import SettingsContent from '@/components/settings-content'
import SettingsOptions from '@/components/settings-options'

export default async function SettingsPage() {
	return (
		<main className="min-h-screen flex flex-col max-h-screen w-full">
			<DashboardHeader title="Settings" />
			<section className="flex flex-row flex-1 overflow-auto dark:bg-neutral-950 dark:text-neutral-0">
				<SettingsOptions />
				<SettingsContent />
			</section>
		</main>
	)
}
