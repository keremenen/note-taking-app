'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from './ui/button'
import { logIn, signUp } from '@/actions/actions'
import { useActionState } from 'react'

type AuthFormProps = {
	type: 'login' | 'signup' | 'reset'
}

export default function AuthForm({ type }: AuthFormProps) {
	const [signUpError, dispatchSignUp] = useActionState(signUp, undefined)
	const [logInError, dispatchLogIn] = useActionState(logIn, undefined)

	return (
		<form
			action={type === 'signup' ? dispatchSignUp : dispatchLogIn}
			className="w-full "
		>
			<div>
				<Label htmlFor="email">Email Address</Label>
				<Input
					name="email"
					type="text"
					id="email"
					placeholder="email@example.com"
				/>
			</div>
			<div className="mb-4 mt-2">
				<Label htmlFor="password">Password</Label>
				<Input name="password" type="password" id="password" />
			</div>
			<Button className="w-full mb-4">Login</Button>
			{signUpError && (
				<p className="text-sm text-red-500">{signUpError.message}</p>
			)}
			{logInError && (
				<p className="text-sm text-red-500">{logInError.message}</p>
			)}
		</form>
	)
}
