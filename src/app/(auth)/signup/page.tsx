import AuthForm from '@/components/auth-form'
import AuthFormWrapper from '@/components/auth-form-wrapper'

import { Separator } from '@radix-ui/react-separator'
import Link from 'next/link'

export default function SignUpPage() {
	return (
		<main className="flex justify-center items-center min-h-screen">
			<AuthFormWrapper
				title="Create Your Account"
				subtitle="Sign up to start organizing your notes and boost your productivity."
			>
				<AuthForm type="signup" />
				<Separator className="mb-4" />

				<div className="flex gap-x-2">
					<p>Already have an account? </p>
					<Link href="/login"> Login</Link>
				</div>
			</AuthFormWrapper>
		</main>
	)
}
