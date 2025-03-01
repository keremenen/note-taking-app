'use client'

import { useSettingsContext } from '@/lib/hooks'

export default function SettingsContent() {
	const { selectedOption } = useSettingsContext()
	return <section>{selectedOption}</section>
}
