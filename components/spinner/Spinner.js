import classnames from 'classnames'

import style from './spinner.module.scss'

export default function Spinner() {
	return (
		<div className={ style.container }>
			<div className={ classnames(style.circle, style.background) }></div>
			<div className={ classnames(style.circle, style.foreground) }></div>
		</div>
	)
}