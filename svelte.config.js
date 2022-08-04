import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-netlify'
import path from 'path'
import { fileURLToPath } from 'url'

const dirname = path.resolve(fileURLToPath(import.meta.url), '../')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svx', '.svelte'],

			layout: {
				legal: path.join(dirname, './src/lib/mvx-layouts/legal.svelte')
			},

			smartypants: {
				dashes: 'oldschool'
			}
		})
	],
	kit: {
		adapter: adapter()
	}
}

export default config
