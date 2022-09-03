<script>
	import AnimationFrame from '$lib/animation-frame.svelte'; //Animation frame to handle opacity changes easily
	import Headline from '$lib/headline.svelte';
	import TopicSelect from '$lib/home.guide.topic-select.svelte';
	import Villians from '$lib/home.villian.svelte';
	import { getStyleValue } from '$lib/utils/animation.js'; //Helper function to get the opacity value for any progress value
	let progress; //Need to bind progress to the animation frame component which will reflect the percent progress through the section
</script>

<!-- desktop -->
<section id="guide" class="hidden xl:block bg-analogBlack-300 ">
	<div
		class="pb-72"
		style={`background-color: rgb(14, 50, 65, ${
			progress < 0.9
				? getStyleValue(progress, 0.4, 0.5, 0, 1)
				: getStyleValue(progress, 1.2, 0.5, 1, 0)
		})`}
	>
		<Villians />
		<AnimationFrame bind:progress frameHeight="h-auto">
			<div class="h-auto flex justify-center items-center pt-56">
				<div class="relative block w-full">
					<Headline subHeadline="The Solution"
						>That's why we created <span class="text-jamAqua-100">JamSite</span></Headline
					>
					<TopicSelect />
				</div>
			</div>
		</AnimationFrame>
		<!-- ship animation -->
		<div class="relative pt-72 pb-44 overflow-hidden">
			<div
				class="absolute -right-20 flex flex-row"
				style={`transform: translateX(-${getStyleValue(progress, 1.3, 1, 0, 120)}vw)`}
			>
				<img
					src="laser.svg"
					alt="laser"
					class={progress > 1.7
						? 'mt-1 relative w-[15px] h-[15px] filter drop-shadow-smIconYellow'
						: 'hidden'}
					style={`transform: translateX(-${getStyleValue(
						progress,
						1.7,
						0.5,
						0,
						150
					)}vh) rotate(-90deg)`}
				/>
				<img
					src="laser.svg"
					alt="laser"
					class={progress > 1.8
						? 'mt-1 relative w-[15px] h-[15px] filter drop-shadow-smIconYellow'
						: 'hidden'}
					style={`transform: translateX(-${getStyleValue(
						progress,
						1.8,
						0.5,
						0,
						150
					)}vh) rotate(-90deg)`}
				/>
				<img
					src="laser.svg"
					alt="laser"
					class={progress > 1.9
						? 'mt-1 relative w-[15px] h-[15px] filter drop-shadow-smIconYellow'
						: 'hidden'}
					style={`transform: translateX(-${getStyleValue(
						progress,
						1.9,
						0.5,
						0,
						150
					)}vh) rotate(-90deg)`}
				/>
				<img src="/j-ship-2.svg" alt="j-ship firing at dino" class="-rotate-90" />
				<span
					class="h-[24px] w-[7px] bg-gradient-to-r from-villainRed-200 drop-shadow-smIconRed filter "
				/>
			</div>

			<div
				class="absolute -right-32"
				style={`transform: translateX(-${getStyleValue(progress, 0, 2, 0, 120)}vw)`}
			>
				<img
					src="/wordpress-rex-dark2.svg"
					alt="wordpress rex being shot at"
					class="w-[100px] h-[100px] object-cover object-left"
					style={`transform: rotate(${getStyleValue(
						progress,
						1.2,
						1,
						0,
						360
					)}deg) translateY(53px)`}
				/>
			</div>
		</div>
	</div>
</section>

<!-- mobile -->
<section id="guide-mobile" class="block xl:hidden bg-analogBlack-400">
	<Villians />
	<div class="py-28 lg:pt-44 bg-jamAqua-300 px-3">
		<Headline subHeadline="The Solution"
			>That's why we started <span class="text-jamAqua-100">JamSite</span></Headline
		>
		<TopicSelect />
	</div>
</section>
