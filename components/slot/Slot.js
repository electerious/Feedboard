import style from './slot.module.scss'

import Canvas from '../canvas/Canvas'
import { Interactive as CircleButton } from '../circleButton/CircleButton'
import SwitchIcon from '../icons/SwitchIcon'
import TrashIcon from '../icons/TrashIcon'

export default function Slot(props) {
	const hasSwitchButton = props.onSwitchClick != null
	const hasDeleteButton = props.onDeleteClick != null

	const switchButton = (
		<CircleButton title="Replace preview with random image" onClick={ props.onSwitchClick }>
			<SwitchIcon size=".7" />
		</CircleButton>
	)

	const deleteButton = (
		<CircleButton destructive={ true } title="Delete image from preview" onClick={ props.onDeleteClick }>
			<TrashIcon size=".7" />
		</CircleButton>
	)

	return (
		<div className={ style.container }>
			<Canvas
				className={ style.canvas }
				src={ props.src }
			/>
			<div className={ style.buttons }>
				{ hasSwitchButton === true && switchButton }
				{ hasDeleteButton === true && deleteButton }
			</div>
		</div>
	)
}