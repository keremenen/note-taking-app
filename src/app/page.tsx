import AuthForm from '@/components/auth-form'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'

import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function Home() {
	return (
		<main className="flex justify-center items-center min-h-screen">
			<section className="bg-white max-w-xl w-full p-12 border-[#E0E4EA] border rounded-2xl shadow-lg flex flex-col items-center">
				<Logo className="mb-4" />

				<h1 className="font-bold text-2xl mb-2">Welcome to Note</h1>
				<p className="text-[#525866] text-sm text-center mb-6">
					Please log in to continue
				</p>

				<AuthForm />

				<Separator className="mb-4" />
				<p className="mb-4">Or log in with:</p>
				<Button variant="outline" className="w-full">
					Google
				</Button>
				<Separator className="my-4" />

				<div className="flex gap-x-2">
					<p>No account yet?</p>
					<Link href="/signup"> Sign up</Link>
				</div>
			</section>
		</main>
	)
}
