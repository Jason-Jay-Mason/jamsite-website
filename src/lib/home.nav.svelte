<script>
	import Link from '$lib/home.nav.link.svelte';
	import Logo from '../../static/jamsite-logo.svg';
	import { schedulerModalVisible } from '$lib/stores.js';

	function showModel() {
		schedulerModalVisible.update((v) => (v = true));
	}
</script>

<div class="z-40 absolute bg-analogBlack-300/60 w-full transition-all hover:bg-analogBlack-300 ">
	<div
		class="container max-w-screen-2xl mx-auto flex justify-between items-center py-4 px-4 md:px-12 "
	>
		<div class="flex items-center text-white">
			<img src="/jamsite-logo-v1.svg" class="w-28 md:w-28 mr-9" />
			<div class="hidden md:flex">
				<Link href="/about" prefetch={true}>About Us</Link>
				<Link href="/work" prefetch={true}>Our Work</Link>
				<Link href="/pricing" prefetch={true}>Pricing</Link>
			</div>
		</div>
		<div class="items-center md:flex">
			<span class="hidden md:block">
				<Link href="#contact">Contact</Link>
			</span>
			<button
				on:click={showModel}
				class="bg-white/0 hover:bg-white/10 ml-5 text-white border-1 border-white py-3 px-6 text-xs md:text-base shadow-button shadow-white/10 hover:shadow-white/10 transition-all"
				>Book A Call</button
			>
		</div>
	</div>
</div>
