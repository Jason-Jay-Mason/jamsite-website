<script>
	import AnimationFrame from '$lib/animation-frame.svelte'; //Animation frame to handle opacity changes easily
	import Headline from '$lib/headline.svelte';
	import TopicSelect from '$lib/home.guide.topic-select.svelte';
	import Villians from '$lib/home.villian.svelte';
	import { getStyleValue } from '$lib/utils/animation.js'; //Helper function to get the opacity value for any progress value
	let progress; //Need to bind progress to the animation frame component which will reflect the percent progress through the section
</script>

<!-- desktop -->
<section
	id="guide"
	class="hidden bg-analogBlack-400 bg-subtleGameGrid xl:block  "
	style={`background-image: ${progress > 0.7 ? "url('/subtle-game-grid.svg');" : 'none'}`}
>
	<div
		class="pb-72"
		style={`background-color: rgb(14, 50, 65, ${progress < 0.9 ? getStyleValue(progress, 0.4, 0.5, 0, 1) : getStyleValue(progress, 1.1, 0.5, 1, 0)})`}
	>
		<Villians />
		<AnimationFrame bind:progress frameHeight="h-auto">
			<div class="flex h-auto items-center justify-center pt-56">
				<div class="relative block w-full" id="solutions">
					<Headline subHeadline="The Solution">That's why we created <span class="text-jamAqua-100">JamSite</span></Headline>
					<TopicSelect />
				</div>
			</div>
		</AnimationFrame>
		<!-- ship animation -->
		<div class="relative overflow-hidden pt-72 pb-28">
			<div class="absolute -right-20 flex flex-row" style={`transform: translateX(-${getStyleValue(progress, 1.3, 1, 0, 120)}vw)`}>
				<img
					src="laser.svg"
					alt="laser"
					class={progress > 1.7 ? 'relative mt-1 h-[15px] w-[15px] drop-shadow-smIconYellow filter' : 'hidden'}
					style={`transform: translateX(-${getStyleValue(progress, 1.7, 0.5, 0, 150)}vh) rotate(-90deg)`}
				/>
				<img
					src="laser.svg"
					alt="laser"
					class={progress > 1.8 ? 'relative mt-1 h-[15px] w-[15px] drop-shadow-smIconYellow filter' : 'hidden'}
					style={`transform: translateX(-${getStyleValue(progress, 1.8, 0.5, 0, 150)}vh) rotate(-90deg)`}
				/>
				<img
					src="laser.svg"
					alt="laser"
					class={progress > 1.9 ? 'relative mt-1 h-[15px] w-[15px] drop-shadow-smIconYellow filter' : 'hidden'}
					style={`transform: translateX(-${getStyleValue(progress, 1.9, 0.5, 0, 150)}vh) rotate(-90deg)`}
				/>
				<img src="/j-ship-2.svg" alt="j-ship firing at dino" class="-rotate-90 drop-shadow-black filter" />
				<span class="mt-[1px] h-[19px] w-[9px] bg-gradient-to-r from-villainRed-200 drop-shadow-smIconRed filter " />
			</div>

			<div class="absolute -right-32" style={`transform: translateX(-${getStyleValue(progress, 0, 2, 0, 120)}vw)`}>
				<img
					src="/wordpress-rex-dark2.svg"
					alt="wordpress rex being shot at"
					class="h-[100px] w-[100px] object-cover object-left drop-shadow-black filter"
					style={`transform: rotate(${getStyleValue(progress, 1.2, 1, 0, 360)}deg) translateY(53px)`}
				/>
			</div>
		</div>
	</div>
</section>

<!-- mobile -->
<section id="guide-mobile" class="block bg-analogBlack-400 xl:hidden">
	<Villians />
	<div class="bg-jamAqua-300 py-28 px-3 md:py-44 lg:px-0 ">
		<Headline subHeadline="The Solution">That's why we started <span class="text-jamAqua-100">JamSite</span></Headline>
		<TopicSelect />
	</div>
</section>
