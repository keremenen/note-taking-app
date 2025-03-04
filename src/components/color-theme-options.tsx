import { useState } from 'react'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { LaptopMinimalCheck, Moon, Sun } from 'lucide-react'

const themeSettings = [
	{
		title: 'Light Mode',
		description: 'Pick a clean and classic light theme',
		icon: <Sun />,
	},
	{
		title: 'Dark Mode',
		description: 'Select a sleek and modern dark theme',
		icon: <Moon />,
	},
	{
		title: 'System',
		description: 'Adapts to your device theme',
		icon: <LaptopMinimalCheck />,
	},
]

export default function ColorThemeOptions() {
	const [selectedValue, setSelectedValue] = useState('option-one')

	const handleOptionClick = (option: string) => {
		setSelectedValue(option)
	}

	return (
		<section className="p-8 max-w-[528px] w-full">
			<h2 className="font-semibold text-base">Color theme</h2>
			<p className="text-sm text-gray-500">
				Change the color theme of your notes.
			</p>
			{/* Options group */}
			<section className="flex flex-col gap-y-4 mt-6">
				{themeSettings.map((option, index) => (
					<Button
						key={index}
						className="flex items-center justify-start h-[4.5rem] hover:bg-[#E0E4EA] bg-white w-full rounded-2xl gap-x-4"
						variant={'outline'}
						onClick={() => handleOptionClick(`option-${index}`)}
					>
						<div className="size-10  rounded-md border-[1px] flex justify-center items-center border-[#E0E4EA] bg-white">
							{option.icon}
						</div>

						<div className="flex flex-col text-left">
							<Label
								htmlFor={`option-${index}`}
								className="text-sm font-medium"
							>
								{option.title}
							</Label>
							<span className="text-xs font-normal">{option.description}</span>
						</div>

						<input
							type="radio"
							id={`option-${index}`}
							value={`option-${index}`}
							className="ml-auto"
							checked={selectedValue === `option-${index}`}
							onChange={() => handleOptionClick(`option-${index}`)}
						/>
					</Button>
				))}

				<Button size={'sm'} className="self-end font-normal">
					Apply Changes
				</Button>
			</section>
		</section>
	)
}
