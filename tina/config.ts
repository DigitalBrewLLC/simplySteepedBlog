import { CATEGORIES } from '../src/data/categories.ts'
import { defineConfig } from 'tinacms'

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
	branch,
	clientId: null, // Get this from tina.io
	token: null, // Get this from tina.io

	build: {
		outputFolder: 'admin',
		publicFolder: 'public'
	},
	media: {
		tina: {
			mediaRoot: '/src/assets',
			publicFolder: ''
		}
	},
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Blog Post',
				path: 'src/content/blog',
				format: 'mdx',
				fields: [
					{
						type: 'image',
						label: 'Cover Image',
						required: true,
						name: 'heroImage',
						description: 'The image used for the cover of the post'
					},
					{
						type: 'string',
						required: true,
						name: 'category',
						label: 'Category',
						description: 'Select a category for this post',
						options: [...CATEGORIES]
					},
					{
						type: 'string',
						label: 'description',
						required: true,
						name: 'description',
						description: 'A short description of the post'
					},
					{
						type: 'datetime',
						name: 'pubDate',
						label: 'Publication Date',
						required: true
					},
					{
						name: 'draft',
						label: 'Draft',
						type: 'boolean',
						description: 'If this is checked the post will not be published'
					},
					{
						type: 'string',
						name: 'tags',
						required: true,
						label: 'Tags',
						description: 'Tags for this post',
						list: true,
						ui: {
							component: 'tags'
						}
					},
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'rich-text',
						label: 'Body',
						name: 'body', // Updated name for clarity
						isBody: true,
						templates: [
							// BlogImage Component
							{
								label: 'BlogImage',
								name: 'BlogImage',
								fields: [
									{
										type: 'image',
										label: 'Image',
										name: 'src',
										description: 'Upload or select an image'
									},
									{
										type: 'string',
										label: 'Alt Text',
										name: 'alt',
										description: 'Alternative text for the image'
									}
								]
							},
							// BlogImage Component
							{
								label: 'SideBySideImages',
								name: 'SideBySideImages',
								fields: [
									{
										type: 'image',
										label: 'Image',
										name: 'image1',
										description: 'Upload or select an image'
									},
									{
										type: 'string',
										label: 'Alt Text',
										name: 'alt1',
										description: 'Alternative text for the image'
									},
									{
										type: 'image',
										label: 'Image',
										name: 'image2',
										description: 'Upload or select an image'
									},
									{
										type: 'string',
										label: 'Alt Text',
										name: 'alt2',
										description: 'Alternative text for the image'
									}
								]
							}
						]
					}
				]
			}
		]
	}
})
