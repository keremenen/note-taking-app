'use client'

import { useSettingsContext } from '@/lib/hooks'

import ColorThemeOptions from './color-theme-options'

export default function SettingsContent() {
	const { selectedOption } = useSettingsContext()

	switch (selectedOption) {
		case 'color-theme':
			return <ColorThemeOptions />
		case 'font-theme':
			return <h1>Font Theme</h1>
		case 'change-password':
			return <h1>Change Password</h1>
		default:
			return <h1>Settings</h1>
	}
}
