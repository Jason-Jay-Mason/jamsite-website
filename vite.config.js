import { sveltekit } from '@sveltejs/kit/vite';
import { partytownVite } from '@builder.io/partytown/utils';
import path from 'path'

const config = {
	plugins: [
		sveltekit(),
		partytownVite({
			dest: path.join(__dirname, 'static', '~partytown'),
		}),
	]
};

export default config;
