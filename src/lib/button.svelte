<script>
	export let type;
	export let href;
	export let styles;
	let buttonStyle = 'text-white text-base font-light py-6 w-fit px-14 ';
</script>

{#if href}
	<a {href} preload>
		<button class={buttonStyle + styles}><slot /></button>
	</a>
{:else}
	<button {type} class={buttonStyle + styles}><slot /></button>
{/if}
