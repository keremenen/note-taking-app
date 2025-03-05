'use client'

import { useSettingsContext } from '@/lib/hooks'

import ColorThemeOptions from './color-theme-options'
import FontThemeOptions from './font-theme'
import ChangePasswordDetails from './change-password-details'

export default function SettingsContent() {
	const { selectedOption } = useSettingsContext()

	switch (selectedOption) {
		case 'color-theme':
			return <ColorThemeOptions />
		case 'font-theme':
			return <FontThemeOptions />
		case 'change-password':
			return <ChangePasswordDetails />
		default:
			return null
	}
}
