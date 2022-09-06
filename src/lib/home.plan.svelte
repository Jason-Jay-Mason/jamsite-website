<script>
	import AnimationFrame from '$lib/animation-frame.svelte';
	import Headline from '$lib/headline.svelte';
	import Button from '$lib/button.svelte';
	import PieChart from '$lib/home.plan.pieChart.svelte';
	import Transition from '$lib/transition-row.svelte';
	import { getStyleValue } from '$lib/utils/animation.js'; //Helper function to get the opacity value for any progress value
	let progress;
	//#region data
	const DATA = [
		{
			headline: 'Schedule Site Audit',
			body: 'We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit. We’re a web design and development agency ',
			cta: {
				tailwindClasses:
					'bg-villainRed-200/60 hover:bg-villainRed-200 shadow-villainRed-200/40 hover:shadow-villainRed-200 ',
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
				tailwindClasses:
					'bg-warnYellow-100/70 hover:bg-warnYellow-100 shadow-warnYellow-100/40 hover:shadow-warnYellow-100 ',
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
				tailwindClasses:
					'bg-successGreen-200/70 hover:bg-successGreen-200 shadow-successGreen-200/40 hover:shadow-successGreen-200 ',
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
		<div class="bg-analogBlack-400 bg-subtleGameGrid">
			<Headline subHeadline="Ready to work with us?"
				>It’s easy to get <span class="text-jamAqua-100">started</span></Headline
			>
		</div>
		<Transition direction="top" />

		<AnimationFrame bind:progress frameHeight="h-[700vh]">
			<div class="relative w-full h-[100vh] overflow-hidden">
				<div
					class="relative w-full h-full max-w-screen-2xl mx-auto flex flex-row items-center justify-between pl-10"
				>
					<!-- #region text -->
					{#each DATA as step, i}
						<!-- section container -->
						<!-- I added button styling in the data so we don't have to rewrite a bunch of this code for each section -->
						{#if i / DATA.length + 0.07 < progress && (i + 1) / DATA.length + 0.07 > progress}
							<div
								class="w-[41%] relative"
								style={`opacity:${getStyleValue(
									progress,
									i / DATA.length + (5 / 6) * (1 / DATA.length) + 0.07,
									1 / 16,
									1,
									0
								)};
						`}
							>
								<!-- text container -->
								<div
									style={`opacity:${getStyleValue(progress, i / DATA.length + 0.07, 1 / 10, 0, 1)}`}
								>
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
								<span
									class=""
									style={`opacity:${getStyleValue(
										progress,
										i / DATA.length + (3 / 6) * (1 / DATA.length) + 0.07,
										1 / 24,
										0,
										1
									)}`}
								>
									<Button styles={step.cta.tailwindClasses + 'mx-0'}>{step.cta.title}</Button>
								</span>
							</div>
						{/if}
					{/each}
					<!-- #endregion text -->
					<div
						class="absolute flex flex-col items-center justify-center left-0 right-0 w-full h-fit"
						style={`opacity:${getStyleValue(progress, 0.15, 0.05, 0, 1)}; transform:translateY(${
							progress > 0.8
								? getStyleValue(progress, 0.9, 0.2, 1, 100)
								: getStyleValue(progress, 0.1, 0.2, -100, 1)
						}vh)`}
					>
						<span
							style={`
								opacity:${
									progress > 0.8
										? getStyleValue(progress, 0.89, 0.03, 0, 1)
										: getStyleValue(progress, 0.3, 0.03, 1, 0)
								}
							`}
							class="h-[7px] w-[24px] bg-gradient-to-t from-villainRed-200 drop-shadow-smIconRed filter -ml-2 mb-[2px]"
						/>
						<img src="/j-ship-2.svg" alt="j-ship flying" class="mx-auto rotate-180" />
					</div>
					<!-- #region ui animations -->
					<div
						class="w-[41%] right-0 absolute h-[430px] mt-10"
						style={`opacity:${getStyleValue(progress, 0.05, 1 / 10, 0, 1)}`}
					>
						<div
							id="metrics"
							class="absolute flex flex-col items-center justify-center h-full w-[60px]"
							style={`opacity:${
								progress < 0.35 || progress > 2 / 3 + 0.07
									? progress < 0.35
										? getStyleValue(progress, 0.1, 0.05, 0, 1)
										: getStyleValue(progress, 2 / 3 + 0.15, 0.01, 0, 1)
									: getStyleValue(progress, 0.34, 1 / 16, 1, 0)
							} `}
						>
							<PieChart
								value={progress < 2 / 3
									? getStyleValue(progress, 0.19, 0.09, 0, 100)
									: getStyleValue(progress, 2 / 3 + 0.18, 0.12, 0, 355)}>Load <br /> Time</PieChart
							>
							<PieChart
								value={progress < 2 / 3
									? getStyleValue(progress, 0.19, 0.09, 0, 180)
									: getStyleValue(progress, 2 / 3 + 0.18, 0.12, 0, 360)}
								>Best <br /> Practices</PieChart
							>
							<PieChart
								value={progress < 2 / 3
									? getStyleValue(progress, 0.19, 0.09, 0, 200)
									: getStyleValue(progress, 2 / 3 + 0.18, 0.12, 0, 350)}>SEO</PieChart
							>
						</div>

						<div
							id="dummy-ui"
							class="bg-white/10 border-white border-form h-full w-full min-w-[580px] filter drop-shadow-smIconWhite relative"
							style={`transform:translateX(${
								progress > 2 / 3 + 0.07
									? getStyleValue(progress, 2 / 3 + 0.07, 0.1, 0, 100)
									: getStyleValue(progress, 1 / 3 + 0.07, 0.1, 100, 0)
							}px)`}
						>
							{#if progress < 1 / 3 + 0.07}
								<div
									style={`
								opacity: ${getStyleValue(progress, 0.34, 1 / 16, 1, 0)}
							`}
								>
									<div
										id="villian-nav"
										class="flex flex-row justify-start items-center px-5 py-4 text-white border-b-[2px] border-white "
									>
										<img id="villian-nav-logo" src="/wordpress-rex-icon.svg" class="w-9" />
										<p class="text-xl font-bold px-3">Your Site</p>
										<div id="villian-links" class="flex flex-row top-1 relative">
											<p class="text-base px-3 rotate-180">عσ ש</p>
											<p class="text-base px-3 rotate-180">χαع 니σ</p>
											<p class="text-base px-3 rotate-180">אָχεπ</p>
											<p class="text-base px-3 rotate-180">ع비ائع</p>
											<p class="text-base px-3 rotate-180">عσ ש</p>
										</div>
									</div>
									<div
										id="villian-hero"
										class="flex py-16 relative justify-center items-center border-b-[2px] border-white"
									>
										<p class="text-4xl text-white font-semibold rotate-180">여لدאָχεπ ηש하ئ니</p>
										<img
											src="/wordpress-rex-icon.svg"
											class="absolute m-auto opacity-20 filter drop-shadow-smIconWhite h-28"
										/>
									</div>
									<div
										id="villian-text-blocks"
										class="flex flex-row justify-center items-center px-8 py-7 text-white text-[7px]"
									>
										<div class="border-form border-white px-3 py-8">
											여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ
											여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ ש 니عσ ש비 πιχσχσεε기را ش σט기را ד의 즈 χαع
											니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ
											ίρ ا ش σטאָχεπ즈 χαع ιχσε πιχσχσεε기را شσט기را ד의 즈 χعσ ש비 πιχσχσεε기را ش
											σט기را ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 π
										</div>
										<div class="border-form border-white mx-4 px-3 py-8">
											여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ
											여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ ש 니عσ ש비 πιχσχσεε기را ش σט기را ד의 즈 χαع
											니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ
											ίρ ا ش σטאָχεπ즈 χαع ιχσε πιχσχσεε기را شσט기را ד의 즈 χعσ ש비 πιχσχσεε기را ش
											σט기را ד의 즈 χαع 니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 π
										</div>
									</div>
								</div>
							{:else}
								<!-- ui for new website -->
								<div
									id="hero-nav"
									class="text-white flex flex-row justify-between items-center px-7 py-5"
								>
									<div
										id="hero-logo"
										class="flex w-[90px] flex-row "
										style={`opacity:${getStyleValue(progress, 0.48, 0.08, 0, 1)}`}
									>
										<img src="/j-ship-2.svg" class="-rotate-90 w-5 mr-2 filter" />
										<p class="font-semibold whitespace-nowrap font-rubik text-lg">NEW SITE</p>
									</div>
									<div
										class="border-form border-white rounded-md px-4"
										style={`opacity:${getStyleValue(progress, 0.5, 0.08, 0, 1)}`}
									>
										<div
											class="flex flex-row"
											style={`opacity:${getStyleValue(progress, 0.6, 0.08, 0, 1)}`}
										>
											<p class="rotate-180 px-2 text-xs py-1 -mb-1">عσ ש</p>
											<p class="rotate-180 px-2 text-xs py-1 -mb-1">χαع 니σ</p>
											<p class="rotate-180 px-2 text-xs py-1 -mb-1">אָχεπ</p>
											<p class="rotate-180 px-2 text-xs py-1 -mb-1">ع비ائع</p>
										</div>
									</div>
									<div
										class=" relative mt-2 flex flex-col w-[35px] items-end justify-start"
										style={`opacity:${getStyleValue(progress, 0.65, 0.08, 0, 1)}`}
									>
										<div class="mb-1 h-[5px] w-[30px] h-3 bg-white" />
										<div class="mb-1 h-[5px] w-[30px] h-3 bg-white" />
										<div class="mb-1 h-[5px] w-[30px] h-3 bg-white" />

										<p class="absolute mt-28 whitespace-nowrap rotate-90 -left-12 text-lg">
											여لدאָχεπ ηש하ئ니
										</p>
									</div>
								</div>
								<div id="hero-main" class="flex pt-5 pl-3 text-white flex-row">
									<div class="w-[52%]">
										<div class="pl-5 pb-5">
											<p
												class="rotat-180 text-3xl font-bold pt-3 rotate-180 text-right"
												style={`opacity:${getStyleValue(progress, 0.56, 0.08, 0, 1)}`}
											>
												여لدאָχεπ ηש하ئ니
											</p>
											<p
												class="text-xs pb-4 leading-loose"
												style={`opacity:${getStyleValue(progress, 0.58, 0.08, 0, 1)}`}
											>
												여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ
											</p>
											<div
												class="flex flex-row justify-between items-center max-w-[90%]"
												style={`opacity:${getStyleValue(progress, 0.52, 0.08, 0, 1)}`}
											>
												<div class="border-white border-form rounded-md px-3 py-1 mt-1">
													<p
														class="font-light text-xs pb-1"
														style={`opacity:${getStyleValue(progress, 0.6, 0.09, 0, 1)}`}
													>
														χαع비ا
													</p>
												</div>
												<div class="flex flex-row justify-center items-center font-light">
													<div
														class="rounded-full relative border-white border-form p-2 text-xs rotate-180 mr-3"
													>
														<p
															class="text-xs -top-[1px] relative"
															style={`opacity:${getStyleValue(progress, 0.62, 0.08, 0, 1)}`}
														>
															ε기
														</p>
													</div>
													<div
														class="rounded-full relative border-white border-form p-2 text-xs rotate-90 mr-3"
													>
														<p
															class="text-xs -top-[2px] relative"
															style={`opacity:${getStyleValue(progress, 0.64, 0.08, 0, 1)}`}
														>
															שع
														</p>
													</div>
													<div
														class="rounded-full relative border-white border-form p-2 text-xs rotate-90 mr-3"
													>
														<p
															class="text-xs -top-[2px] relative"
															style={`opacity:${getStyleValue(progress, 0.66, 0.08, 0, 1)}`}
														>
															ηש
														</p>
													</div>
												</div>
											</div>
										</div>

										<div
											class="border-white border-form my-4 py-6 px-6 rounded-md ml-3"
											style={`opacity:${getStyleValue(progress, 0.54, 0.08, 0, 1)}`}
										>
											<p
												class="text-[7px] leading-[16px] leading-normal"
												style={`opacity:${getStyleValue(progress, 0.67, 0.08, 0, 1)}`}
											>
												여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ
												여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ ש 니عσ ש비 πιχσχσεε기را ش σט기را ד의 즈 χαع
												니σ ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع
												니σ ίρ ا ش σטאָχεπ즈 χαع
											</p>
										</div>
									</div>
									<div
										class="w-[220px] h-full"
										style={`opacity:${getStyleValue(progress, 0.54, 0.08, 0, 1)}`}
									>
										<img src="/background-j.svg" class="w-full pl-5 object-fill opacity-20" />
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
<!-- #region mobile -->
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
				<div>
					<!-- ui for new website -->
					<div
						id="hero-nav"
						class="text-white flex flex-row justify-between items-center px-7 py-5"
					>
						<div id="hero-logo" class="flex w-[90px] flex-row ">
							<img src="/j-ship-2.svg" class="-rotate-90 w-5 mr-2 filter" />
							<p class="font-semibold whitespace-nowrap font-rubik text-lg">NEW SITE</p>
						</div>
						<div class="flex flex-row border-form border-white rounded-md px-4">
							<p class="rotate-180 px-2 text-xs py-1 -mb-1">عσ ש</p>
							<p class="rotate-180 px-2 text-xs py-1 -mb-1">χαع 니σ</p>
							<p class="rotate-180 px-2 text-xs py-1 -mb-1">אָχεπ</p>
							<p class="rotate-180 px-2 text-xs py-1 -mb-1">ع비ائع</p>
						</div>
						<div class=" relative mt-2 flex flex-col w-[35px] items-end justify-start">
							<div class="mb-1 h-[5px] w-[30px] h-3 bg-white" />
							<div class="mb-1 h-[5px] w-[30px] h-3 bg-white" />
							<div class="mb-1 h-[5px] w-[30px] h-3 bg-white" />

							<p class="absolute mt-28 whitespace-nowrap rotate-90 -left-12 text-lg">
								여لدאָχεπ ηש하ئ니
							</p>
						</div>
					</div>
					<div id="hero-main" class="flex pt-5 pl-3 text-white flex-row">
						<div class="w-[52%]">
							<div class="pl-5 pb-5">
								<p class="rotat-180 text-3xl font-bold pt-3 rotate-180 text-right">
									여لدאָχεπ ηש하ئ니
								</p>
								<p class="text-xs pb-4 leading-loose">
									여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ
								</p>
								<div class="flex flex-row justify-between max-w-[90%]">
									<div
										class="border-white border-form rounded-md px-3 py-1 mt-1 font-light text-xs"
									>
										χαع비ا
									</div>
									<div class="flex flex-row justify-center items-center font-light">
										<div
											class="rounded-full relative border-white border-form p-2 text-xs rotate-180 mr-3"
										>
											<p class="text-xs -top-[1px] relative">ε기</p>
										</div>
										<div
											class="rounded-full relative border-white border-form p-2 text-xs rotate-90 mr-3"
										>
											<p class="text-xs -top-[2px] relative">שع</p>
										</div>
										<div
											class="rounded-full relative border-white border-form p-2 text-xs rotate-90 mr-3"
										>
											<p class="text-xs -top-[2px] relative">ηש</p>
										</div>
									</div>
								</div>
							</div>

							<div class="border-white border-form my-4 py-6 px-6 rounded-md ml-3">
								<p class="text-[7px] leading-[16px] leading-normal">
									여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ
									여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ ש 니عσ ש비 πιχσχσεε기را ش σט기را ד의 즈 χαع 니σ
									ίρ 여لدאָχεπ즈 χαع비ائع ηש하ئ니σ ίρ שعσ ש비 πιχσε기را ش σט ד의 즈 χαع 니σ ίρ ا ش
									σטאָχεπ즈 χαع
								</p>
							</div>
						</div>
						<div class="w-[230px] h-full">
							<img src="/background-j.svg" class="w-full pl-5 object-fill opacity-20" />
						</div>
					</div>
					is here
				</div>
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
<!-- #endregion mobile -->
