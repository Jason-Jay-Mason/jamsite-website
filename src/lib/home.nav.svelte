<script>
	import Link from '$lib/home.nav.link.svelte';
</script>

<div class="z-40 absolute bg-analogBlack-300/60 w-full transition-all hover:bg-analogBlack-300 ">
	<div class="container max-w-screen-xl mx-auto flex justify-between items-center py-4 px-4">
		<div class="flex items-center text-white">
			<h2 class="text-2xl pr-9 font-bold">JamSite.</h2>
			<div class="hidden md:flex">
				<Link href="/about" prefetch={true}>About Us</Link>
				<Link href="/work" prefetch={true}>Our Work</Link>
				<Link href="/pricing" prefetch={true}>Pricing</Link>
			</div>
		</div>
		<div class="items-center hidden md:flex">
			<Link href="#contact">Contact</Link>
			<button
				class="bg-white/0 hover:bg-white/10 ml-5 text-white border-1 border-white py-3 px-6 text-base shadow-button shadow-white/10 hover:shadow-white/10 transition-all"
				>Book A Call</button
			>
		</div>
	</div>
</div>
