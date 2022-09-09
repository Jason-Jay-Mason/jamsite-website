<script>
	export let href;
	export let prefetch;
	let styles = 'text-white/90 py-2 md:py-0 lg:px-6 md:px-3  hover:text-white text-sm md:text-xs lg:text-sm';
</script>

{#if prefetch}
	<a sveltekit:prefetch class={styles} {href}><slot /></a>
{:else}
	<a class={styles} {href}><slot /></a>
{/if}
