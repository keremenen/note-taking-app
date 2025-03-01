'use client'
import { DoorOpen, LockKeyhole, Sun, Type } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { useSettingsContext } from '@/lib/hooks'
import { JSX } from 'react'

type SettingsOption = {
	label: string
	value: 'color-theme' | 'font-theme' | 'change-password'
	icon: JSX.Element
}

const settingsOptions: SettingsOption[] = [
	{
		label: 'Color Theme',
		value: 'color-theme',
		icon: <Sun />,
	},
	{
		label: 'Font Theme',
		value: 'font-theme',
		icon: <Type />,
	},
	{
		label: 'Change Password',
		value: 'change-password',
		icon: <LockKeyhole />,
	},
]

export default function SettingsOptions() {
	const { handleChangeSelectedOption } = useSettingsContext()
	return (
		<section className="flex flex-col pl-8 pr-4 py-5 gap-y-2 w-full max-w-64 border-[#E0E4EA] border-r">
			{settingsOptions.map((option, index) => (
				<Button
					key={index}
					className="justify-start"
					variant={'outline'}
					value={option.value}
					onClick={() => handleChangeSelectedOption(option.value)}
				>
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
