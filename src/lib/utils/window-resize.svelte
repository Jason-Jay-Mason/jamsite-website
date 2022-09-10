<script>
	import { windowWidth } from '$lib/stores.js';
	import { onMount } from 'svelte';
	import { windowResize } from '$lib/actions/window-resize.js';

	function setWindowSize() {
		windowWidth.update((v) => (v = innerWidth));
	}

	onMount(setWindowSize);
</script>

<div use:windowResize on:windowresize={setWindowSize}>
	<slot />
</div>
