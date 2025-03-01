'use client'

import { useSettingsContext } from '@/lib/hooks'

import { Label } from './ui/label'
import { useState } from 'react'
import { Button } from './ui/button'

export default function SettingsContent() {
	const { selectedOption } = useSettingsContext()
	const [selectedValue, setSelectedValue] = useState('option-one')

	return (
		<section className="p-8 max-w-[528px] w-full">
			<h2 className="font-semibold text-base">Color theme</h2>
			<p className="text-sm text-gray-500">
				Change the color theme of your notes.
			</p>
			{/* Options group */}
			<section className="flex flex-col gap-y-4 mt-6">
				<Button
					className="flex items-center justify-start h-[4.5rem]"
					variant={'outline'}
					onClick={() => setSelectedValue('option-one')}
				>
					<Label htmlFor="option-one">Option one</Label>
					<input
						type="radio"
						id="option-one"
						value="option-one"
						className="ml-auto"
						checked={selectedValue === 'option-one'}
						onChange={() => setSelectedValue('option-one')}
					/>
				</Button>
				<Button
					variant={'outline'}
					className="flex items-center space-x-2"
					onClick={() => setSelectedValue('option-two')}
				>
					<Label htmlFor="option-two">Option two</Label>
					<input
						type="radio"
						id="option-two"
						value="option-two"
						checked={selectedValue === 'option-two'}
						onChange={() => setSelectedValue('option-two')}
					/>
				</Button>
				<Button
					variant={'outline'}
					className="flex items-center space-x-2"
					onClick={() => setSelectedValue('option-three')}
				>
					<Label htmlFor="option-three">Option three</Label>
					<input
						type="radio"
						id="option-three"
						value="option-three"
						checked={selectedValue === 'option-three'}
						onChange={() => setSelectedValue('option-three')}
					/>
				</Button>
			</section>
		</section>
	)
}

// 	<RadioGroup
// defaultValue={selectedValue}
// onValueChange={(value) => console.log(value)}
// >
// <div>
// 	<RadioGroupItem value="light-mode" id="light-mode" />
// 	<Label htmlFor="light-mode">Light Mode</Label>
// </div>
// <div className="flex items-center space-x-2">
// 	<RadioGroupItem value="dark-mode" id="dark-mode" />
// 	<Label htmlFor="dark-mode">Dark Mode</Label>
// </div>
// <div className="flex items-center space-x-2">
// 	<RadioGroupItem value="system" id="system" />
// 	<Label htmlFor="system">System</Label>
// </div>
// </RadioGroup>
