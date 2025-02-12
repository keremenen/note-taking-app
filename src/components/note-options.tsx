import { Button } from './ui/button'
import { Archive, Trash } from 'lucide-react'

export default function NoteOptions() {
	return (
		<section className="basis-72 bg-white px-5 py-7 space-y-4 border-[#E0E4EA] border-l">
			<Button variant={'outline'} className="w-full">
				<Archive size={16} />
				Archive Note
			</Button>
			<Button variant={'outline'} className="w-full">
				<Trash size={16} />
				Delete Note
			</Button>
		</section>
	)
}
