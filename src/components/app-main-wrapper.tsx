export default function AppMainWrapper({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className="min-h-screen flex flex-col max-h-screen w-full dark:bg-neutral-950 dark:text-neutral-0">
			{children}
		</main>
	)
}
