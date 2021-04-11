
import style from './content.module.scss'

export default function Content(props) {
	return (
		<div className={ style.container }>
			{ props.children }
		</div>
	)
}