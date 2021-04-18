
import style from './icons.module.scss'

export default function GridIcon(props) {
	return (
		<svg className={ style.container } style={ { '--size': props.size } } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<rect className={ props.beforeClass } x="3" y="3" width="7" height="7" />
			<rect className={ props.behindClass } x="14" y="3" width="7" height="7" />
			<rect className={ props.behindClass } x="14" y="14" width="7" height="7" />
			<rect className={ props.behindClass } x="3" y="14" width="7" height="7" />
		</svg>
	)
}