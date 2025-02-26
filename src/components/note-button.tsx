import { Archive } from 'lucide-react'
import { Button } from './ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog'
import { Separator } from './ui/separator'

type NoteButtonProps = {
	actionType: 'archive' | 'delete'
	children: React.ReactNode
}

export default function NoteButton({ actionType, children }: NoteButtonProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				{actionType === 'archive' ? (
					<Button variant={'outline'} className="w-full">
						<Archive size={16} />
						{children}
					</Button>
				) : (
					<Button variant="outline" className="w-full">
						{children}
					</Button>
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
								<Button>Archive Note</Button>
							</div>
						</section>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
