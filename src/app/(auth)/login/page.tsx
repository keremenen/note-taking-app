import AuthForm from '@/components/auth-form'
import AuthFormWrapper from '@/components/auth-form-wrapper'
import { Button } from '@/components/ui/button'
import { Separator } from '@radix-ui/react-separator'
import Link from 'next/link'

import React from 'react'

export default function LogInPage() {
	return (
		<main className="flex justify-center items-center min-h-screen">
			<AuthFormWrapper
				title="Welcome to Note"
				subtitle="Please log in to continue"
			>
				<AuthForm type="login" />

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
			</AuthFormWrapper>
		</main>
	)
}
