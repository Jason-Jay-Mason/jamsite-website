<script>
	import { onMount } from 'svelte';
	export let bindings;
	$: {
		console.log(bindings[0].binding);
	}
</script>

<div>
	<slot />
</div>
