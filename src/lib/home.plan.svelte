<script>
	import AnimationFrame from '$lib/animation-frame.svelte';
	import Headline from '$lib/headline.svelte';
	import Button from '$lib/button.svelte';
	import PieChart from '$lib/home.plan.pieChart.svelte';
	import Transition from '$lib/transition-row.svelte';
	import { getStyleValue } from '$lib/utils/animation.js'; //Helper function to get the opacity value for any progress value
	import { schedulerModalVisible } from '$lib/stores.js';
	import { onMount } from 'svelte';

	import { windowWidth } from '$lib/stores.js';
	let width;
	onMount(() => {
		width = innerWidth;
	});
	windowWidth.subscribe((value) => {
		width = value;
	});

	function showModel() {
		schedulerModalVisible.update((v) => (v = true));
	}
	let progress;
	//#region data
	const DATA = [
		{
			headline: 'Schedule Site Audit',
			body: "Whether you're looking for performance improvements on a current website or you're ready to invest in a new website, it all starts with a free call with an expert. Click the button below and choose the time that works best for you and we will work with you to accomplish your goals.",
			cta: {
				tailwindClasses: 'bg-villainRed-200/60 hover:bg-villainRed-200 shadow-villainRed-200/40 hover:shadow-villainRed-200 ',
				title: 'Book a Call',
				href: null,
				videoHref: null,
				action: 'schedule'
			}
		},
		{
			headline: 'Develop Attack Plan',
			body: '    If we are 100% confident that working together will be a slam dunk, we will develop a plan that will help you accomplish your goals. Click the button below and schedule an initial phone call.',
			cta: {
				tailwindClasses: 'bg-warnYellow-100/70 hover:bg-warnYellow-100 shadow-warnYellow-100/40 hover:shadow-warnYellow-100 ',
				title: 'Book a Call',
				href: null,
				videoHref: null,
				action: 'schedule'
			}
		},
		{
			headline: 'Deploy Attack Plan',
			body: 'We will build and deploy the changes to your website that have been shown to drive the best results in your niche. Click the button below to schedule a meeting to learn about how we will help you drive more sales. ',
			cta: {
				tailwindClasses: 'bg-successGreen-200/70 hover:bg-successGreen-200 shadow-successGreen-200/40 hover:shadow-successGreen-200 ',
				title: 'Book a Call',
				href: null,
				videoHref: null,
				action: 'schedule'
			}
		}
	];
	//#endregion data
</script>

{#if width <= 1280}
	<!-- #region mobile -->
	<section id="plan-mobile" class="block bg-analogBlack-400 bg-subtleGameGrid py-24 text-center lg:py-48 lg:text-left xl:hidden">
		<div>
			<Headline subHeadline="Ready to work with us?">It’s easy to get started</Headline>

			{#each DATA as step, i}
				<div class="my-20 mx-auto flex w-full max-w-screen-sm flex-col px-4 md:mb-32 md:px-9 lg:my-32 lg:max-w-none lg:flex-row">
					<div class="mx-auto w-full lg:w-[45%]">
						<p class="pb-6 font-rubik text-4xl font-bold text-white drop-shadow-smIconWhite filter md:text-5xl">
							{i + 1}.
						</p>
						<h4 class="pb-4 text-2xl font-semibold leading-relaxed md:text-4xl lg:text-4xl">
							{step.headline}
						</h4>
						<p class="pb-10 leading-xl text-white">
							{step.body}
						</p>
					</div>
					<!-- dummy ui  -->

					{#if i === 0}
						<!-- #region step 1 -->
						<div class="relative  flex justify-center lg:-right-16 lg:flex-col">
							<PieChart value={80}>Page <br /> Speed</PieChart>
							<PieChart value={180}>Best <br /> Practices</PieChart>
							<PieChart value={200}>SEO</PieChart>
						</div>
						<div class="relative m-auto w-[90%] max-w-screen-sm rounded-md border-form border-white bg-white/20 lg:-right-20 lg:w-1/2">
							<div class="align-center relative my-[0%] flex flex-row justify-start border-b-[2px] border-white px-[2%] text-white">
								<div class="flex w-full flex-row ">
									<img alt="wordpress rex logo" src="/wordpress-rex-icon.svg" class="w-[6%] min-w-[30px] " />
									<p class="whitespace-nowrap px-2 text-[90%] font-bold">Your Site</p>
								</div>

								<div class="flex w-fit flex-col items-end justify-center pr-3 md:hidden ">
									<div class="mb-1 h-1 w-5 bg-white" />
									<div class="mb-1 h-1 w-5 bg-white" />
									<div class="h-1 w-5 bg-white" />
								</div>
								<div class="mt-1 hidden w-full flex-row md:flex">
									<p class="rotate-180 px-[1%] text-[80%]">عσ ש</p>
									<p class="rotate-180 px-[1%]  text-[80%]">χαع 니σ</p>
									<p class="rotate-180 px-[1%]  text-[80%]">אָχεπ</p>
									<p class="rotate-180 px-[1%]  text-[80%]">ع비ائع</p>
									<p class="rotate-180 px-[1%]  text-[80%]">عσ ש</p>
								</div>
							</div>
							<div class="relative w-full border-b-[2px] border-white py-20 text-white">
								<p class="m-auto rotate-180 text-center text-2xl font-bold">여لدאָχεπ ηש하ئ니</p>
								<img
									alt="wordpress rex background"
									src="/wordpress-rex-icon.svg"
									class="absolute top-0 bottom-0 right-0 left-0 m-auto w-[150px] opacity-30"
								/>
							</div>
							<div class="m-4 border-form border-white text-white">
								<p class="p-2 text-[9px] leading-normal">
									여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ ש 니عσ ש비 πιχσχσεε기را ش
									σט기را ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ ا ش σטאָχεπ즈 χαع ιχσε
									πιχσχσεε기را شσט기را ד의 즈 χعσ ש비 πιχσχσεε기را ش σט기را ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 π
								</p>
							</div>
						</div>
						<!-- #endregion step 1 -->
					{:else if i === 1}
						<!-- #region step 2 ui -->
						<div
							class="relative m-auto w-[90%]  max-w-screen-sm overflow-hidden rounded-md border-form border-white bg-white/20 lg:-right-10 lg:w-1/2"
						>
							<div class="flex flex-row py-3 px-4 text-white md:px-4">
								<div class="flex w-2/3 flex-row">
									<img alt="j-ship logo" src="/j-ship-2.svg" class="mr-2 w-[26px] -rotate-90" />
									<p class="text-[14px] font-bold">YOUR SITE</p>
								</div>
								<div class="flex w-1/3 flex-col items-end justify-center rounded-md pr-3">
									<div class="mb-1 h-1 w-6 bg-white" />
									<div class="mb-1 h-1 w-6 bg-white" />
									<div class="h-1 w-6 bg-white" />
								</div>
							</div>
							<div class="mx-auto flex max-w-[300px] flex-col py-3 px-2 text-white">
								<p class="mb-4 rotate-180 text-center text-3xl font-bold">여لدאָχεπ ηש하ئ니</p>
								<p class="rotate-180 text-center text-sm">여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ</p>
								<div class="mx-auto flex w-full max-w-[230px] flex-row items-center justify-between">
									<div class="mt-1 rounded-md border-form border-white px-3 py-1">
										<p class="pb-1 text-xs font-light">χαع비ا</p>
									</div>
									<div class="flex flex-row items-center justify-center py-4 font-light">
										<div class="relative mr-3 rotate-180 rounded-full border-form border-white p-2 text-xs">
											<p class="relative -top-[1px] text-xs">ε기</p>
										</div>
										<div class="relative mr-3 rotate-90 rounded-full border-form border-white p-2 text-xs">
											<p class="relative -top-[2px] text-xs">שع</p>
										</div>
										<div class="relative mr-3 rotate-90 rounded-full border-form border-white p-2 text-xs">
											<p class="relative -top-[2px] text-xs">ηש</p>
										</div>
									</div>
								</div>
							</div>
							<div class="w-full px-4">
								<div class="my-5 mx-auto max-w-[350px] border-[2px] border-white bg-white/10 text-white">
									<p class="p-4 text-[8px] leading-loose">
										여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ ש 니عσ ש비 πιχσχσεε기را
										ش σט기را ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ ا ش σטאָχεπ즈 χαع
									</p>
								</div>
							</div>

							<img alt="j-ship background" src="/j-ship-2.svg" class="absolute top-0 -right-[20%] h-full w-full -rotate-90 opacity-10" />
						</div>
						<!-- #endregion step 2 ui -->
					{:else}
						<!-- #region step 3 ui -->
						<div class="relative flex flex-row justify-center lg:-right-16 lg:flex-col">
							<PieChart value={355}>Page <br /> Speed</PieChart>
							<PieChart value={350}>Best <br /> Practices</PieChart>
							<PieChart value={350}>SEO</PieChart>
						</div>

						<div
							class="relative m-auto hidden w-[90%] w-full max-w-screen-sm overflow-hidden rounded-md border-form border-white bg-white/20 lg:-right-20 lg:block lg:w-1/2"
						>
							<div class="flex flex-row py-3 px-4 text-white md:px-4">
								<div class="flex w-2/3 flex-row">
									<img alt="j-ship logo" src="/j-ship-2.svg" class="mr-2 w-[26px] -rotate-90" />
									<p class="font-bold">YOUR SITE</p>
								</div>
								<div class="flex w-1/3 flex-col items-end justify-center rounded-md pr-3">
									<div class="mb-1 h-1 w-6 bg-white" />
									<div class="mb-1 h-1 w-6 bg-white" />
									<div class="h-1 w-6 bg-white" />
								</div>
							</div>
							<div class="mx-auto flex max-w-[300px] flex-col py-3 px-2 text-white">
								<p class="mb-4 rotate-180 text-center text-3xl font-bold">여لدאָχεπ ηש하ئ니</p>
								<p class="rotate-180 text-center text-sm">여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ</p>
								<div class="mx-auto flex w-full max-w-[230px] flex-row items-center justify-between">
									<div class="mt-1 rounded-md border-form border-white px-3 py-1">
										<p class="pb-1 text-xs font-light">χαع비ا</p>
									</div>
									<div class="flex flex-row items-center justify-center py-4 font-light">
										<div class="relative mr-3 rotate-180 rounded-full border-form border-white p-2 text-xs">
											<p class="relative -top-[1px] text-xs">ε기</p>
										</div>
										<div class="relative mr-3 rotate-90 rounded-full border-form border-white p-2 text-xs">
											<p class="relative -top-[2px] text-xs">שع</p>
										</div>
										<div class="relative mr-3 rotate-90 rounded-full border-form border-white p-2 text-xs">
											<p class="relative -top-[2px] text-xs">ηש</p>
										</div>
									</div>
								</div>
							</div>
							<div class="w-full px-4">
								<div class="my-5 mx-auto max-w-[350px] border-[2px] border-white bg-white/10 text-white">
									<p class="p-4 text-[8px] leading-loose">
										여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ ש 니عσ ש비 πιχσχσεε기را
										ش σט기را ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ ا ش σטאָχεπ즈 χαع
									</p>
								</div>
							</div>

							<img alt="j-ship background" src="/j-ship-2.svg" class="absolute top-0 -right-[20%] h-full w-full -rotate-90 opacity-10" />
						</div>
						<!-- #endregion step 3 ui -->
					{/if}
				</div>
			{/each}
		</div>
	</section>
	<!-- #endregion mobile -->
{:else}
	<!-- desktop -->
	<section id="plan" class="hidden xl:block">
		<div class="bg-analogBlack-400 bg-subtleGameGrid">
			<div class="bg-analogBlack-400 bg-subtleGameGrid">
				<Headline subHeadline="Ready to work with us?">It’s easy to get started</Headline>
			</div>
			<Transition direction="top" />

			<AnimationFrame bind:progress frameHeight="h-[700vh]">
				<div class="relative h-[100vh] w-full overflow-hidden">
					<div class="relative mx-auto flex h-full w-full max-w-screen-2xl flex-row items-center justify-between pl-10">
						<!-- #region text -->
						{#each DATA as step, i}
							<!-- section container -->
							<!-- I added button styling in the data so we don't have to rewrite a bunch of this code for each section -->
							{#if i / DATA.length + 0.07 < progress && (i + 1) / DATA.length + 0.07 > progress}
								<div
									class="relative w-[41%]"
									style={`opacity:${getStyleValue(progress, i / DATA.length + (5 / 6) * (1 / DATA.length) + 0.07, 1 / 16, 1, 0)};
						`}
								>
									<!-- text container -->
									<div style={`opacity:${getStyleValue(progress, i / DATA.length + 0.07, 1 / 10, 0, 1)}`}>
										<p class="pb-6 font-rubik text-6xl font-bold text-white drop-shadow-smIconWhite filter">
											{i + 1}.
										</p>
										<h4 class="pb-4 text-4xl font-semibold leading-relaxed">
											{step.headline}
										</h4>
										<p class="pb-10 leading-xl text-white">
											{step.body}
										</p>
									</div>

									<!-- button container -->
									<span
										on:click={showModel}
										style={`opacity:${getStyleValue(progress, i / DATA.length + (3 / 6) * (1 / DATA.length) + 0.07, 1 / 24, 0, 1)}`}
									>
										<Button styles={step.cta.tailwindClasses + 'mx-0'}>{step.cta.title}</Button>
									</span>
								</div>
							{/if}
						{/each}
						<!-- #endregion text -->
						<div
							class="absolute left-0 right-0 flex h-fit w-full flex-col items-center justify-center"
							style={`opacity:${getStyleValue(progress, 0.15, 0.05, 0, 1)}; transform:translateY(${
								progress > 0.8 ? getStyleValue(progress, 0.9, 0.2, 1, 100) : getStyleValue(progress, 0.1, 0.2, -100, 1)
							}vh)`}
						>
							<span
								style={`
								opacity:${progress > 0.8 ? getStyleValue(progress, 0.89, 0.03, 0, 1) : getStyleValue(progress, 0.3, 0.03, 1, 0)}
							`}
								class="-ml-2 mb-[2px] h-[7px] w-[24px] bg-gradient-to-t from-villainRed-200 drop-shadow-smIconRed filter"
							/>
							<img src="/j-ship-2.svg" alt="j-ship flying" class="mx-auto rotate-180 drop-shadow-black filter" />
						</div>
						<!-- #region ui animations -->
						<div class="absolute right-0 mt-10 h-[430px] w-[41%]" style={`opacity:${getStyleValue(progress, 0.05, 1 / 10, 0, 1)}`}>
							<div
								id="metrics"
								class="absolute flex h-full w-[60px] flex-col items-center justify-center"
								style={`opacity:${
									progress < 0.35 || progress > 2 / 3 + 0.07
										? progress < 0.35
											? getStyleValue(progress, 0.1, 0.05, 0, 1)
											: getStyleValue(progress, 2 / 3 + 0.15, 0.01, 0, 1)
										: getStyleValue(progress, 0.34, 1 / 16, 1, 0)
								} `}
							>
								<PieChart value={progress < 2 / 3 ? getStyleValue(progress, 0.19, 0.09, 0, 100) : getStyleValue(progress, 2 / 3 + 0.18, 0.12, 0, 355)}
									>Load <br /> Time</PieChart
								>
								<PieChart value={progress < 2 / 3 ? getStyleValue(progress, 0.19, 0.09, 0, 180) : getStyleValue(progress, 2 / 3 + 0.18, 0.12, 0, 360)}
									>Best <br /> Practices</PieChart
								>
								<PieChart value={progress < 2 / 3 ? getStyleValue(progress, 0.19, 0.09, 0, 200) : getStyleValue(progress, 2 / 3 + 0.18, 0.12, 0, 350)}
									>SEO</PieChart
								>
							</div>

							<div
								id="dummy-ui"
								class="relative h-full w-full min-w-[580px] rounded-md border-form border-white bg-white/10 drop-shadow-smIconWhite filter"
								style={`transform:translateX(${
									progress > 2 / 3 + 0.07 ? getStyleValue(progress, 2 / 3 + 0.07, 0.1, 0, 100) : getStyleValue(progress, 1 / 3 + 0.07, 0.1, 100, 0)
								}px)`}
							>
								{#if progress < 1 / 3 + 0.07}
									<div
										style={`
								opacity: ${getStyleValue(progress, 0.34, 1 / 16, 1, 0)}
							`}
									>
										<div id="villian-nav" class="flex flex-row items-center justify-start border-b-[2px] border-white px-5 py-4 text-white ">
											<img alt="Wordpress rex logo" id="villian-nav-logo" src="/wordpress-rex-icon.svg" class="w-9" />
											<p class="px-3 text-xl font-bold">Your Site</p>
											<div id="villian-links" class="relative top-1 flex flex-row">
												<p class="rotate-180 px-3 text-base">عσ ש</p>
												<p class="rotate-180 px-3 text-base">χαع 니σ</p>
												<p class="rotate-180 px-3 text-base">אָχεπ</p>
												<p class="rotate-180 px-3 text-base">ع비ائع</p>
												<p class="rotate-180 px-3 text-base">عσ ש</p>
											</div>
										</div>
										<div id="villian-hero" class="relative flex items-center justify-center border-b-[2px] border-white py-16">
											<p class="rotate-180 text-4xl font-semibold text-white">여لدאָχεπ ηש하ئ니</p>
											<img
												alt="Wordpress rex logo"
												src="/wordpress-rex-icon.svg"
												class="absolute m-auto h-28 opacity-20 drop-shadow-smIconWhite filter"
											/>
										</div>
										<div id="villian-text-blocks" class="flex flex-row items-center justify-center px-8 py-7 text-[7px] text-white">
											<div class="border-form border-white px-3 py-8">
												여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ ש 니عσ ש비
												πιχσχσεε기را ش σט기را ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ ا ش
												σטאָχεπ즈 χαع ιχσε πιχσχσεε기را شσט기را ד의 즈 χعσ ש비 πιχσχσεε기را ش σט기را ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ
												ίρ שعσ ש비 π
											</div>
											<div class="mx-4 border-form border-white px-3 py-8">
												여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ ש 니عσ ש비
												πιχσχσεε기را ش σט기را ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ ا ش
												σטאָχεπ즈 χαع ιχσε πιχσχσεε기را شσט기را ד의 즈 χعσ ש비 πιχσχσεε기را ش σט기را ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ
												ίρ שعσ ש비 π
											</div>
										</div>
									</div>
								{:else}
									<!-- ui for new website -->
									<div id="hero-nav" class="flex flex-row items-center justify-between px-7 py-5 text-white">
										<div id="hero-logo" class="flex w-[90px] flex-row " style={`opacity:${getStyleValue(progress, 0.48, 0.08, 0, 1)}`}>
											<img alt="j-ship logo" src="/j-ship-2.svg" class="mr-2 w-5 -rotate-90" />
											<p class="whitespace-nowrap font-rubik text-lg font-semibold">YOUR SITE</p>
										</div>
										<div class="rounded-md border-form border-white px-4" style={`opacity:${getStyleValue(progress, 0.5, 0.08, 0, 1)}`}>
											<div class="flex flex-row" style={`opacity:${getStyleValue(progress, 0.6, 0.08, 0, 1)}`}>
												<p class="-mb-1 rotate-180 px-2 py-1 text-xs">عσ ש</p>
												<p class="-mb-1 rotate-180 px-2 py-1 text-xs">χαع 니σ</p>
												<p class="-mb-1 rotate-180 px-2 py-1 text-xs">אָχεπ</p>
												<p class="-mb-1 rotate-180 px-2 py-1 text-xs">ع비ائع</p>
											</div>
										</div>
										<div
											class=" relative mt-2 flex w-[35px] flex-col items-end justify-start"
											style={`opacity:${getStyleValue(progress, 0.65, 0.08, 0, 1)}`}
										>
											<div class="mb-1 h-[5px] w-[30px]  bg-white" />
											<div class="mb-1 h-[5px] w-[30px]  bg-white" />
											<div class="mb-1 h-[5px] w-[30px]  bg-white" />

											<p class="absolute -left-[45px] mt-28 rotate-90 whitespace-nowrap text-lg">여لدאָχεπ ηש하ئ니</p>
										</div>
									</div>
									<div id="hero-main" class="flex flex-row pt-5 pl-3 text-white">
										<div class="w-[52%]">
											<div class="pl-5 pb-5">
												<p
													class="rotat-180 rotate-180 pt-3 text-right text-3xl font-bold"
													style={`opacity:${getStyleValue(progress, 0.56, 0.08, 0, 1)}`}
												>
													여لدאָχεπ ηש하ئ니
												</p>
												<p class="pb-4 text-xs leading-loose" style={`opacity:${getStyleValue(progress, 0.58, 0.08, 0, 1)}`}>
													여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ
												</p>
												<div
													class="flex max-w-[90%] flex-row items-center justify-between"
													style={`opacity:${getStyleValue(progress, 0.52, 0.08, 0, 1)}`}
												>
													<div class="mt-1 rounded-md border-form border-white px-3 py-1">
														<p class="pb-1 text-xs font-light" style={`opacity:${getStyleValue(progress, 0.6, 0.09, 0, 1)}`}>χαع비ا</p>
													</div>
													<div class="flex flex-row items-center justify-center font-light">
														<div class="relative mr-3 rotate-180 rounded-full border-form border-white p-2 text-xs">
															<p class="relative -top-[1px] text-xs" style={`opacity:${getStyleValue(progress, 0.62, 0.08, 0, 1)}`}>ε기</p>
														</div>
														<div class="relative mr-3 rotate-90 rounded-full border-form border-white p-2 text-xs">
															<p class="relative -top-[2px] text-xs" style={`opacity:${getStyleValue(progress, 0.64, 0.08, 0, 1)}`}>שع</p>
														</div>
														<div class="relative mr-3 rotate-90 rounded-full border-form border-white p-2 text-xs">
															<p class="relative -top-[2px] text-xs" style={`opacity:${getStyleValue(progress, 0.66, 0.08, 0, 1)}`}>ηש</p>
														</div>
													</div>
												</div>
											</div>

											<div
												class="my-4 ml-3 rounded-md border-form border-white py-6 px-6"
												style={`opacity:${getStyleValue(progress, 0.54, 0.08, 0, 1)}`}
											>
												<p class="text-[7px] leading-[16px] leading-normal" style={`opacity:${getStyleValue(progress, 0.67, 0.08, 0, 1)}`}>
													여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ ש 니عσ ש비
													πιχσχσεε기را ش σט기را ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ ا ش
													σטאָχεπ즈 χαع
												</p>
											</div>
										</div>
										<div class="h-full w-[220px]" style={`opacity:${getStyleValue(progress, 0.54, 0.08, 0, 1)}`}>
											<img alt="background jship" src="/background-j.svg" class="w-full object-fill pl-5 opacity-20" />
										</div>
									</div>
								{/if}
								<div />
							</div>
						</div>
						<!-- #endregion ui animations -->
					</div>
				</div>
			</AnimationFrame>
		</div>
	</section>
{/if}
