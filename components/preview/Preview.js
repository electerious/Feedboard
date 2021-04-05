import { useRef, useEffect } from 'react'

import Placeholder from '../placeholder/Placeholder'
import Slot from '../slot/Slot'

import style from './preview.module.scss'

export default function Preview(props) {
	const grid = useRef()
	const skipNextEffect = useRef(false)

	useEffect(() => {
		if (skipNextEffect.current === true) {
			skipNextEffect.current === false
			return
		}

		grid.current.scrollTop = 0
	}, [ props.slots ])

	const totalCount = props.slots.length
	const placeholdersToFillRow = totalCount % 3 === 0 ? 0 : 3 - totalCount % 3
	const placeholdersToFillGrid = 15 - totalCount
	const placeholdersToGenerate = Math.max(placeholdersToFillGrid, placeholdersToFillRow)

	const placeholders = Array(placeholdersToGenerate).fill(undefined).map((_, index) => (
		<Placeholder key={ index } />
	))

	const slots = props.slots.map((slot) => {
		const hasOnSwitchClick = props.onSlotSwitchClick != null
		const hasOnDeleteClick = props.onSlotDeleteClick != null

		const onSwitchClick = () => {
			skipNextEffect.current = true
			props.onSlotSwitchClick(slot.id)
		}

		const onDeleteClick = () => {
			skipNextEffect.current = true
			props.onSlotDeleteClick(slot.id)
		}

		return (
			<Slot
				key={ slot.id }
				src={ slot.src }
				onSwitchClick={ hasOnSwitchClick === true ? onSwitchClick : null }
				onDeleteClick={ hasOnDeleteClick === true ? onDeleteClick : null }
			/>
		)
	}).reverse()

	return (
		<div className={ style.container }>
			<div ref={ grid } className={ style.grid }>
				{ placeholders }
				{ slots }
			</div>
		</div>
	)
}