import { sveltekit } from '@sveltejs/kit/vite';
// import path from 'path';
// import { partytownVite } from '@builder.io/partytown/utils';

const config = {
	plugins: [
		sveltekit(),
		// partytownVite({
  //       dest: path.join(__dirname, 'static', '~partytown'),
		// })
	]
};

export default config;
