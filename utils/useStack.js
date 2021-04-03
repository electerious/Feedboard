import { useReducer, useMemo, useCallback } from 'react'

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return [ ...state, action.id ]
		case 'REPLACE':
			return state.map((id) => {
				if (id === action.prevId) return action.nextId
				return id
			})
		case 'REMOVE':
			if (action.id == null) return []
			return state.filter((id) => id !== action.id)
		default:
			return state
	}
}

export default function useStack(data, enhancer) {
	const [ items, dispatch ] = useReducer(reducer, [])

	const enhancedItems = useMemo(() => {
		return items.map((id) => ({
			...data[id],
			...enhancer?.(id)
		}))
	}, [ items, data, enhancer ])

	const add = useCallback((id) => {
		dispatch({ type: 'ADD', id })
	}, [ dispatch ])

	const replace = useCallback((prevId, nextId) => {
		dispatch({ type: 'REPLACE', prevId, nextId })
	}, [ dispatch ])

	const remove = useCallback((id) => {
		dispatch({ type: 'REMOVE', id })
	}, [ dispatch ])

	const includes = useCallback((id) => {
		return items.includes(id) === true
	}, [ items ])

	return [ enhancedItems, add, replace, remove, includes ]
}