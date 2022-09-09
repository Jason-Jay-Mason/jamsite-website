<script>
	import Form from '$lib/home.contact.form.svelte';
	import Headline from '$lib/headline.svelte';
</script>

<section id="contact" class="bg-analogBlack-400 py-28 lg:py-44">
	<div class="relative z-10 w-full bg-analogBlack-400">
		<div class="m-auto max-w-screen-md text-center">
			<Headline subHeadline="Got questions? Let’s talk.">Send us a message</Headline>
			<div class="-mt-7 lg:-mt-10">
				<Form />
			</div>
		</div>
	</div>
</section>
