'use client'

import { useNoteContext } from '@/lib/hooks'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { FieldValues, useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { getFormDefaultValues, getReadableDate } from '@/lib/utils'
import { Clock, Tag } from 'lucide-react'

type NoteFormProps = {
	actionType: 'add' | 'edit'
}

export default function NoteForm({ actionType }: NoteFormProps) {
	const { selectedNote } = useNoteContext()
	const { register, handleSubmit, reset } = useForm({
		defaultValues: getFormDefaultValues(actionType, selectedNote),
	})

	useEffect(() => {
		reset(getFormDefaultValues(actionType, selectedNote))
	}, [actionType, selectedNote, reset])

	const onSubmit = (data: FieldValues) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{/* Note Title */}
			<Input
				id="title"
				{...register('title', { required: true })}
				className="!text-2xl font-bold w-full bg-inherit outline-none rounded-sm border-none mb-4 px-0"
			/>

			{/* Note details */}
			<section className="text-sm">
				<NoteDetailsRowWrapper icon={<Tag size={16} />} label="Tags">
					<Input
						id="tags"
						className="bg-inherit  rounded-sm border-none h-full p-1 min-w-full"
						{...register('tags', {
							required: true,
						})}
					/>
				</NoteDetailsRowWrapper>

				<NoteDetailsRowWrapper icon={<Clock size={16} />} label="Last edited:">
					{actionType && selectedNote ? (
						getReadableDate(selectedNote.updatedAt)
					) : (
						<span className="opacity-50">Not saved yet</span>
					)}
				</NoteDetailsRowWrapper>
			</section>

			{/* Note content */}
			<Textarea id="content" {...register('content', { required: true })} />

			{/* Note controls */}
			<button type="submit">Submit</button>
		</form>
	)
}

type NoteDetailsRowWrapperProps = {
	icon: React.ReactNode
	label: string
	children: React.ReactNode
}

function NoteDetailsRowWrapper({
	icon,
	label,
	children,
}: NoteDetailsRowWrapperProps) {
	return (
		<div className="flex h-8 mb-2 items-center">
			<span className="flex items-center max-w-28 gap-x-2 text-[#2B303B] w-full">
				{icon}
				{label}
			</span>
			<span className="h-auto px-1">{children}</span>
		</div>
	)
}
