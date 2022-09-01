<script>
	import AnimationFrame from '$lib/animation-frame.svelte'; //Animation frame to handle opacity changes easily
	import Headline from '$lib/headline.svelte';
	import TopicSelect from '$lib/home.guide.topic-select.svelte';
	import { getStyleValue } from '$lib/utils/animation.js'; //Helper function to get the opacity value for any progress value
	let progress; //Need to bind progress to the animation frame component which will reflect the percent progress through the section
</script>

<section id="guide" class="hidden xl:block bg-analogBlack-400 -mt-44 bg-subtleGameGrid">
	<div
		class="py-96"
		style={`background-color: rgb(14, 50, 65, ${getStyleValue(progress, 0.8, 0.4, 0, 1)})`}
	>
		<AnimationFrame bind:progress frameHeight="h-auto">
			<div class="h-auti flex justify-center items-center">
				<div class="relative block w-full">
					<Headline subHeadline="The Solution"
						>That's why we created <span class="text-jamAqua-100">JamSite</span></Headline
					>
					<TopicSelect />
				</div>
			</div>
		</AnimationFrame>
	</div>
</section>
<section id="guide-mobile" class="block xl:hidden">
	<div class="py-28 lg:pt-44 bg-jamAqua-300 px-3">
		<Headline subHeadline="The Solution"
			>That's why we started <span class="text-jamAqua-100">JamSite</span></Headline
		>
		<TopicSelect />
	</div>
</section>
