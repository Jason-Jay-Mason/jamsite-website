<script>
	import { windowResize } from '$lib/actions/window-resize.js';
	import { onMount } from 'svelte';
	import { DinoGame } from '../game/classes/dino-game';
	export let ai;

	let canvas;

	function setDimensions() {
		canvas.width = innerWidth;
		canvas.height = innerHeight;
	}

	onMount(() => {
		canvas.width = innerWidth;
		canvas.height = innerHeight * 1.5;
		const ctx = canvas.getContext('2d');

		const dinoGame = new DinoGame({
			dinosaurCount: 4,
			context: ctx,
			width: canvas.width,
			height: canvas.height,
			isAi: ai
		});

		let frame = requestAnimationFrame(loop);

		function loop(time) {
			frame = requestAnimationFrame(loop);
			if (dinoGame.width !== innerWidth) {
				dinoGame.width = innerWidth;
			}
			dinoGame.update(time);
		}

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<canvas
	use:windowResize
	on:windowresize={setDimensions}
	bind:this={canvas}
	class="hidden md:block z-10 absolute top-0 w-full h-full"
/>
