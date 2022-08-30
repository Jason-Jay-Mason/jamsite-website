<script>
	import Button from '$lib/home.guide.topic-select.button.svelte';
	//#region data
	const DATA = [
		{
			buttonMain: 'Website & Web Apps',
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
			buttonMain: 'Website & Web Apps',
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
			buttonMain: 'Website & Web Apps',
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

<div
	class="flex flex-col md:flex-row justify-start md:justify-between max-w-screen-xl w-full mx-auto relative"
	id="guide-container"
>
	<div
		class="flex flex-col justify-center w-full md:w-2/3 lg:pr-20 md:pr-7 py-14 md:py-0"
		id="guide-buttons"
	>
		{#each DATA as topic, i}
			<div on:click={() => (selected = i)}>
				<Button selected={selected === i} imgSrc={topic.buttonImgSrc} buttonSub={topic.buttonSub}
					>{topic.buttonMain}</Button
				>
			</div>
		{/each}
	</div>

	<div
		id="guide-blurb"
		class="flex flex-col justify-center items-start text-center  md:text-left w-full"
	>
		{#each DATA as topic, i}
			{#if selected === i}
				<div class="animate-fadeIn">
					<h5 class="text-4xl font-bold font-rubik pb-8">{topic.headline}</h5>
					<p class="text-white pb-9">{topic.body}</p>
					<div class="px-2">
						<p class="text-white/30 text-lg font-bold">Primary arsenal...</p>
						<div
							id="guide-toolingImgs"
							class="flex flex-row flex-wrap justify-center md:justify-start pt-7"
						>
							{#each topic.toolingImgs as img}
								<img src={img.imgSrc || '/'} class="pr-8 pb-7 w-32 md:w-36" />
							{/each}
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>
