<script>
	export let message;
	export let headline;
	import Footer from '$lib/footer.svelte';
	import Button from '$lib/button.svelte';
	import DinoGame from '$lib/home.hero.dino-game.svelte';
	let messageVisible = true;
	let container;
</script>

<div bind:this={container} class="relative z-30 flex h-screen min-h-hero flex-col justify-end bg-analogBlack-400 bg-subtleGameGrid">
	{#if messageVisible}
		<div class="m-auto flex h-full max-w-xl flex-col items-center justify-center text-center">
			<h1 class=" pb-3 text-3xl font-bold md:text-6xl lg:pb-6">{headline}</h1>
			<h2 class="pb-6 font-body text-base font-light leading-xl md:text-lg md:leading-xl">
				{message}
				<br />
				<span class="hidden font-bold xl:block"> PS...control the ship with the J, K, L, and A keys. </span>
			</h2>
			<div class="z-50 flex items-center justify-center">
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

	{#if container && container.offsetHeight}
		<DinoGame ai={false} {container} />
	{/if}
	<Footer />
</div>
