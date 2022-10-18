<script>
	import '../app.css';
	import Nav from '$lib/home.nav.svelte';
	import Footer from '../lib/footer.svelte';
	import ResizeListener from '$lib/utils/window-resize.svelte';
	import { onMount } from 'svelte';
	import { partytownSnippet } from '@builder.io/partytown/integration';

	let snippet;
	onMount(() => {
		snippet.innerText = partytownSnippet();
		console.log(snippet);
	});
</script>

<svelte:head>
	<script>
		partytown = {
			forward: ['dataLayer.push']
		};
	</script>
	<script bind:this={snippet}></script>

	<script type='text/partytown' src="https://www.googletagmanager.com/gtag/js?id=G-SS9SH3S2P5"></script>
	<script type='text/partytown'>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-SS9SH3S2P5');
	</script>

	<!-- <script type='text/partytown'> -->
	<!-- 	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': -->
	<!-- 	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], -->
	<!-- 	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= -->
	<!-- 	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); -->
	<!-- 	})(window,document,'script','dataLayer','GTM-M6TQKPM'); -->
	<!-- </script> -->

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;800&display=swap" rel="stylesheet" />
</svelte:head>
<ResizeListener>
	<Nav />
</ResizeListener>
<slot />
<Footer />
