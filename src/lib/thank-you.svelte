<script>
	export let message;
	export let headline;
	import Footer from '$lib/footer.svelte';
	import Button from '$lib/button.svelte';
	import DinoGame from '$lib/home.hero.dino-game.svelte';
	let messageVisible = true;
</script>

<div class="relative z-0 flex h-screen min-h-hero flex-col justify-end bg-analogBlack-300 bg-gameGrid">
	{#if messageVisible}
		<div class="m-auto flex h-full max-w-xl flex-col items-center justify-center text-center">
			<h1 class="pb-6 text-3xl font-bold md:text-6xl">{headline}</h1>
			<h2 class="pb-6 font-body text-base font-light leading-xl md:text-lg md:leading-xl">
				{message}
				<br />
				<span class="font-bold"> PS...control the ship with the J, K, L, and A keys. </span>.
			</h2>
			<div class="flex items-center justify-center">
				<Button href="/" styles="bg-jamAqua-100/50 hover:bg-jamAqua-100 shadow-jamAqua-100/30 hover:shadow-jamAqua-100/90 ">Back to home</Button>
				<span
					class="hidden md:block"
					on:click={() => {
						messageVisible = false;
					}}
				>
					<Button styles="bg-jamAqua-100/50 hover:bg-jamAqua-100 shadow-jamAqua-100/30 hover:shadow-jamAqua-100/90 ">Hide Message</Button>
				</span>
			</div>
		</div>
	{/if}

	<DinoGame ai={false} />
	<Footer />
</div>
