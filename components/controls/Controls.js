import classnames from 'classnames'

import style from './controls.module.scss'

import ShuffleIcon from '../icons/ShuffleIcon'
import ChevronsIcon from '../icons/ChevronsIcon'

export default function Controls(props) {
	return (
		<div className={ style.container }>
			<div className={ style.buttons }>
				<button className={ style.button } disabled={ props.onAddClick == null } title="Fill preview with random images" onClick={ props.onAddClick }>
					<ShuffleIcon size="30" />
				</button>
				<div className={ style.separator } />
				<button className={ classnames(style.button, style.destructive) } disabled={ props.onRemoveClick == null } title="Remove all images from preview" onClick={ props.onRemoveClick }>
					<ChevronsIcon size="40" />
				</button>
			</div>
		</div>
	)
}