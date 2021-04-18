
import style from './feature.module.scss'

export default function Feature(props) {
	return (
		<div className={ style.container }>
			{ props.icon }
			<h2 className={ style.title }>{ props.title }</h2>
			<p>{ props.children }</p>
		</div>
	)
}