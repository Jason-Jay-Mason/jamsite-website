<script>
	import AnimationFrame from '$lib/animation-frame.svelte';
	import Headline from '$lib/headline.svelte';
	import Button from '$lib/button.svelte';
	import { getStyleValue } from '$lib/utils/animation.js'; //Helper function to get the opacity value for any progress value
	let progress;
	//#region data
	const DATA = [
		{
			headline: 'Schedule Site Audit',
			body: 'We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit. We’re a web design and development agency ',
			cta: {
				title: 'Book a Call',
				href: null,
				videoHref: null,
				action: 'schedule'
			}
		},
		{
			headline: 'Implement Attack Plan',
			body: 'We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit. We’re a web design and development agency ',
			cta: {
				title: 'Book a Call',
				href: null,
				videoHref: null,
				action: 'schedule'
			}
		},
		{
			headline: 'Deploy New Site',
			body: 'We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit. We’re a web design and development agency ',
			cta: {
				title: 'Book a Call',
				href: null,
				videoHref: null,
				action: 'schedule'
			}
		}
	];
	//#endregion data
	const textAnimationPoints = [
		{ text: 0.05, cta: 0.15 },
		{ text: 0.6, cta: 0.8 },
		{ text: 0.8, cta: 0.9 }
	];
</script>

<section id="plan" class="hidden xl:block">
	<div class="bg-analogBlack-400 bg-subtleGameGrid">
		<div class="bg-analogBlack-300">
			<Headline subHeadline="Ready to work with us?"
				>It’s easy to get <span class="text-jamAqua-100">started</span></Headline
			>
		</div>

		<AnimationFrame bind:progress frameHeight="h-[600vh]">
			<div
				class="relative w-full h-[100vh] flex flex-row items-center justify-between pl-10 max-w-screen-2xl mx-auto"
			>
				{#each DATA as step, i}
					<!-- section container -->
					<div
						class="w-[41%] absolute"
						style={`opacity:${getStyleValue(
							progress,
							i / DATA.length + (5 / 6) * (1 / DATA.length) + 0.07,
							1 / 16,
							1,
							0
						)}`}
					>
						<!-- text container -->
						<div style={`opacity:${getStyleValue(progress, i / DATA.length + 0.07, 1 / 10, 0, 1)}`}>
							<p
								class="font-rubik font-bold text-6xl text-white filter drop-shadow-smIconWhite pb-6"
							>
								{i + 1}.
							</p>
							<h4 class="text-4xl font-semibold leading-relaxed pb-4">
								{step.headline}
							</h4>
							<p class="text-white pb-10 leading-xl">
								{step.body}
							</p>
						</div>

						<!-- button container -->
						<div
							style={`opacity:${getStyleValue(
								progress,
								i / DATA.length + (3 / 6) * (1 / DATA.length) + 0.07,
								1 / 24,
								0,
								1
							)}`}
						>
							<Button
								styles="mx-0 bg-villainRed-200/70 hover:bg-villainRed-200 shadow-villainRed-200/40 hover:shadow-villainRed-200"
								>{step.cta.title}</Button
							>
						</div>
					</div>
				{/each}
				<div class="absolute flex flex-col items-center justify-center left-0 right-0">
					<span
						class="hidden h-[7px] w-[24px] bg-gradient-to-t from-villainRed-200 drop-shadow-smIconRed filter -ml-2 "
					/>
					<img src="/j-ship-2.svg" alt="j-ship flying" class="mx-auto rotate-180" />
				</div>
				<div class="w-[41%] bg-analogBlack-200 right-0 absolute">image here</div>
			</div>
		</AnimationFrame>
	</div>
</section>
<!-- mobile -->
<section id="plan-mobile" class="block xl:hidden bg-analogBlack-400">
	<div>
		{#each DATA as step, i}
			<div class="w-full">
				<p class="font-rubik font-bold text-6xl text-white filter drop-shadow-smIconWhite pb-6">
					{i + 1}.
				</p>
				<h4 class="text-4xl font-semibold leading-relaxed pb-4">
					{step.headline}
				</h4>
				<div>image is here</div>
				<p class="text-white pb-10 leading-xl">
					{step.body}
				</p>
				<div>
					<Button
						styles="mx-0 bg-villainRed-200/70 hover:bg-villainRed-200 shadow-villainRed-200/40 hover:shadow-villainRed-200"
						>{step.cta.title}</Button
					>
				</div>
			</div>
		{/each}
	</div>
</section>
