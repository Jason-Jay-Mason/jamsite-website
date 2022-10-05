<script>
	import Link from '$lib/footer.link.svelte';
</script>

<footer class="relative w-full bg-analogBlack-400 py-14 px-4 text-center">
	<div class="container m-auto flex max-w-screen-xl flex-col items-center justify-between p-4 md:flex-row">
		<a href="/" class="z-50">
			<img alt="jamsite logo" src="/jamsite-logo-v1.svg" class="w-28 pb-7 md:mr-9 md:w-28" />
		</a>
		<div id="foor-links" class="z-50 flex flex-col items-center justify-center pb-10 md:flex-row md:p-0">
			<Link href="/#contact">Contact Us</Link>
			<Link href="/legal/privacy-policy">Privacy Policy</Link>
			<Link href="/legal/terms-of-service">Terms of Service</Link>
		</div>
		<p class="text-sm  text-white md:text-xs lg:text-sm">All rights reserved - 2022 JamSite LLC</p>
	</div>
</footer>
