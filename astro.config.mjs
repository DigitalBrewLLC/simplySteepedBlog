import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import { remarkReadingTime } from './src/utils/readTime.ts'
import react from '@astrojs/react'
import alias from 'vite-plugin-alias'

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
						replacement: './src/components'
					},
					{
						find: '@/layouts',
						replacement: './src/layouts'
					},
					{
						find: '@/styles',
						replacement: './src/styles'
					},
					{
						find: '@/utils',
						replacement: './src/utils'
					},
					{
						find: '@/site-config',
						replacement: './src/data/site.config.ts'
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
