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
		<div class="flex  items-center justify-center bg-analogBlack-400 py-28 lg:py-44">
			<div class="mx-auto grid max-w-screen-2xl grid-cols-1 items-center justify-center px-4 md:grid-cols-2 md:px-8 xl:grid-cols-4">
				<h3
					class="relative top-auto w-full pb-12 text-4xl font-bold leading-tight
					md:top-12 md:pr-9 md:text-5xl md:leading-tight"
				>
					The <span class="text-villainRed-300">problem </span>with the web today...
				</h3>
				<div>
					<Blurb
						iconSrc="/dummy-icon.svg"
						headline="Site Speed"
						body="We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit."
					/>
				</div>

				<div>
					<Blurb
						iconSrc="/dummy-icon.svg"
						headline="Scalability"
						body="We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit."
					/>
				</div>
				<div>
					<Blurb
						iconSrc="/dummy-icon.svg"
						headline="Vendor Lockin"
						body="We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit."
					/>
				</div>
			</div>
		</div>
	</section>
{:else}
	<section id="problem" class="block bg-analogBlack-400 bg-subtleGameGrid xl:block ">
		<AnimationFrame bind:progress frameHeight="h-[400vh]">
			<div class="flex h-[100vh] items-center justify-center py-9">
				<div class="relative mx-auto grid max-w-screen-2xl grid-cols-1 items-center justify-center px-6 md:grid-cols-2 md:px-8 xl:grid-cols-4">
					<h3
						style={`opacity:${getStyleValue(progress, 0.1, 0.1, 0, 1)}; transform:translateX(${getStyleValue(
							progress,
							0.25,
							0.1,
							160,
							0
						)}%) scale(${getStyleValue(progress, 0.25, 0.1, 150, 100)}%)`}
						class="relative w-full whitespace-nowrap pb-12 text-4xl font-bold leading-tight
					md:top-12 md:pr-9 md:text-5xl md:leading-tight"
					>
						The <span class="text-villainRed-200">problem </span><br />with the web<br /> today...
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
							iconSrc="/red-icon-dummy.svg"
							headline="Scalability"
							body="We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit."
						/>
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
							iconSrc="/red-icon-dummy.svg"
							headline="Scalability"
							body="We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit."
						/>
					</div>
					<div style={`opacity:${getStyleValue(progress, 0.8, 0.15, 0, 1)}`}>
						<Blurb
							iconStyle="filter:drop-shadow(0px 0px 17px rgba(206,77,69,0.46))"
							iconSrc="/red-icon-dummy.svg"
							headline="Vendor Lockin"
							body="We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit."
						/>
					</div>
				</div>
			</div>
		</AnimationFrame>
	</section>
{/if}
