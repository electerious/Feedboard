
import style from './icons.module.scss'

export default function SmileIcon(props) {
	return (
		<svg className={ style.container } style={ { '--size': props.size } } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<circle className={ props.behindClass } cx="12" cy="12" r="10" />
			<path className={ props.beforeClass } d="M8 14s1.5 2 4 2 4-2 4-2" />
			<line className={ props.behindClass } x1="9" y1="9" x2="9.01" y2="9" />
			<line className={ props.behindClass } x1="15" y1="9" x2="15.01" y2="9" />
		</svg>
	)
}