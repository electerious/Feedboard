import Image from '../image/Image'
import Add from '../add/Add'

import style from './library.module.scss'

export default function Library(props) {
	const images = props.images.map((image) => {
		return (
			<Image
				key={ image.id }
				src={ image.src }
				active={ image.active }
				title={ image.active === true ? 'Remove from preview' : 'Add to preview' }
				onClick={ () => image.active === true ? props.onImageUncheck(image.id) : props.onImageCheck(image.id) }
			/>
		)
	})

	return (
		<div className={ style.container }>
			<div className={ style.images }>
				{ images }
			</div>
			<div className={ style.add }>
				<Add onAdd={ props.onAdd } />
			</div>
		</div>
	)
}