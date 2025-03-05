import { CaseSensitive } from 'lucide-react'
import OptionButton from './option-button'
import { Label } from '@radix-ui/react-label'
import { Button } from './ui/button'
import { useState } from 'react'

const fontSettings = [
	{
		title: 'Sans-serif',
		description: 'Clean and modern, easy to read.',
		icon: <CaseSensitive />,
	},
	{
		title: 'Serif',
		description: 'Classic and elegant for a timeless feel.',
		icon: <CaseSensitive />,
	},
	{
		title: 'Monospace',
		description: 'Code-like, great for a technical vibe.',
		icon: <CaseSensitive />,
	},
]

export default function FontThemeOptions() {
	const [selectedValue, setSelectedValue] = useState('option-0')

	const handleOptionClick = (option: string) => {
		setSelectedValue(option)
	}

	return (
		<section className="p-8 max-w-[528px] w-full">
			<h2 className="font-semibold text-base">Font theme</h2>
			<p className="text-sm text-gray-500">Choose your font theme:</p>

			<section className="flex flex-col gap-y-4 mt-6">
				{fontSettings.map((option, index) => (
					<OptionButton
						key={index}
						icon={option.icon}
						onClick={() => {
							handleOptionClick(`option-${index}`)
						}}
						selected={selectedValue === `option-${index}`}
					>
						<Label htmlFor={`option-${index}`} className="text-sm font-medium">
							{option.title}
						</Label>
						<span className="text-xs font-normal">{option.description}</span>
					</OptionButton>
				))}

				<Button size={'sm'} className="self-end font-normal">
					Apply Changes
				</Button>
			</section>
		</section>
	)
}
