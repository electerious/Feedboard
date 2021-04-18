
import style from './icons.module.scss'

export default function LockIcon(props) {
	return (
		<svg className={ style.container } style={ { '--size': props.size } } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path className={ props.beforeClass } d="M7 11V7a5 5 0 0 1 10 0v4" />
			<rect className={ props.behindClass } x="3" y="11" width="18" height="11" rx="2" ry="2" />
		</svg>
	)
}