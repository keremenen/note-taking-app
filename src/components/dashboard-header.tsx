'use client'
import { useSearchContext } from '@/lib/hooks'
import { Input } from './ui/input'
import { Settings } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function DashboardHeader({ title }: { title: string }) {
	const { searchQuery, handleSetSetQuery } = useSearchContext()

	const searchParams = useSearchParams()
	const tag = searchParams.get('tag')

	return (
		<header className="px-8 py-4 border-b border-neutral-200 flex items-center h-20  text-neutral-950 bg-neutral-0 dark:bg-neutral-950 dark:text-neutral-0">
			<HeaderHeading>
				{searchQuery ? (
					<>
						<span className="opacity-50">Showing search results for: </span>
						{searchQuery}
					</>
				) : tag ? (
					<>
						<span className="opacity-50">Notes tagged: </span>
						{tag}
					</>
				) : (
					title
				)}
			</HeaderHeading>
			<div className="ml-auto flex items-center gap-4">
				<Input
					placeholder="Search by title, content, or tags…"
					onChange={(e) => handleSetSetQuery(e.target.value)}
					value={searchQuery || ''}
					className="w-80"
				/>
				<Link href="/app/dashboard/settings">
					<Settings className="ml-auto dark:text-neutral-400" />
				</Link>
			</div>
		</header>
	)
}

function HeaderHeading({ children }: { children: React.ReactNode }) {
	return <h1 className="font-bold text-2xl">{children}</h1>
}
