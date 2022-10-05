<script>
	import '../app.css';
	import Nav from '$lib/home.nav.svelte';
	import Footer from '../lib/footer.svelte';
	import ResizeListener from '$lib/utils/window-resize.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;800&display=swap" rel="stylesheet" />
</svelte:head>
<ResizeListener>
	<Nav />
</ResizeListener>
<slot />
<Footer />
