import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = {
	extensions: ['.svelte', '.svelte.md', '.md', '.svx', '.svelte'],
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
};

export default config;
