interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'SimplySteeped', // Site author
	title: 'SimplySteeped | Tea Blog - Where your tea journey begins',
	description:
		'Explore the vibrant world of tea with our tea reviews, brewing guides, and the latest in tea innovations and trends. Dive into a treasure trove of articles on green, black, herbal teas, and more, perfect for enthusiasts and newcomers alike',
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post',
	paginationSize: 6
}
