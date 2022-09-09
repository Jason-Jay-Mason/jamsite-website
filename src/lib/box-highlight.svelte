<script>
	import Corner from '$lib/box-highlight.corner.svelte';
	export let classes;
</script>

<div class={'relative mx-auto w-fit max-w-full  border-1 border-white/60 ' + classes}>
	<Corner xPosition="left" yPosition="top" />
	<Corner xPosition="right" yPosition="top" />
	<Corner xPosition="left" yPosition="bottom" />
	<Corner xPosition="right" yPosition="bottom" />
	<slot />
</div>
