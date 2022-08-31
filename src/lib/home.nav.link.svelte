<script>
	export let href;
	export let prefetch;
	let styles = 'text-white/90 px-6 hover:text-white text-sm md:text-base font-base';
</script>

{#if prefetch}
	<a sveltekit:prefetch class={styles} {href}><slot /></a>
{:else}
	<a class={styles} {href}><slot /></a>
{/if}
