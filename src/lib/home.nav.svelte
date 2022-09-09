<script>
	import Link from '$lib/home.nav.link.svelte';
	import { schedulerModalVisible } from '$lib/stores.js';

	function showModel() {
		schedulerModalVisible.update((v) => (v = true));
	}
</script>

<div class="absolute z-40 w-full bg-analogBlack-400/10 transition-all hover:bg-analogBlack-400">
	<div class="container mx-auto flex max-w-screen-2xl items-center justify-between py-4 px-4 md:px-12">
		<div class="flex items-center text-white">
			<a href="/">
				<img src="/jamsite-logo-v1.svg" class="mr-9 w-[115px] md:w-32" />
			</a>
			<div class="hidden lg:flex">
				<!-- <Link href="#solutions" prefetch={true}>Our Solutions</Link> -->
				<!-- <Link href="/work" prefetch={true}>Our Work</Link> -->
			</div>
		</div>
		<div class="items-center md:flex">
			<span class="hidden md:block">
				<Link href="#contact">Contact</Link>
			</span>
			<button
				on:click={showModel}
				class="ml-5 border-1 border-white bg-white/0 py-3 px-6 text-xs font-light text-white shadow-button shadow-white/10 transition-all hover:bg-white/10 hover:shadow-white/10 md:text-base"
				>Book A Call</button
			>
		</div>
	</div>
</div>
