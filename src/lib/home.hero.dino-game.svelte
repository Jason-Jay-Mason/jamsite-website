<script>
	import { windowResize } from '$lib/actions/window-resize.js';
	import { onMount } from 'svelte';
	import { DinoGame } from '../game/classes/dino-game';
	export let ai;
	export let container;

	let canvas;

	function setDimensions() {
		canvas.width = innerWidth;
		canvas.height = container.offsetHeight;
	}

	onMount(() => {
		canvas.width = innerWidth;
		canvas.height = container.offsetHeight;
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
			if (dinoGame.width !== innerWidth || dinoGame.height !== container.offsetHeight) {
				dinoGame.width = innerWidth;
				canvas.height = container.offsetHeight;
			}
			dinoGame.update(time);
		}

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<canvas use:windowResize on:windowresize={setDimensions} bind:this={canvas} class="absolute top-0 z-10 block h-full w-full" />
