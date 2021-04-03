import { useState } from 'react'
import classnames from 'classnames'

import Spinner from '../spinner/Spinner'
import Canvas from '../canvas/Canvas'
import { Decoration as CircleButton } from '../circleButton/CircleButton'
import CheckIcon from '../icons/CheckIcon'

import style from './image.module.scss'

export default function Image(props) {
	const [ isLoading, setIsLoading ] = useState(true)

	return (
		<button
			className={ classnames(style.container, props.active === true && style.active) }
			onClick={ props.onClick }
			title={ props.title }
		>
			<div className={ style.spinner }>
				{ isLoading === true && <Spinner /> }
			</div>
			<Canvas
				className={ style.canvas }
				src={ props.src }
				onLoad={ () => setIsLoading(false) }
			/>
			{ isLoading === false && <div className={ style.border } /> }
			<div className={ style.selection } />
			<div className={ style.buttons }>
				<CircleButton>
					<CheckIcon size="20" />
				</CircleButton>
			</div>
		</button>
	)
}