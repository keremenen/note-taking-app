import Image from 'next/image'

export default function Logo() {
	return (
		<div className="flex items-center gap-x-2">
			<Image src="/Vector.svg" alt="Note app logo" height={28} width={28} />
			<p className="font-pacifico text-[1.4375rem]">Notes</p>
		</div>
	)
}
