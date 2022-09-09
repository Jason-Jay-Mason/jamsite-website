<script>
	import Cta from '$lib/home.hero.cta.svelte';
	import BoxHighlight from '$lib/box-highlight.svelte';
	import VideoBtn from '$lib/home.hero.video.btn.svelte';
	import TypeWriter from '$lib/type-writer.svelte';
	import DinoGame from '$lib/home.hero.dino-game.svelte';
	import { schedulerModalVisible } from '$lib/stores.js';
	import { videoModalVisible } from '$lib/stores.js';

	function showScheduleModel() {
		schedulerModalVisible.update((v) => (v = true));
	}
	function showVideoModel() {
		videoModalVisible.update((v) => (v = true));
	}

	let heroContainer;
	let messages = ['ranks higher.', 'loads faster.', 'looks better.', 'wins more sales.'];
</script>

<div bind:this={heroContainer} class="relative h-[100vh] min-h-hero w-full bg-analogBlack-400 bg-subtleGameGrid xl:-mb-[65vh] xl:h-[150vh]">
	<div class="relative mx-auto flex h-[100vh] min-h-hero max-w-3xl flex-col items-center justify-center px-2 text-center">
		<h1 class="pb-9 text-4xl font-bold leading-normal text-white/90 sm:text-5xl sm:leading-normal md:text-7xl md:leading-snug ">
			Get a website that<br />
			<BoxHighlight classes="px-4 md:px-9"><TypeWriter data={messages}>ranks higher</TypeWriter></BoxHighlight>
		</h1>
		<h2 class="font-body text-base font-light leading-xl text-white/90 md:text-lg md:leading-xl">
			We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Schedule a
			call and get a free site audit.
		</h2>
		<div class="container relative z-20 flex flex-col justify-center pt-12 md:flex-row">
			<span on:click={showScheduleModel}>
				<Cta href="/" color="jamAqua-100">Schedule Now</Cta>
			</span>
			<!-- <span on:click={showVideoModel}> -->
			<!-- 	<VideoBtn href="/" color="jamAqua-100">Watch Video</VideoBtn> -->
			<!-- </span> -->
		</div>
	</div>
	{#if heroContainer && heroContainer.offsetHeight}
		<DinoGame ai={true} container={heroContainer} />
	{/if}
</div>
