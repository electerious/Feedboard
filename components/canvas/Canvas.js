import { useRef, useEffect } from 'react'

const drawCoverImage = (canvas, image) => {
	const scale = Math.max(canvas.width / image.width, canvas.height / image.height)
	const context = canvas.getContext('2d')

	const x = (canvas.width / 2) - (image.width / 2) * scale
	const y = (canvas.height / 2) - (image.height / 2) * scale

	context.drawImage(image, x, y, image.width * scale, image.height * scale)
}

export default function Canvas(props) {
	const canvas = useRef()

	// A size that fills the max size of the container and still looks sharp on
	// a screen with a higher pixel density. Prerendering with the real device pixel
	// ratio isn't possible on the server so this is a compromise that should look
	// good on most screens without being too big. It also avoids the need to do a
	// getBoundingClientRect on the client, causing layout performance issues.
	const size = 160 * 2

	// Draw image to canvas once loaded
	useEffect(() => {
		const image = new Image()

		image.decoding = 'async'
		image.onload = () => {
			const isMounted = canvas.current != null
			if (isMounted === false) return

			drawCoverImage(canvas.current, image)
			props.onLoad?.()
		}

		image.src = props.src
	}, [ props.src ])

	return (
		<canvas ref={ canvas } width={ size } height={ size } className={ props.className } />
	)
}