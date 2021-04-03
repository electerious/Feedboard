
import style from './add.module.scss'

export default function Add(props) {
	const onChange = () => {
		const input = event.target
		const files = input.files

		;[].forEach.call(files, async (file) => {
			const reader = new FileReader()

			reader.onload = () => props.onAdd(reader.result)
			reader.onerror = (error) => console.error(error)

			reader.readAsDataURL(file)
		})
	}

	return (
		<label className={ style.container }>
			<input className={ style.input } type="file" accept="image/*" multiple onChange={ onChange }></input>
			<svg className={ style.icon } viewBox="0 0 24 24">
				<path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path>
			</svg>
		</label>
	)
}