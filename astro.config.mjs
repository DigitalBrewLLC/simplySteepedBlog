import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import { remarkReadingTime } from './src/utils/readTime.ts'
import react from '@astrojs/react'

export default defineConfig({
	site: 'https://simplysteeped.com/',
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},
	vite: {
		plugins: [
			alias({
				entries: [
					{
						find: '@/components',
						replacement: path.resolve(__dirname, './src/components')
					},
					{
						find: '@/layouts',
						replacement: path.resolve(__dirname, './src/layouts')
					},
					{
						find: '@/styles',
						replacement: path.resolve(__dirname, './src/styles')
					},
					{
						find: '@/utils',
						replacement: path.resolve(__dirname, './src/utils')
					},
					{
						find: '@/site-config',
						replacement: path.resolve(__dirname, './src/data/site.config.ts')
					}
				]
			})
		]
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				theme: 'material-theme-palenight',
				wrap: true
			},
			drafts: true
		}),
		sitemap(),
		tailwind(),
		partytown({
			config: {
				forward: ['dataLayer.push']
			}
		}),
		react()
	]
})
