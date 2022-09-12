<script>
	import '../app.css';
	import Nav from '$lib/home.nav.svelte';
	import Footer from '../lib/footer.svelte';
	import ResizeListener from '$lib/utils/window-resize.svelte';
</script>

<ResizeListener>
	<Nav />
</ResizeListener>
<slot />
<Footer />
