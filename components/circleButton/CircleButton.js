import classnames from 'classnames'

import style from './circleButton.module.scss'

export const Decoration = (props) => {
	return (
		<div
			className={ classnames(style.container, props.destructive === true && style.destructive) }
			title={ props.title }
		>
			{ props.children }
		</div>
	)
}

export const Interactive = (props) => {
	return (
		<button
			className={ classnames(style.container, props.destructive === true && style.destructive) }
			title={ props.title }
			onClick={ props.onClick }
		>
			{ props.children }
		</button>
	)
}