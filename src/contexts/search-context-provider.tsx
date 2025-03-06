'use client'

import { createContext, useState } from 'react'

type TSearchContext = {
	searchQuery: string
	handleSetSetQuery: (query: string) => void
}

export const SearchContext = createContext<TSearchContext | null>(null)

type SearchContextProviderProps = {
	children: React.ReactNode
}

export default function SearchContextProvider({
	children,
}: SearchContextProviderProps) {
	const [searchQuery, setSearchQuery] = useState('')

	const handleSetSetQuery = (query: string) => {
		setSearchQuery(query)
	}

	return (
		<SearchContext.Provider value={{ searchQuery, handleSetSetQuery }}>
			{children}
		</SearchContext.Provider>
	)
}
