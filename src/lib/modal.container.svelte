<script>
	import { fade } from 'svelte/transition';
	import { outclickaction } from '$lib/actions/out-click.js';
	export let store;
	let active;

	//this component accepts a store that reflects this modals visibility value
	store.subscribe((value) => {
		active = value;
	});

	//this is the update function the deactivates this model when sombody clicks out. I am using the custom action api for the outclick event.
	function hideModal() {
		store.update((v) => (v = false));
	}
</script>

{#if active}
	<div
		transition:fade
		class="z-40 flex justify-center items-center h-screen w-screen fixed max-h-screen overflow-y-scroll bg-analogBlack-300/95"
	>
		<div class="absolute top-7 left-7"><button class="text-white shadow-none">Close</button></div>
		<div use:outclickaction on:outclick={hideModal} class=" h-full py-12 w-auto">
			<slot />
		</div>
	</div>
{/if}
