<script>
	import { windowResize } from '$lib/actions/window-resize.js';
	import { onMount } from 'svelte';
	import { DinoGame } from '../game/classes/dino-game';
	export let ai;
	export let container;

	let canvas;
	let frame;
	let windowSize = container.clientWidth;

	function setDimensions() {
		if (canvas) {
			canvas.width = innerWidth;
			canvas.height = container.offsetHeight;
		}
		windowSize = innerWidth;
		cancelAnimationFrame(frame);
		renderLoop();
	}

	function renderLoop() {
		if (canvas) {
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

			frame = requestAnimationFrame(loop);

			function loop(time) {
				if (canvas) {
					frame = requestAnimationFrame(loop);
					if (dinoGame.width !== innerWidth || dinoGame.height !== container.offsetHeight) {
						dinoGame.width = innerWidth;
						canvas.height = container.offsetHeight;
					}
					dinoGame.update(time);
				}
			}
		}

		return () => {
			console.log('here');
			cancelAnimationFrame(frame);
		};
	}

	onMount(renderLoop);
</script>

<div use:windowResize on:windowresize={setDimensions}>
	{#if windowSize > 1000}
		<canvas bind:this={canvas} class=" absolute top-0 z-10 hidden h-full w-full md:block" />
	{/if}
</div>
