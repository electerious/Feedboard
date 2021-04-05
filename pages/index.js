
import Layout from '../components/layout/Layout'

import style from '../styles/site'
import meta from '../data/meta'

export default function Index() {
	return (
		<Layout style={ style } { ...meta }>
			<h1>Test</h1>
		</Layout>
	)
}