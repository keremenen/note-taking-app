import NoteButton from './note-button'

export default function NoteOptions({ type }: { type?: 'archive' }) {
	return (
		<>
			<section className="basis-72 bg-white px-5 py-7 space-y-4 border-[#E0E4EA] border-l">
				<>
					<NoteButton actionType="archive">Archive Note</NoteButton>
					<NoteButton actionType="delete">Delete Note</NoteButton>

					{/* <Button
							variant={'outline'}
							className="w-full"
							onClick={() => handleToggleArchiveNote(selectedNoteId)}
						>
							{type === 'archive' ? (
								<>
									<RefreshCcw size={16} />
									<span>Restore note</span>
								</>
							) : (
								<>
									<Archive size={16} />
									<span>Archive note</span>
								</>
							)}
						</Button>
						<Button
							variant={'outline'}
							className="w-full"
							onClick={() => handleDeleteSelectedNote(selectedNoteId)}
						>
							<Trash size={16} />
							Delete Note
						</Button> */}
				</>
			</section>
		</>
	)
}
