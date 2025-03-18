import { Label } from './ui/label'
import { Moon, Sun } from 'lucide-react'
import OptionButton from './option-button'
import { setCookie } from '@/actions/actions'

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
]

export default function ColorThemeOptions({ theme }: { theme: string }) {
	const handleOptionClick = async (option: string) => {
		await setCookie('theme', option)
	}

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
							handleOptionClick(option.value)
						}}
						selected={theme === option.value}
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
