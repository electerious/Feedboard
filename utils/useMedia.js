import { useReducer, useCallback } from 'react'
import { nanoid } from 'nanoid'

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				[action.id]: {
					id: action.id,
					src: action.src
				}
			}
		default:
			return state
	}
}

export default function useMedia() {
	const [ media, dispatch ] = useReducer(reducer, {})

	const addMedia = useCallback((src) => {
		const id = nanoid()
		dispatch({ type: 'ADD', id, src })
		return id
	}, [ dispatch ])

	return {
		media,
		addMedia
	}
}