<script>
	import '../../app.css';
	import Nav from '$lib/home.nav.svelte';
	import Footer from '$lib/footer.svelte';
	import Transition from '$lib/transition-row.svelte';

	export let h1;
</script>

<Nav />

<div class="m-0 h-full bg-analogBlack-300 pb-20">
	<div class="md:pb-30 bg-gameGrid py-32 md:pt-52">
		<h1 class="text-center text-2xl md:text-5xl">{h1}</h1>
	</div>
	<Transition />

	<div class="legal mx-auto max-w-screen-lg px-4 text-white">
		<slot />
	</div>
</div>
<Footer />
