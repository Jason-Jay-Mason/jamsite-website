<script>
	import Corner from '$lib/box-highlight.corner.svelte';
</script>

<div
	class="relative w-fit bg-analogBlack-300/80 mx-auto max-w-full px-4 md:px-9 border-white/60 border-1"
>
	<Corner xPosition="left" yPosition="top" />
	<Corner xPosition="right" yPosition="top" />
	<Corner xPosition="left" yPosition="bottom" />
	<Corner xPosition="right" yPosition="bottom" />
	<slot />
</div>
