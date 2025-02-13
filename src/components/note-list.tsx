'use client'

import { useNoteContext } from '@/lib/hooks'
import { Button } from './ui/button'
// import { Separator } from './ui/separator'

export default function NotesList() {
	const { notes, handleSetSelectedNoteId } = useNoteContext()

	return (
		<section className="basis-72  border-[#E0E4EA] border-r px-5  bg-white overflow-auto  ">
			<div className="mb-4 sticky top-0 bg-white pt-7">
				<Button className="w-full mb-4 ">Create new note</Button>
			</div>
			<section>
				<ul className="space-y-2">
					{notes.map((note) => (
						<li
							className="px-2 py-1 hover:bg-[#F3F5F8] rounded-md hover:cursor-pointer"
							key={Math.random()}
						>
							<button
								onClick={() => handleSetSelectedNoteId(note.id)}
								className="text-left"
							>
								<h3 className="font-semibold mb-3">{note.title}</h3>
								<div className="space-x-2 mb-3">
									{note.tags.map((tag) => (
										<span
											key={tag}
											className="bg-[#E0E4EA] rounded-sm text-[12px] px-[6px] py-[2px]"
										>
											{tag}
										</span>
									))}
								</div>

								<p className="text-[12px]">{note.createdAt}</p>
							</button>
						</li>
					))}
				</ul>
			</section>
		</section>
	)
}
