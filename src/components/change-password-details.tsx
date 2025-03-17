'use client'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Info } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
	TChangePasswordForm,
	changePasswordFormSchema,
} from '@/lib/validations'
import { changePassword } from '@/actions/actions'
import { useState } from 'react'

export default function ChangePasswordDetails() {
	const [successChangeMessage, setSuccessChangeMessage] = useState('')
	const [errorChangeMessage, setErrorChangeMessage] = useState('')

	const {
		register,
		trigger,
		getValues,
		formState: { errors },
	} = useForm<TChangePasswordForm>({
		resolver: zodResolver(changePasswordFormSchema),
	})

	return (
		<section className="p-8 max-w-[528px] w-full">
			<h2 className="font-semibold text-base">Change password</h2>

			<form
				action={async () => {
					const result = await trigger()
					if (!result) return
					setSuccessChangeMessage('')
					setErrorChangeMessage('')
					const { errorMessage, successMessage } = await changePassword(
						getValues()
					)
					if (errorMessage) {
						setErrorChangeMessage(errorMessage)
						return
					} else if (successMessage) {
						setSuccessChangeMessage(successMessage)
						return
					}
				}}
				className="flex flex-col gap-y-4 mt-6"
			>
				<div className="flex flex-col gap-y-2">
					<Label htmlFor="old-password">Current Password</Label>
					<Input type="password" {...register('currentPassword')} />
					{errors.currentPassword && (
						<p className="text-red-500 text-sm">
							{errors.currentPassword.message}
						</p>
					)}
				</div>
				<div className="flex flex-col gap-y-2">
					<Label htmlFor="new-password">New Password</Label>
					<Input type="password" {...register('newPassword')} />
					<div className="flex gap-x-2 items-center">
						<Info className="size-4" />
						<small>At least 8 characters</small>
					</div>
					{errors.newPassword && (
						<p className="text-red-500 text-sm">{errors.newPassword.message}</p>
					)}
				</div>
				<div className="flex flex-col gap-y-2">
					<Label htmlFor="confirm-new-password">Confirm New Password</Label>
					<Input type="password" {...register('confirmNewPassword')} />
					{errors.confirmNewPassword && (
						<p className="text-red-500 text-sm">
							{errors.confirmNewPassword.message}
						</p>
					)}
				</div>
				{
					// Show success message
					successChangeMessage && (
						<p className="text-green-500 text-sm">{successChangeMessage}</p>
					)
				}
				{
					// Show error message
					errorChangeMessage && (
						<p className="text-red-500 text-sm">{errorChangeMessage}</p>
					)
				}
				<Button size={'sm'} className="self-end font-normal" type="submit">
					Save Password
				</Button>
			</form>
		</section>
	)
}
