'use client'
import { AvailableSettings } from '@/lib/types'
import { createContext, useState } from 'react'

type TSettingsContext = {
	selectedOption: AvailableSettings
	handleChangeSelectedOption: (
		option: TSettingsContext['selectedOption']
	) => void
}

export const SettingsContext = createContext<TSettingsContext | null>(null)

type SettingsContextProviderProps = {
	children: React.ReactNode
}

export default function SettingsContextProvider({
	children,
}: SettingsContextProviderProps) {
	const [selectedOption, setSelectedOption] =
		useState<TSettingsContext['selectedOption']>('color-theme')

	const handleChangeSelectedOption = (
		option: TSettingsContext['selectedOption']
	) => {
		setSelectedOption(option)
	}

	return (
		<SettingsContext.Provider
			value={{ selectedOption, handleChangeSelectedOption }}
		>
			{children}
		</SettingsContext.Provider>
	)
}
