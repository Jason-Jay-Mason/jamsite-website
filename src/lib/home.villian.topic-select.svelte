<script>
	import DinoButton from '$lib/home.villian.topic-select.dino-button.svelte';
	import { onDestroy } from 'svelte';
	//#region data
	const DATA = [
		{
			title: 'WordPress',
			imgSrc: '/wordpress-rex-icon.svg',
			sprite: '/wordpress-rex-dark2.svg',
			blurb:
				'Some blurb here We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit.Some blurb here We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit.',
			downsides: [
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				},
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				},
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				}
			]
		},
		{
			title: 'WordPress',
			imgSrc: '/wordpress-rex-icon.svg',
			sprite: '/wordpress-rex.svg',
			blurb:
				'Some blurb here We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit.',
			downsides: [
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				},
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				},
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				}
			]
		},
		{
			title: 'WordPress',
			imgSrc: '/wordpress-rex-icon.svg',
			sprite: '/wordpress-rex.svg',
			blurb:
				'Some blurb here We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit.',
			downsides: [
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				},
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				},
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				}
			]
		},
		{
			title: 'WordPress',
			imgSrc: '/wordpress-rex-icon.svg',
			sprite: '/wordpress-rex.svg',
			blurb:
				'Some blurb here We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit.',
			downsides: [
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				},
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				},
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				}
			]
		},
		{
			title: 'WordPress',
			imgSrc: '/wordpress-rex-icon.svg',
			sprite: '/wordpress-rex.svg',
			blurb:
				'Some blurb here We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit.',
			downsides: [
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				},
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				},
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				}
			]
		},
		{
			title: 'WordPress',
			imgSrc: '/wordpress-rex-icon.svg',
			sprite: '/wordpress-rex.svg',
			blurb:
				'Some blurb here We’re a web design and development agency on a mission to defend businesses from cyberspace dinosaurs and feed starving children. Click the button below to book a call and get a free site audit.',
			downsides: [
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				},
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				},
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				}
			]
		}
	];
	//#endregion data
	let selected = DATA[0];
	let frame = false;

	function updateFrame() {
		frame = !frame;
	}
	let interval = setInterval(updateFrame, 1000);

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div
	id="villian-dislplay"
	class=" flex flex-col justify-center items-center md:flex-row max-w-screen-2xl mx-auto mt-8 pb-20 md:pb-0 md:pr-4 "
>
	<div
		id="dino-select"
		class="bg-analogBlack-400 w-full md:w-[40%] bg-gameGrid flex justify-center items-center border-1 border-white/50 shadow-button shadow-white/10"
	>
		<div
			class="max-w-md lg:max-w-none grid justify-center items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 py-20 px-1 xl:px-7"
		>
			{#each DATA as dino}
				<div on:click={() => (selected = dino)} class="flex items-center justify-center py-3">
					<DinoButton {dino} isSelected={dino === selected} />
				</div>
			{/each}
		</div>
	</div>
	<div
		id="selected-villian-display"
		class="px-5 ml-0 md:ml-4 xl:ml-16 w-full md:w-[60%] h-fit pt-20 md:pt-0 "
	>
		{#each DATA as dino}
			<div class={selected === dino ? 'block animate-fadeIn' : 'hidden'}>
				<div class="flex flex-row justify-center items-center">
					{#if frame}
						<img
							src={dino.sprite}
							class="hidden xl:block h-[170px] w-[170px] object-cover object-left filter  mr-10"
						/>
					{:else}
						<img
							src={dino.sprite}
							class="hidden xl:block h-[170px] w-[170px] object-cover object-right filter mr-10"
						/>
					{/if}

					<p class="text-white text-center md:text-left">{dino.blurb}</p>
				</div>
				<div
					class="flex flex-row justify-center sm:justify-start items-center w-full pt-10 flex-wrap"
				>
					{#each dino.downsides as downside}
						<div
							class="flex flex-row justify-start items-center md:pr-3 max-w-[240px] xl:w-[33%] py-2"
						>
							<img src="/negative-arrow.svg" />
							<div>
								<p class="text-white font-rubik font-semibold">{downside.title}</p>
								<p class="text-white leading-tight">{downside.blurb}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
