import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from './ui/button'

export default function AuthForm({
	type,
}: {
	type: 'login' | 'signup' | 'reset'
}) {
	return (
		<form action="" className="w-full ">
			<div>
				<Label htmlFor="email">Email Address</Label>
				<Input type="text" id="email" placeholder="email@example.com" />
			</div>
			<div className="mb-4 mt-2">
				<Label htmlFor="password">Password</Label>
				<Input type="password" id="password" />
			</div>
			<Button className="w-full mb-4">Login</Button>
		</form>
	)
}
