<script>
	import { fade } from 'svelte/transition';
	export let active;
</script>

{#if active}
	<div
		transition:fade
		on:click={() => (active = false)}
		class="z-50 flex justify-center items-center h-screen w-screen absolute bg-analogBlack-300/80"
	>
		<div class="absolute top-7 left-7"><button class="text-white shadow-none">Close</button></div>
		<div class=" w-fit h-fit">
			blah
			<slot />
		</div>
	</div>
{/if}
