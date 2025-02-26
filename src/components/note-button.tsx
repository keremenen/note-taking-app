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
import React, { forwardRef, useState } from 'react'

type NoteButtonProps = {
	actionType: 'archive' | 'delete'
	children: React.ReactNode
}

export default function NoteButton({ actionType, children }: NoteButtonProps) {
	const { selectedNoteId, handleToggleArchiveNote, handleDeleteSelectedNote } =
		useNoteContext()

	const [isDialogOpen, setIsDialogOpen] = useState(false)

	return (
		<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
										{actionType === 'archive' ? <Archive /> : <Trash />}
									</div>
								</div>
								<div>
									<DialogTitle className="text-[#0E121B] mb-3">
										{actionType === 'archive' ? 'Archive Note' : 'Delete Note'}
									</DialogTitle>
									<p className="text-[#2B303B] text-sm">
										{actionType === 'archive' ? (
											<>
												Are you sure you want to archive this note? You can find
												it in the Archived Notes section and restore it anytime.
											</>
										) : (
											<>
												Are you sure you want to permanently delete this note?
												This action cannot be undone.
											</>
										)}
									</p>
								</div>
							</section>
							<Separator className="my-4" />
							<div className="gap-x-4 flex justify-end">
								<Button
									variant={'secondary'}
									onClick={() => {
										setIsDialogOpen(false)
									}}
								>
									Cancel
								</Button>
								{actionType === 'archive' ? (
									<Button
										onClick={() => {
											handleToggleArchiveNote(selectedNoteId!)
											setIsDialogOpen(false)
										}}
									>
										Archive Note
									</Button>
								) : (
									<Button
										onClick={() => {
											handleDeleteSelectedNote(selectedNoteId!)
											setIsDialogOpen(false)
										}}
										variant={'destructive'}
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
