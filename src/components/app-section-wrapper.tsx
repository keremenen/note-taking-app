import React from 'react'

export default function AppSectionWrapper({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<section className="flex flex-row flex-1 overflow-auto dark:bg-neutral-950 dark:text-neutral-0">
			{children}
		</section>
	)
}
