import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

type NoteFormProps = {
	actionType: 'add' | 'edit'
}

export default function NoteForm({ actionType }: NoteFormProps) {
	return (
		<form>
			<Input />
			<section>tag secion</section>
			<section>last editied</section>
			<Textarea />
		</form>
	)
}
