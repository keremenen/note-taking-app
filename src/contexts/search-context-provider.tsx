'use client'

import { createContext, useState } from 'react'

type TSearchContext = {
	searchQuery: string | null
}

export const SearchContext = createContext<TSearchContext | null>(null)

export default function SearchContextProvider() {
	const [searchQuery, setSearchQuery] = useState<string | null>(null)

	return (
		<SearchContext.Provider value={{ searchQuery }}></SearchContext.Provider>
	)
}
