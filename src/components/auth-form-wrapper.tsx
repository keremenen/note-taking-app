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
		<section className="bg-white max-w-xl w-full p-12 border-[#E0E4EA] border rounded-2xl shadow-lg flex flex-col items-center">
			<Logo className="mb-4" />

			<h1 className="font-bold text-2xl mb-2">{title && title}</h1>
			<p className="text-[#525866] text-sm text-center mb-6">
				{subtitle && subtitle}
			</p>

			{children}
		</section>
	)
}
