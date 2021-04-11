
import style from './feature.module.scss'

export default function Feature(props) {
	return (
		<div className={ style.container }>
			<h2>{ props.title }</h2>
			<p>{ props.children }</p>
		</div>
	)
}