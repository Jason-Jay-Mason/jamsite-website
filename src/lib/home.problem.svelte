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
	let progress; //Need to bind progress to the animation frame component which will reflect the percent progress through the section
</script>

<section id="#problem" class="hidden xl:block">
	<AnimationFrame bind:progress frameHeight="h-[400vh]">
		<div class="bg-analogBlack-300 flex items-center justify-center py-9 h-[100vh]">
			<div
				class="mx-auto max-w-screen-2xl px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center items-center"
			>
				<h3
					style={`opacity:${getStyleValue(progress, 0.15, 0.1, 0, 1)}`}
					class="relative md:top-12 leading-tight md:leading-tight whitespace-nowrap font-bold w-full
					text-4xl md:text-5xl pb-12 md:pr-9"
				>
					The <span class="text-villainRed-300">problem </span><br />with the web<br /> today...
				</h3>
				<div style={`opacity:${getStyleValue(progress, 0.3, 0.15, 0, 1)}`}>
					<Blurb
						iconSrc="/dummy-icon.svg"
						headline="Site Speed"
						body="We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit."
					/>
				</div>

				<div style={`opacity:${getStyleValue(progress, 0.55, 0.15, 0, 1)}`}>
					<Blurb
						iconSrc="/dummy-icon.svg"
						headline="Scalability"
						body="We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit."
					/>
				</div>
				<div style={`opacity:${getStyleValue(progress, 0.8, 0.15, 0, 1)}`}>
					<Blurb
						iconSrc="/dummy-icon.svg"
						headline="Vendor Lockin"
						body="We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit."
					/>
				</div>
			</div>
		</div>
	</AnimationFrame>
</section>

<section class="block xl:hidden" id="problem-mobile">
	<div class="bg-analogBlack-300 flex items-center justify-center py-9">
		<div
			class="mx-auto max-w-screen-2xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center items-center"
		>
			<h3
				style={`opacity:${getStyleValue(progress, 0.15, 0.1, 0, 1)}`}
				class="relative top-auto md:top-12 leading-tight md:leading-tight font-bold w-full
					text-4xl md:text-5xl pb-12 md:pr-9"
			>
				The <span class="text-villainRed-300">problem </span>with the web today...
			</h3>
			<div style={`opacity:${getStyleValue(progress, 0.3, 0.15, 0, 1)}`}>
				<Blurb
					iconSrc="/dummy-icon.svg"
					headline="Site Speed"
					body="We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit."
				/>
			</div>

			<div style={`opacity:${getStyleValue(progress, 0.55, 0.15, 0, 1)}`}>
				<Blurb
					iconSrc="/dummy-icon.svg"
					headline="Scalability"
					body="We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit."
				/>
			</div>
			<div style={`opacity:${getStyleValue(progress, 0.8, 0.15, 0, 1)}`}>
				<Blurb
					iconSrc="/dummy-icon.svg"
					headline="Vendor Lockin"
					body="We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit."
				/>
			</div>
		</div>
	</div>
</section>
