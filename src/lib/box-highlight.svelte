<script>
	import Corner from '$lib/box-highlight.corner.svelte';
	export let classes;
</script>

<div class={'relative w-fit mx-auto max-w-full  border-white/60 border-1 ' + classes}>
	<Corner xPosition="left" yPosition="top" />
	<Corner xPosition="right" yPosition="top" />
	<Corner xPosition="left" yPosition="bottom" />
	<Corner xPosition="right" yPosition="bottom" />
	<slot />
</div>
