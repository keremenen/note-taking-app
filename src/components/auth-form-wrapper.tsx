import Logo from './logo'

type AuthFormWrapperProps = {
	children: React.ReactNode
	title: string
	subtitle: string
}

export default function AuthFormWrapper({
	children,
	title,
	subtitle,
}: AuthFormWrapperProps) {
	return (
		<main className="flex justify-center items-center min-h-screen dark:bg-neutral-950 dark:text-neutral-0">
			<section className="bg-white max-w-xl w-full p-12 border-[#E0E4EA] border rounded-2xl shadow-lg flex flex-col items-center dark:bg-neutral-800/10 dark:text-neutral-0 dark:border-neutral-700">
				<Logo className="mb-4" />

				<h1 className="font-bold text-2xl mb-2">{title && title}</h1>
				<p className="text-[#525866] text-sm text-center mb-6 dark:text-neutral-400">
					{subtitle && subtitle}
				</p>

				{children}
			</section>
		</main>
	)
}
