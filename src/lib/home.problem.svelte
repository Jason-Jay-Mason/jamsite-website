<!-- 
This is the problem section on the homepage, animations are using the AnimationFrame component (documented in animation-frame.svelte)
the 400 vh height for the frame is arbitrary and can be more or less. The 100vh height of the sticky container is standard for this type of design.
the blurb component is fairly standard and is documented in the component's file. Leading styling is dictated on a element basis because of some
type of bug with the global.css in applying leading styling.
-->
<script>
	import AnimationFrame from '$lib/animation-frame.svelte'; //Animation frame to handle opacity changes easily
	import { getStyleValue } from '$lib/utils/animation.js'; //Helper function to get the opacity value for any progress value
	import Blurb from '$lib/featured-icon-blurb.svelte'; //Component for the icon columns in this section
	import { onMount } from 'svelte';
	import { schedulerModalVisible } from '$lib/stores.js';

	function showModel() {
		schedulerModalVisible.update((v) => (v = true));
	}

	let progress; //Need to bind progress to the animation frame component which will reflect the percent progress through the section

	import { windowWidth } from '$lib/stores.js';
	let width;
	onMount(() => {
		width = innerWidth;
	});
	windowWidth.subscribe((value) => {
		width = value;
	});
</script>

{#if width <= 1280}
	<section class="block" id="problem-mobile">
		<div class="flex items-center justify-center bg-analogBlack-400 py-28 lg:py-44">
			<div class="mx-auto grid max-w-screen-2xl grid-cols-1 items-center justify-center px-4 md:grid-cols-2 md:px-8 xl:grid-cols-4">
				<h3
					class="relative top-auto w-full pb-12 text-4xl font-bold leading-tight
					md:top-12 md:pr-9 md:text-5xl md:leading-tight"
				>
					The <span class="text-villainRed-300">problem </span>with the web today...
				</h3>
				<div>
					<Blurb iconSrc="/lost-sales.svg" headline="Lost Sales">
						<a
							class="font-bold text-white/90 hover:text-white"
							target="_blank"
							href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/">A Google study</a
						>
						showed that 70% of mobile landing pages take longer than five seconds to load resulting in a loss of over 53% of site visitors. This translates
						to an estimated $140 billion in lost ecommerce sales due to poor site performance in 2021.
						<span class="cursor-pointer text-villainRed-100 hover:text-villainRed-200" on:click={showModel}>See how much you're losing.</span>
					</Blurb>
				</div>

				<div>
					<Blurb iconSrc="/decreased-traffic.svg" headline="Decreased Traffic">
						Search engines like Google use site speed as a <a
							class="font-bold text-white/90 hover:text-white"
							target="_blank"
							href="https://developers.google.com/search/blog/2021/04/more-details-page-experience?hl=en">strong ranking factor.</a
						>
						That means poor site performance is directly lowering your website’s ranking in the search results—making it harder for customers to find you,
						and reducing your site's traffic.
						<span class="cursor-pointer text-villainRed-100 hover:text-villainRed-200" on:click={showModel}
							>Learn how site speed impacts your ranking.</span
						>
					</Blurb>
				</div>
				<div>
					<Blurb iconSrc="/thumb-down.svg" headline="Unhappy Users">
						The remaining 47% of site visitors that do not leave after 3 seconds have been shown to make negative split second judgments about your
						brand. Consumers are expecting near instant feedback on today's devices, even on 3g and 4g networks.
					</Blurb>
				</div>
			</div>
		</div>
	</section>
{:else}
	<section id="problem" class="block bg-analogBlack-400 bg-subtleGameGrid xl:block ">
		<AnimationFrame bind:progress frameHeight="h-[400vh]">
			<div class="flex h-[100vh] items-center justify-center py-9">
				<div class="relative mx-auto grid max-w-screen-2xl grid-cols-1 items-start justify-center px-6 md:grid-cols-2 md:px-8 xl:grid-cols-4">
					<h3
						style={`opacity:${getStyleValue(progress, 0.1, 0.1, 0, 1)}; transform:translateX(${getStyleValue(
							progress,
							0.25,
							0.1,
							160,
							0
						)}%) scale(${getStyleValue(progress, 0.25, 0.1, 150, 100)}%)`}
						class="relative w-full self-center whitespace-nowrap pb-12 text-4xl font-bold leading-tight
					md:top-12 md:pr-9 md:text-5xl md:leading-tight"
					>
						How is a <br /> slow website <br /><span class="text-villainRed-200">costing </span>you?
					</h3>
					<div style={`opacity:${getStyleValue(progress, 0.3, 0.15, 0, 1)}`}>
						<Blurb
							iconStyle={`filter:saturate(${getStyleValue(progress, 0.55, 0.15, 1, 0)}) brightness(${getStyleValue(progress, 0.55, 0.15, 1, 4)})
							drop-shadow(0px 0px 17px rgba(${getStyleValue(progress, 0.55, 0.15, 206, 255)}, ${getStyleValue(progress, 0.55, 0.15, 77, 255)}, ${getStyleValue(
								progress,
								0.55,
								0.15,
								69,
								255
							)}, 0.46))
						`}
							iconSrc="/lost-sales.svg"
							headline="Lost Sales"
						>
							<a
								class="font-bold text-white/90 hover:text-white"
								target="_blank"
								href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/"
								>A Google study</a
							>
							showed that 70% of mobile landing pages take longer than five seconds to load resulting in a loss of over 53% of site visitors. This translates
							to an estimated $140 billion in lost ecommerce sales due to poor site performance in 2021.
							<span class="cursor-pointer text-villainRed-100 hover:text-villainRed-200" on:click={showModel}>See how much you're losing.</span>
						</Blurb>
					</div>

					<div style={`opacity:${getStyleValue(progress, 0.55, 0.15, 0, 1)}`}>
						<Blurb
							iconStyle={`filter:saturate(${getStyleValue(progress, 0.8, 0.15, 1, 0)}) brightness(${getStyleValue(progress, 0.8, 0.15, 1, 4)})
							drop-shadow(0px 0px 17px rgba(${getStyleValue(progress, 0.8, 0.15, 206, 255)}, ${getStyleValue(progress, 0.8, 0.15, 77, 255)}, ${getStyleValue(
								progress,
								0.8,
								0.15,
								69,
								255
							)}, 0.46))
						`}
							iconSrc="/decreased-traffic.svg"
							headline="Decreased Traffic"
						>
							Search engines like Google use site speed as a <a
								class="font-bold text-white/90 hover:text-white"
								target="_blank"
								href="https://developers.google.com/search/blog/2021/04/more-details-page-experience?hl=en">strong ranking factor.</a
							>
							That means poor site performance is directly lowering your website’s ranking in the search results—making it harder for customers to find
							you, and reducing your site's traffic.
							<span class="cursor-pointer text-villainRed-100 hover:text-villainRed-200" on:click={showModel}
								>Learn how site speed impacts your ranking.</span
							>
						</Blurb>
					</div>
					<div style={`opacity:${getStyleValue(progress, 0.8, 0.15, 0, 1)}`}>
						<Blurb iconStyle="filter:drop-shadow(0px 0px 17px rgba(206,77,69,0.46))" iconSrc="/thumb-down.svg" headline="Unhappy Users">
							The remaining 47% of site visitors that do not leave after 3 seconds have been shown to make negative split second judgments about your
							brand. Consumers are expecting near instant feedback on today's devices, even on 3g and 4g networks.
						</Blurb>
					</div>
				</div>
			</div>
		</AnimationFrame>
	</section>
{/if}
