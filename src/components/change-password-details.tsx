import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Info } from 'lucide-react'

export default function ChangePasswordDetails() {
	return (
		<section className="p-8 max-w-[528px] w-full">
			<h2 className="font-semibold text-base">Change password</h2>

			<section className="flex flex-col gap-y-4 mt-6">
				<div className="flex flex-col gap-y-2">
					<Label htmlFor="old-password">Old Password</Label>
					<Input type="password" id="old-password" />
				</div>
				<div className="flex flex-col gap-y-2">
					<Label htmlFor="new-password">New Password</Label>
					<Input type="password" id="new-password" />
					<div className="flex gap-x-2 items-center">
						<Info className="size-4" />
						<small>At least 8 characters</small>
					</div>
				</div>
				<div className="flex flex-col gap-y-2">
					<Label htmlFor="confirm-new-password">Confirm New Password</Label>
					<Input type="password" id="confirm-new-password" />
				</div>
				<Button size={'sm'} className="self-end font-normal">
					Save Password
				</Button>
			</section>
		</section>
	)
}
