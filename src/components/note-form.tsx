'use client'

import { useNoteContext } from '@/lib/hooks'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { getFormDefaultValues, getReadableDate } from '@/lib/utils'
import { Clock, Tag } from 'lucide-react'
import { Button } from './ui/button'

type TNoteForm = {
	title: string
	content: string
	status: string

	tags: string
}

type NoteFormProps = {
	actionType: 'add' | 'edit'
}

export default function NoteForm({ actionType }: NoteFormProps) {
	const { selectedNote, handleEditSelectedNote, handleAddNote } =
		useNoteContext()
	const { register, reset, getValues } = useForm<TNoteForm>({
		defaultValues: getFormDefaultValues(actionType, selectedNote),
	})

	useEffect(() => {
		reset(getFormDefaultValues(actionType, selectedNote))
	}, [actionType, selectedNote, reset])

	return (
		<form
			action={async () => {
				const noteData = getValues()
				if (actionType === 'edit') {
					handleEditSelectedNote(selectedNote!.id, noteData)
				} else {
					handleAddNote(noteData)
				}
			}}
			className="flex flex-col min-h-full"
		>
			{/* Note Title */}
			<Input
				id="title"
				{...register('title', { required: true })}
				className="!text-2xl font-bold w-full bg-inherit outline-none rounded-sm border-none mb-4 px-0 focus:!ring-0 !ring-offset-0"
				placeholder="Enter a title..."
				autoFocus
			/>

			{/* Note details */}
			<section className="text-sm">
				<NoteDetailsRowWrapper icon={<Tag size={16} />} label="Tags">
					<Input
						id="tags"
						className="bg-inherit  rounded-sm border-none h-full p-1 min-w-full px-1"
						{...register('tags', {
							required: true,
						})}
						placeholder="Add tags separated by commas (e.g. Work, Planning)"
					/>
				</NoteDetailsRowWrapper>

				<NoteDetailsRowWrapper icon={<Clock size={16} />} label="Last edited:">
					{actionType && selectedNote ? (
						<span className="px-1">
							{getReadableDate(selectedNote.updatedAt)}
						</span>
					) : (
						<span className="opacity-50 px-1">Not saved yet</span>
					)}
				</NoteDetailsRowWrapper>
			</section>

			{/* Note content */}
			<Textarea
				id="content"
				{...register('content', { required: true })}
				placeholder="Start typing your note here…"
				className="flex-1 mb-4"
				spellCheck={false}
			/>

			{/* Note controls */}
			<div className="flex gap-4">
				<Button type="submit">Save Note</Button>
				<Button variant="outline">Cancel</Button>
			</div>
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
		<div className="flex h-8 mb-1 items-center">
			<span className="flex items-center max-w-28 gap-x-2 text-[#2B303B] w-full">
				{icon}
				{label}
			</span>
			<span className="h-auto w-full">{children}</span>
		</div>
	)
}
