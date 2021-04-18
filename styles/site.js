export default `
	html {
		/* Colors */
		--background: hsla(45, 36%, 96%, 1);
		--primary: hsla(22, 100%, 50%, 1);
		--header: hsla(110, 6%, 13%, 1);
		--text: hsla(110, 6%, 33%, 1);

		/* Sizes */
		--font-size: 150%;

		/* Font Families */
		--font-header: 'Staatliches', sans-serif;
		--font-text: 'Source Serif Pro', serif;
		--font-ui: 'Source Sans Pro', sans-serif;
	}

	body {
		min-height: 100%;
	}

	@media (max-width: 1800px) {
		html {
			--font-size: 140%;
		}
	}

	@media (max-width: 1000px) {
		html {
			--font-size: 120%;
		}
	}

	@media (max-width: 600px) {
		html {
			--font-size: 100%;
		}
	}

	@font-face {
		font-family: 'Staatliches';
		src: url('/fonts/staatliches-regular.woff2') format('woff2');
		font-style: normal;
		font-weight: 400;
	}

	@font-face {
		font-family: 'Source Serif Pro';
		src: url('/fonts/source-serif-pro-regular.woff2') format('woff2');
		font-style: normal;
		font-weight: 400;
	}

	@font-face {
		font-family: 'Source Sans Pro';
		src: url('/fonts/source-sans-pro-bold.woff2') format('woff2');
		font-style: normal;
		font-weight: 700;
	}
`