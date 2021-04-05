import Head from 'next/head'

export default function Layout(props) {
	return (
		<>
			<Head>
				<title>{ props.title }</title>

				<meta name="description" content={ props.description } />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />

				{ /* Twitter Cards */ }
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@electerious" />

				{ /* Open Graph Protocol */ }
				<meta property="og:type" content="website" />

				{ /* Open Graph protocol and Twitter Cards */ }
				<meta property="og:title" content={ props.title } />
				<meta property="og:description" content={ props.description } />
				<meta property="og:image" content={ new URL('/images/og.jpg', props.url).href } />

				{ /* Global styles */ }
				<style>{ props.style }</style>
			</Head>
			{ props.children }
		</>
	)
}