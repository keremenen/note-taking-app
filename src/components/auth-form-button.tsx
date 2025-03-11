import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'

type AuthButtonProps = {
	type: 'login' | 'signup'
}

export default function AuthFormButton({ type }: AuthButtonProps) {
	const { pending } = useFormStatus()

	return (
		<Button className="w-full mb-4" disabled={pending}>
			{type === 'login' ? 'Log In' : 'Sign Up'}
		</Button>
	)
}
