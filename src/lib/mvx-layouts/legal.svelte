<script>
	import '../../app.css';
	import Layout from '../../routes/__layout-home.svelte';
	// import Nav from '$lib/home.nav.svelte';
	// import Footer from '$lib/footer.svelte';

	export let h1;
</script>

<Layout>
	<div class="m-0 h-full bg-analogBlack-300 pb-20">
		<div class="md:pb-30 bg-gameGrid py-32 md:pt-52">
			<h1 class="text-center text-2xl md:text-5xl">{h1}</h1>
		</div>

		<div class="legal mx-auto max-w-screen-lg px-4 py-20 text-white">
			<slot />
		</div>
	</div>
</Layout>
