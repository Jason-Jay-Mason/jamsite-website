<script>
	export let type;
	export let href;
	export let styles;
	let buttonStyle = 'flex transition-all justify-center items-center text-white text-base font-light py-6 w-fit px-14 mx-2 ';
</script>

{#if href}
	<a {href} preload>
		<button class={buttonStyle + styles}><slot /></button>
	</a>
{:else}
	<button {type} class={buttonStyle + styles}><slot /></button>
{/if}
