import { useState } from 'react'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { LaptopMinimalCheck, Moon, Sun } from 'lucide-react'
import OptionButton from './option-button'
import { useUserContext } from '@/lib/hooks'

const themeSettings = [
	{
		title: 'Light Mode',
		value: 'light',
		description: 'Pick a clean and classic light theme',
		icon: <Sun />,
	},
	{
		title: 'Dark Mode',
		value: 'dark',
		description: 'Select a sleek and modern dark theme',
		icon: <Moon />,
	},
	{
		title: 'System',
		value: 'system',
		description: 'Adapts to your device theme',
		icon: <LaptopMinimalCheck />,
	},
]

export default function ColorThemeOptions() {
	const { preferedTheme, handleSetPreferedTheme } = useUserContext()

	return (
		<section className="p-8 max-w-[528px] w-full">
			<h2 className="font-semibold text-base">Color theme</h2>
			<p className="text-sm text-gray-500">
				Change the color theme of your notes.
			</p>

			<section className="flex flex-col gap-y-4 mt-6">
				{themeSettings.map((option, index) => (
					<OptionButton
						key={index}
						icon={option.icon}
						onClick={() => {
							handleSetPreferedTheme(option.value)
						}}
						selected={preferedTheme === option.value}
					>
						<Label htmlFor={option.value} className="text-sm font-medium">
							{option.title}
						</Label>
						<span className="text-xs font-normal">{option.description}</span>
					</OptionButton>
				))}
			</section>
		</section>
	)
}
