<script>
	import Button from '$lib/home.guide.topic-select.button.svelte';
	//#region data
	const DATA = [
		{
			buttonMain: 'JamStack Websites',
			buttonSub: "We're a web design and development",
			buttonImgSrc: '/button-dummy.svg',
			headline: 'Speed, maintainability & security',
			body: 'We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit.We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit.',
			toolingImgs: [
				{
					imgSrc: '/vercel.svg'
				},
				{
					imgSrc: '/vercel.svg'
				}
			]
		},
		{
			buttonMain: 'Mobile and Web Apps',
			buttonSub: "We're a web design and development",
			buttonImgSrc: '/button-dummy.svg',
			headline: 'Websites & Web Apps',
			body: 'We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit.We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit.',
			toolingImgs: [
				{
					imgSrc: '/vercel.svg'
				},
				{
					imgSrc: '/vercel.svg'
				}
			]
		},
		{
			buttonMain: 'Ecommerce Stores',
			buttonSub: "We're a web design and development",
			buttonImgSrc: '/button-dummy.svg',
			headline: 'Websites & Web Apps',
			body: 'We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit.',
			toolingImgs: [
				{
					imgSrc: '/vercel.svg'
				},
				{
					imgSrc: '/vercel.svg'
				}
			]
		}
	];
	//#endregion data
	let selected = 0;
</script>

<div class="relative mx-auto flex w-full max-w-screen-2xl flex-col justify-center md:pb-12 lg:flex-row" id="guide-container">
	<div
		class="mx-auto mb-10 flex w-full max-w-screen-sm flex-col items-center justify-center border-1 border-white/50 bg-analogBlack-400 bg-gameGrid py-10  px-1 shadow-button shadow-white/10 lg:mb-0 lg:w-1/2 lg:max-w-none lg:py-10 lg:px-10 xl:w-[40%] xl:py-16 xl:px-10"
		id="guide-buttons"
	>
		{#each DATA as topic, i}
			<div on:click={() => (selected = i)} class={i === DATA.length - 1 ? '' : 'mb-4'}>
				<Button selected={selected === i} imgSrc={topic.buttonImgSrc} buttonSub={topic.buttonSub}>{topic.buttonMain}</Button>
			</div>
		{/each}
	</div>

	<div
		id="guide-blurb"
		class="mx-auto flex w-full max-w-screen-sm flex-col items-start justify-center pt-14 text-center md:pt-0 lg:ml-7  lg:w-1/2 lg:max-w-none lg:text-left xl:ml-16 xl:w-[60%]"
	>
		{#each DATA as topic, i}
			{#if selected === i}
				<div class="animate-fadeIn">
					<h5 class="pb-8 font-rubik text-3xl font-bold xl:text-4xl">{topic.headline}</h5>
					<p class="pb-9 text-white">{topic.body}</p>
					<div class="px-2">
						<p class="text-lg font-bold text-white/30">Primary arsenal...</p>
						<div id="guide-toolingImgs" class="flex flex-row flex-wrap justify-center pt-7 lg:justify-start">
							{#each topic.toolingImgs as img}
								<img alt={`${topic.headline}`} src={img.imgSrc || '/'} class="w-32 pr-8 pb-7 md:w-36" />
							{/each}
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>
