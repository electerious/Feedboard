export default `
	html {
		/* Colors */
		--background: hsla(110, 6%, 13%, 1);
		--before: hsla(0, 0%, 100%, .05);
		--behind: hsla(0, 0%, 0%, .35);
		--primary: hsla(22, 100%, 50%, 1);
		--destructive: hsla(15, 100%, 50%, 1);
		--destructive-background: hsla(15, 100%, 20%, .6);
		--header: hsla(0, 0%, 100%, 1);
		--text: hsla(0, 0%, 100%, .8);

		/* Sizes */
		--font-size: 150%;

		/* Font Families */
		--font-text: 'Helvetica Neue', sans-serif;
	}

	body {
		display: grid;
		height: 100%;
	}

	#__next {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		min-height: 0;
	}

	next-route-announcer {
		position: absolute;
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
`