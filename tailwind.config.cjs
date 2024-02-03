/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const colorScheme = {
	leaf: '#457D58',
	textLeaf: '#3b6a4b',
	oatmeal: '#F6F6E9',
	black: '#0f0f0f'
}

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
		extend: {
			colors: {
				white: '#f8f9fa',
				leaf: colorScheme.leaf,
				textLeaf: colorScheme.textLeaf, //darker leaf, more accessible for text
				oatmeal: colorScheme.oatmeal,
				black: colorScheme.black
			},
			fontFamily: {
				body: ['Arsenal', ...defaultTheme.fontFamily.sans]
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
