import NoteDetails from '@/components/note-details'
import NoteList from '@/components/note-list'
import NoteOptions from '@/components/note-options'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Archive, Clock, Settings, Tag, Trash } from 'lucide-react'

export default function DashboardPage() {
	return (
		<main className="min-h-screen flex flex-col max-h-screen w-full">
			<header className=" px-8 py-4 border-b border-[#E0E4EA] flex items-center h-20">
				<h1 className="font-bold text-2xl ">All notes</h1>
				<div className="ml-auto flex items-center gap-4">
					<Input
						placeholder="Search by title, content, or tags…"
						className="w-80"
					/>
					<Settings className="ml-auto" />
				</div>
			</header>
			<section className="flex flex-row flex-1 overflow-auto">
				{/* NOTES LIST */}

				<NoteList />
				{/* NOTE DETAILS */}
				<NoteDetails />
				{/* NOTE OPTIONS */}
				<NoteOptions />
			</section>
		</main>
	)
}
