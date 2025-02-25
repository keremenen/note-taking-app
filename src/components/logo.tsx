import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Logo({ className }: { className?: string }) {
	return (
		<div className={cn('flex items-center gap-2', className)}>
			<div className="size-8 relative">
				<Image src="/Vector.svg" alt="Note app logo" fill />
			</div>
			<p className="font-pacifico text-[1.4375rem]">Notes</p>
		</div>
	)
}
