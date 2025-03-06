'use client'
import { useSearchContext } from '@/lib/hooks'
import { Input } from './ui/input'
import { Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

export default function DashboardHeader() {
	const pathName = usePathname()
	const searchParams = useSearchParams()
	const tag = searchParams.get('tag')
	const { searchQuery, handleSetSetQuery } = useSearchContext()

	const getHeaderTitle = () => {
		if (pathName.includes('archive')) return 'Archived Notes'
		if (pathName.includes('settings')) return 'Settings'
		if (tag)
			return (
				<>
					<span className="opacity-50">Notes tagged with</span> {tag}
				</>
			)
		if (searchQuery)
			return (
				<>
					<span className="opacity-50">Showing results for</span> {searchQuery}
				</>
			)
		return 'All Notes'
	}

	return (
		<header className="px-8 py-4 border-b border-[#E0E4EA] flex items-center h-20">
			<HeaderHeading>{getHeaderTitle()}</HeaderHeading>
			<div className="ml-auto flex items-center gap-4">
				<Input
					placeholder="Search by title, content, or tags…"
					onChange={(e) => handleSetSetQuery(e.target.value)}
					value={searchQuery ? searchQuery : ''}
					className="w-80"
				/>
				<Link href="/app/dashboard/settings">
					<Settings className="ml-auto" />
				</Link>
			</div>
		</header>
	)
}

function HeaderHeading({ children }: { children: React.ReactNode }) {
	return <h1 className="font-bold text-2xl ">{children}</h1>
}
