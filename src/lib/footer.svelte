<script>
	import Link from '$lib/footer.link.svelte';
</script>

<div class="py-14 px-4 w-full bg-analogBlack-300 text-center">
	<div
		class="container justify-between m-auto flex items-center flex-col md:flex-row p-4 max-w-screen-xl"
	>
		<a href="/">
			<img src="/jamsite-logo-v1.svg" class="w-28 md:w-28 mr-9" />
		</a>
		<div id="foor-links" class="flex items-center justify-center flex-col md:flex-row pb-10 md:p-0">
			<Link href="/#contact">Contact Us</Link>
			<Link href="/legal/privacy-policy">Privacy Policy</Link>
			<Link href="/legal/terms-of-service">Terms of Service</Link>
		</div>
		<p class="text-white  text-sm md:text-xs lg:text-sm">All rights reserved - 2022 JamSite LLC</p>
	</div>
</div>
