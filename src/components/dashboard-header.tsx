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
	const { handleSetSetQuery } = useSearchContext()

	return (
		<header className=" px-8 py-4 border-b border-[#E0E4EA] flex items-center h-20">
			{pathName.includes('archive') ? (
				<HeaderHeading>Archived Notes</HeaderHeading>
			) : pathName.includes('settings') ? (
				<HeaderHeading>Settings</HeaderHeading>
			) : tag ? (
				<HeaderHeading>
					<span className="opacity-50">Notes tagged with</span> {tag}
				</HeaderHeading>
			) : (
				<HeaderHeading>All Notes</HeaderHeading>
			)}

			<div className="ml-auto flex items-center gap-4">
				<Input
					placeholder="Search by title, content, or tags…"
					onChange={(e) => {
						handleSetSetQuery(e.target.value)
					}}
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
