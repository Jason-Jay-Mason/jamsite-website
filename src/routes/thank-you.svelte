<script>
	import '../app.css';
	import Footer from '$lib/footer.svelte';
	import Button from '$lib/button.svelte';
	import DinoGame from '$lib/home.hero.dino-game.svelte';
	let messageVisible = true;
</script>

<div
	class="z-0 relative h-screen min-h-hero flex flex-col justify-end bg-analogBlack-300 bg-gameGrid"
>
	{#if messageVisible}
		<div class="max-w-xl h-full text-center m-auto flex flex-col justify-center items-center">
			<h1 class="font-bold text-3xl md:text-6xl pb-6">Right on!</h1>
			<h2 class="pb-6 leading-xl md:leading-xl text-base md:text-lg font-light font-body">
				Thanks for contacting us, we will get back to you ASAP.<br />
				<span class="font-bold"> PS...control the ship with the J, K, L, and A keys. </span>.
			</h2>
			<div class="flex justify-center items-center">
				<Button
					href="/"
					styles="bg-jamAqua-100/50 hover:bg-jamAqua-100 shadow-jamAqua-100/30 hover:shadow-jamAqua-100/90 "
					>Back to home</Button
				>
				<span
					class="hidden md:block"
					on:click={() => {
						messageVisible = false;
					}}
				>
					<Button
						styles="bg-jamAqua-100/50 hover:bg-jamAqua-100 shadow-jamAqua-100/30 hover:shadow-jamAqua-100/90 "
						>Hide Message</Button
					>
				</span>
			</div>
		</div>
	{/if}

	<DinoGame ai={false} />
	<Footer />
</div>
