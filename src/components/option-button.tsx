import React, { forwardRef, JSX } from 'react'
import { Button, ButtonProps } from './ui/button'

type OptionButtonProps = ButtonProps & {
	children: React.ReactNode
	icon?: JSX.Element
	selected?: boolean
}

const OptionButton = forwardRef<HTMLButtonElement, OptionButtonProps>(
	({ children, icon, selected, onClick, ...props }, ref) => {
		return (
			<Button
				ref={ref}
				className="flex items-center justify-start h-[4.5rem] hover:bg-[#E0E4EA] bg-white w-full rounded-2xl gap-x-4"
				variant="outline"
				onClick={onClick}
				aria-pressed={selected}
				{...props}
			>
				<div className="size-10 rounded-md border-[1px] flex justify-center items-center border-[#E0E4EA] bg-white">
					{icon}
				</div>

				<div className="flex flex-col text-left">{children}</div>

				<input
					type="radio"
					className="ml-auto"
					checked={selected}
					aria-hidden="true"
				/>
			</Button>
		)
	}
)

OptionButton.displayName = 'OptionButton'

export default OptionButton
