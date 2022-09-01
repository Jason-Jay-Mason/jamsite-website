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

	let messages = ['ranks higher.', 'loads faster.', 'looks better.', 'wins more sales.'];
</script>

<div class="relative bg-analogBlack-400 w-full h-auto md:h-[150vh] -mb-[90vh] bg-subtleGameGrid">
	<div
		class="relative pt-56 px-2 mx-auto flex justify-center items-center h-auto flex-col text-center max-w-3xl"
	>
		<h1
			class="text-white/90 text-3xl sm:text-5xl md:text-7xl font-bold leading-normal md:leading-snug sm:leading-normal pb-9 "
		>
			Get a website that<br />
			<BoxHighlight><TypeWriter data={messages}>ranks higher</TypeWriter></BoxHighlight>
		</h1>
		<h2 class="text-white/90 leading-xl md:leading-xl text-base md:text-lg font-normal font-body">
			We’re a web design and development agency on a mission to defend businesses from cyberspace
			dinosaurs and feed starving children. Book a call and get a free site audit.
		</h2>
		<div class="z-20 container relative flex justify-center flex-col md:flex-row pt-12">
			<span on:click={showScheduleModel}>
				<Cta href="/" color="jamAqua-100">Book A Call</Cta>
			</span>
			<span on:click={showVideoModel}>
				<VideoBtn href="/" color="jamAqua-100">Watch Video</VideoBtn>
			</span>
		</div>
	</div>
	<DinoGame ai={true} />
</div>
