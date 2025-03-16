'use client'

import { changePreferedTheme } from '@/actions/actions'
import { User } from '@prisma/client'
import { createContext, useState } from 'react'

type TUserContext = {
	preferedTheme: string
	handleSetPreferedTheme: (theme: string) => void
}

export const UserContext = createContext<TUserContext | null>(null)

type UserContextProviderProps = {
	user: User | null
	children: React.ReactNode
}

export default function UserCotnextProvider({
	user,
	children,
}: UserContextProviderProps) {
	const [preferedTheme, setPreferedTheme] = useState(
		user?.preferedColorScheme || 'system'
	)

	const handleSetPreferedTheme = async (theme: string) => {
		setPreferedTheme(theme)
		const error = await changePreferedTheme(theme)
		if (error) {
			console.log(error.message)
		}
	}
	return (
		<UserContext.Provider value={{ preferedTheme, handleSetPreferedTheme }}>
			{children}
		</UserContext.Provider>
	)
}
