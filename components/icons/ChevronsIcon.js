
import style from './icons.module.scss'

export default function ChevronsIcon(props) {
	return (
		<svg className={ style.container } style={ { '--size': props.size } } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<polyline points="11 17 6 12 11 7"></polyline>
			<polyline points="18 17 13 12 18 7"></polyline>
		</svg>
	)
}