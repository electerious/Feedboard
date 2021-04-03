
import style from './icons.module.scss'

export default function SwitchIcon(props) {
	return (
		<svg className={ style.container } style={ { '--size': props.size } } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<polyline points="23 4 23 10 17 10"></polyline>
			<path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
		</svg>
	)
}