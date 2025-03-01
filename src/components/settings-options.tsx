import { DoorOpen, LockKeyhole, Sun, Type } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

const settingsOptions = [
	{
		label: 'Color Theme',
		icon: <Sun />,
	},
	{
		label: 'Font Theme',
		icon: <Type />,
	},
	{
		label: 'Change Password',
		icon: <LockKeyhole />,
	},
]

export default function SettingsOptions() {
	return (
		<section className="flex flex-col pl-8 pr-4 py-5 gap-y-2 w-full max-w-64 border-[#E0E4EA] border-r">
			{settingsOptions.map((option, index) => (
				<Button key={index} className="justify-start" variant={'outline'}>
					{option.icon}
					{option.label}
				</Button>
			))}
			<Separator className="my-2" />
			<Button className="justify-start" variant={'outline'}>
				<DoorOpen />
				Log Out
			</Button>
		</section>
	)
}
