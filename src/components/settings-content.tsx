'use client'

import { useSettingsContext } from '@/lib/hooks'

import { Label } from './ui/label'
import { useState } from 'react'
import { Button } from './ui/button'
import ColorThemeOptions from './color-theme-options'

export default function SettingsContent() {
	const { selectedOption, handleChangeSelectedOption } = useSettingsContext()

	return <ColorThemeOptions />
}
