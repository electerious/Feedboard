
import style from './icons.module.scss'

export default function MatchIcon(props) {
	return (
		<svg className={ style.container } style={ { '--size': props.size } } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<rect className={ props.beforeClass } x="9" y="9" width="13" height="13" rx="2" ry="2" />
			<path className={ props.behindClass } d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
		</svg>
	)
}