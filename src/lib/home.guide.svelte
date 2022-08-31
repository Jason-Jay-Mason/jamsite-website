<script>
	import AnimationFrame from '$lib/animation-frame.svelte'; //Animation frame to handle opacity changes easily
	import Headline from '$lib/headline.svelte';
	import TopicSelect from '$lib/home.guide.topic-select.svelte';
	import { getStyleValue } from '$lib/utils/animation.js'; //Helper function to get the opacity value for any progress value
	let progress; //Need to bind progress to the animation frame component which will reflect the percent progress through the section
</script>

<section id="guide" class="hidden xl:block bg-analogBlack-300">
	<div
		class="py-44"
		style={`background-color: rgb(14, 50, 65, ${
			progress < 0.85
				? getStyleValue(progress, 0.6, 0.2, 0, 1)
				: getStyleValue(progress, 0.85, 0.3, 1, 0)
		})`}
	>
		<AnimationFrame bind:progress frameHeight="h-[140vh]">
			<div class="h-[100vh] flex justify-center items-center">
				<div class="relative block w-full">
					<Headline subHeadline="The Solution"
						>That's why we started <span class="text-jamAqua-100">JamSite</span></Headline
					>
					<div style={`opacity:${getStyleValue(progress, 0.5, 0.3, 0, 1)}`}>
						<TopicSelect />
					</div>
				</div>
			</div>
		</AnimationFrame>
	</div>
</section>
<section id="guide-mobile" class="block xl:hidden">
	<div class="py-24 bg-jamAqua-300 px-3">
		<Headline subHeadline="The Solution"
			>That's why we started <span class="text-jamAqua-100">JamSite</span></Headline
		>
		<TopicSelect />
	</div>
</section>
