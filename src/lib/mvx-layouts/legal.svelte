<script>
	import '../../app.css';
	import Nav from '$lib/home.nav.svelte';
	import Footer from '$lib/footer.svelte';
	import Transition from '$lib/transition-row.svelte';

	export let h1;
</script>

<Nav />

<div class="h-full bg-analogBlack-300 m-0 pb-20">
	<div class="bg-gameGrid py-32 md:pt-52 md:pb-30">
		<h1 class="text-center text-2xl md:text-5xl">{h1}</h1>
	</div>
	<Transition />

	<div class="legal text-white max-w-screen-lg px-4 mx-auto">
		<slot />
	</div>
</div>
<Footer />
