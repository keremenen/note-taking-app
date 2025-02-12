import React from 'react'
import { Input } from './ui/input'
import { Settings } from 'lucide-react'

export default function DashboardHeader() {
	return (
		<header className=" px-8 py-4 border-b border-[#E0E4EA] flex items-center h-20">
			<h1 className="font-bold text-2xl ">All notes</h1>
			<div className="ml-auto flex items-center gap-4">
				<Input
					placeholder="Search by title, content, or tags…"
					className="w-80"
				/>
				<Settings className="ml-auto" />
			</div>
		</header>
	)
}
