<script>
	import Transition from '$lib/transition-row.svelte';
	import Cta from '$lib/home.hero.cta.svelte';
	import BoxHighlight from '$lib/box-highlight.svelte';
	import VideoBtn from '$lib/home.hero.video.btn.svelte';
	import TypeWriter from '$lib/type-writer.svelte';
	import DinoGame from '$lib/home.hero.dino-game.svelte';
	let messages = ['ranks higher.', 'loads faster.', 'looks better.', 'wins more sales.'];
</script>

<div class="z-0 relative bg-analogBlack-300 w-full h-auto md:h-screen md:min-h-hero bg-gameGrid">
	<div
		class="relative -top-6 container py-28 px-2  mx-auto  flex justify-center items-center h-full flex-col text-center max-w-3xl"
	>
		<h1
			class="text-3xl sm:text-5xl md:text-7xl font-bold leading-normal md:leading-snug sm:leading-normal pb-9"
		>
			Get a website that<br />
			<BoxHighlight><TypeWriter data={messages}>ranks higher</TypeWriter></BoxHighlight>
		</h1>
		<h2
			class="mix-blend-difference leading-xl md:leading-xl text-base md:text-lg font-light font-body"
		>
			We’re a web design and development agency on a mission to defend businesses from cyberspace
			dinosaurs and feed starving children. Book a call and get a free site audit.
		</h2>
		<div class="container relative flex justify-center flex-col md:flex-row pt-12">
			<Cta href="/" color="jamAqua-100">Book A Call</Cta>
			<VideoBtn href="/" color="jamAqua-100">Watch Video</VideoBtn>
		</div>
	</div>
	<DinoGame ai={true} />
	<Transition />
</div>
