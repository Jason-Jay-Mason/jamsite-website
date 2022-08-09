<script>
	import AnimationFrame from '$lib/animation-frame.svelte';
	let div;
</script>

<AnimationFrame
	bindings={[
		{
			binding: div,
			transitions: [
				{
					start: {
						frame: 0,
						value: 0,
						length: 2,
						curve: 'liniar'
					},
					end: {
						frame: 15,
						value: 1,
						length: 2,
						curve: 'liniar'
					},
					style: 'opacity'
				}
			]
		}
	]}
>
	<div bind:this={div} />
</AnimationFrame>
