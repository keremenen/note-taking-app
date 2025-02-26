'use client'
import { Archive, Trash } from 'lucide-react'
import { Button, ButtonProps } from './ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog'
import { Separator } from './ui/separator'
import { useNoteContext } from '@/lib/hooks'
import React, { forwardRef } from 'react'

type NoteButtonProps = {
	actionType: 'archive' | 'delete'
	children: React.ReactNode
}

export default function NoteButton({ actionType, children }: NoteButtonProps) {
	const { selectedNoteId, handleToggleArchiveNote, handleDeleteSelectedNote } =
		useNoteContext()

	return (
		<Dialog>
			<DialogTrigger asChild>
				{actionType === 'archive' ? (
					<NoteOptionButton>
						<Archive />
						{children}
					</NoteOptionButton>
				) : (
					<NoteOptionButton>
						<Trash />
						{children}
					</NoteOptionButton>
				)}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogDescription className="flex" asChild>
						<section className="flex flex-col">
							<section className="flex">
								<div className="basis-24">
									<div className="bg-[#F3F5F8] flex items-center justify-center size-10 rounded-lg">
										<Archive />
									</div>
								</div>
								<div>
									<DialogTitle className="text-[#0E121B] mb-3">
										Archive Note
									</DialogTitle>
									<p className="text-[#2B303B] text-sm">
										Are you sure you want to archive this note? You can find it
										in the Archived Notes section and restore it anytime.
									</p>
								</div>
							</section>
							<Separator className="my-4" />
							<div className="gap-x-4 flex justify-end">
								<Button variant={'secondary'}>Cancel</Button>
								{actionType === 'archive' ? (
									<Button
										onClick={() => handleToggleArchiveNote(selectedNoteId!)}
									>
										Archive Note
									</Button>
								) : (
									<Button
										onClick={() => handleDeleteSelectedNote(selectedNoteId!)}
									>
										Delete Note
									</Button>
								)}
							</div>
						</section>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

type NoteOptionButtonProps = ButtonProps

const NoteOptionButton = forwardRef<HTMLButtonElement, NoteOptionButtonProps>(
	({ children, ...props }, ref) => {
		return (
			<Button ref={ref} variant="outline" className="w-full" {...props}>
				{children}
			</Button>
		)
	}
)

NoteOptionButton.displayName = 'NoteOptionButton'
