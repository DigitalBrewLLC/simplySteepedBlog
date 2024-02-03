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
	title: 'SimplySteeped | Tea Blog - Where your tea journey begins', // Site title.
	description:
		'Explore the vibrant world of tea with our tea reviews, brewing guides, and the latest in tea innovations and trends. Dive into a treasure trove of articles on green, black, herbal teas, and more, perfect for enthusiasts and newcomers alike',
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
