import '../styles/reset.scss'
import '../styles/html.scss'
import '../styles/body.scss'

export default function App({ Component, pageProps }) {
	return (
		<Component { ...pageProps } />
	)
}