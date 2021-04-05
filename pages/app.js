import { useCallback } from 'react'
import arrayShuffle from 'array-shuffle'

import Layout from '../components/layout/Layout'
import Library from '../components/library/Library'
import Controls from '../components/controls/Controls'
import Preview from '../components/preview/Preview'

import style from '../styles/app'
import meta from '../data/meta'
import useMedia from '../utils/useMedia'
import useStack from '../utils/useStack'

export default function App() {
	const { media, addMedia } = useMedia()
	const [ slots, addSlot, replaceSlot, removeSlot, includesSlot ] = useStack(media)

	const imageEnhancer = useCallback((id) => {
		return { active: includesSlot(id) }
	}, [ includesSlot ])

	const [ images, addImage ] = useStack(media, imageEnhancer)

	const inactiveImages = images.filter((image) => image.active === false)

	const addToLibrary = (src) => {
		const id = addMedia(src)
		addImage(id)
	}

	const switchSlot = (id) => {
		const prevId = id
		const nextId = arrayShuffle(inactiveImages)[0].id

		replaceSlot(prevId, nextId)
	}

	const addAllToPreview = () => arrayShuffle(inactiveImages).forEach((image) => addSlot(image.id))
	const removeAllFromPreview = () => removeSlot()

	const canAddAllToPreview = inactiveImages.length > 0
	const canRemoveAllFromPreview = slots.length > 0
	const canSwitchSlot = inactiveImages.length > 0

	return (
		<Layout style={ style } { ...meta }>
			<Library
				images={ images }
				onAdd={ addToLibrary }
				onImageCheck={ addSlot }
				onImageUncheck={ removeSlot }
			/>
			<Controls
				onAddClick={ canAddAllToPreview === true ? addAllToPreview : null }
				onRemoveClick={ canRemoveAllFromPreview === true ? removeAllFromPreview : null }
			/>
			<Preview
				slots={ slots }
				onSlotSwitchClick={ canSwitchSlot === true ? switchSlot : null }
				onSlotDeleteClick={ removeSlot }
			/>
		</Layout>
	)
}