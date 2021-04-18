import classnames from 'classnames'

import Layout from '../components/layout/Layout'
import Content from '../components/content/Content'
import Feature from '../components/feature/Feature'
import GridIcon from '../components/icons/GridIcon'
import MatchIcon from '../components/icons/MatchIcon'
import LockIcon from '../components/icons/LockIcon'
import SmileIcon from '../components/icons/SmileIcon'

import globalStyles from '../styles/site'
import meta from '../data/meta'
import style from './index.module.scss'

export default function Index() {
	return (
		<Layout style={ globalStyles } { ...meta }>
			<Content>
				<div className={ style.head }>
					<h1 className={ style.header }>Plan &amp; Design<br />your <mark>Feed</mark></h1>
					<p className={ style.text }>Add your photos and start planning your feed by finding the ones that look good together. Perfect for Instagram and other feed-driven sites. Feedboard is a free tool that will help you showcase your photos in the best way possible.</p>
					<div className={ style.buttons }>
						<a className={ classnames(style.button, style.primary) } href="/app">Design your feed</a>
						<a className={ classnames(style.button, style.secondary) } href="https://github.com/electerious/Feedboard">See on GitHub</a>
					</div>
				</div>
				<div className={ style.preview }>
					<iframe className={ style.app } src="/app" />
					<svg className={ classnames(style.blob, style.before) } viewBox="0 0 490 440">
						<path d="M374.525497,121.436621 C425.119128,165.606327 487.898752,198.780595 489.857215,233.834426 C491.924481,268.794278 433.388195,305.633692 382.794564,347.547924 C332.200933,389.556133 289.549959,436.733138 243.417272,439.834416 C197.284585,442.935693 147.452579,401.961242 102.843141,359.953033 C58.2337028,318.038801 18.8468333,274.996832 5.24639497,220.30158 C-8.3540434,165.606327 3.94075289,99.1638117 48.5501907,54.9941058 C93.1596286,10.8243999 170.083708,-11.0724968 227.749567,5.56162647 C285.524229,22.1017717 323.931867,77.266915 374.525497,121.436621" />
					</svg>
					<svg className={ classnames(style.blob, style.behind) } viewBox="0 0 577 537">
						<path d="M558.313856,278.144621 C544.919199,365.752586 539.913115,439.095439 502.976334,475.118452 C465.904254,511.141464 397.036776,509.844635 318.29243,520.363355 C239.548084,530.882074 150.791571,553.360434 89.0949698,517.337422 C27.2630693,481.31441 -7.64421801,386.790026 1.42085274,302.063901 C10.4859235,217.337776 63.6586519,142.265819 125.490552,93.562706 C187.187153,44.8595935 257.678226,22.3812338 340.752158,8.98067329 C423.82609,-4.41988726 519.482881,-8.88674078 556.554961,39.8163718 C593.491742,88.6635763 571.708512,190.536655 558.313856,278.144621 Z" />
					</svg>
				</div>
				<div className={ style.features }>
					<Feature icon={ <GridIcon size="3" beforeClass={ style.iconHighlight } behindClass={ style.iconDefault } /> } title="A step ahead">Plan your feed and know which photos to post next. Always be a step ahead in your planning.</Feature>
					<Feature icon={ <MatchIcon size="3" beforeClass={ style.iconHighlight } behindClass={ style.iconDefault } /> } title="The perfect match">See how your final feed will look and which photos work best beside each other.</Feature>
					<Feature icon={ <LockIcon size="3" beforeClass={ style.iconHighlight } behindClass={ style.iconDefault } /> } title="Stay safe">I don't care about your data. All your photos will stay on your device and Feedboard will never upload them to a server.</Feature>
					<Feature icon={ <SmileIcon size="3" beforeClass={ style.iconHighlight } behindClass={ style.iconDefault } /> } title="Free like a bird">No sign up, no fees, no bullshit. Feedboard is open-source and works in the browser. Built to make you smile.</Feature>
				</div>
			</Content>
		</Layout>
	)
}