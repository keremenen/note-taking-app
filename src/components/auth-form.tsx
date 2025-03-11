'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { logIn, signUp } from '@/actions/actions'
import { useActionState } from 'react'
import AuthFormButton from './auth-form-button'

type AuthFormProps = {
	type: 'login' | 'signup'
}

export default function AuthForm({ type }: AuthFormProps) {
	const [signUpState, dispatchSignUp] = useActionState(signUp, undefined)
	const [logInState, dispatchLogIn] = useActionState(logIn, undefined)

	return (
		<form
			action={type === 'signup' ? dispatchSignUp : dispatchLogIn}
			className="w-full "
		>
			<div>
				<Label htmlFor="email">Email Address</Label>
				<Input
					name="email"
					type="email"
					id="email"
					placeholder="email@example.com"
					defaultValue={(signUpState?.payload?.email || '') as string}
					required
				/>
			</div>

			<div className="mb-4 mt-2">
				<Label htmlFor="password">Password</Label>
				<Input
					name="password"
					type="password"
					id="password"
					minLength={8}
					required
				/>
			</div>
			<AuthFormButton type={type} />
			{signUpState?.message && (
				<p className="text-sm text-red-500">{signUpState.message}</p>
			)}
			{logInState?.message && (
				<p className="text-sm text-red-500">{logInState.message}</p>
			)}
		</form>
	)
}
