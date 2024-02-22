import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import { remarkReadingTime } from './src/utils/readTime.ts'
import react from '@astrojs/react'
import path from 'path'
import { fileURLToPath } from 'url'

// Convert the file URL to a file path
const __filename = fileURLToPath(import.meta.url)
// Get the directory name from the file path
const __dirname = path.dirname(__filename)

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
		resolve: {
			alias: {
				// Define your path aliases here
				'@/components': path.resolve(__dirname, './src/components'),
				'@/layouts': path.resolve(__dirname, './src/layouts'),
				'@/styles': path.resolve(__dirname, './src/styles'),
				'@/utils': path.resolve(__dirname, './src/utils'),
				'@/site-config': path.resolve(__dirname, './src/data/site.config.ts')
			}
		}
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
