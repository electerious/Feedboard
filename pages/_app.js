import '../styles/reset.scss'
import '../styles/html.scss'
import '../styles/body.scss'
import '../styles/next.scss'
import '../styles/fonts.scss'

export default function App({ Component, pageProps }) {
	return <Component { ...pageProps } />
}