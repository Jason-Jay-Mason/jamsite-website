<script>
	import DinoButton from '$lib/home.villian.topic-select.dino-button.svelte';
	import { onDestroy } from 'svelte';
	//#region data
	const DATA = [
		{
			title: 'WordPress',
			alt: 'Wordpress Rex',
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
			alt: 'Wordpress Rex',
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
			alt: 'Wordpress Rex',
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
			alt: 'Wordpress Rex',
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
			alt: 'Wordpress Rex',
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
			alt: 'Wordpress Rex',
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

<div id="villian-dislplay" class="mx-3 flex max-w-screen-2xl flex-col items-center justify-center lg:mx-auto lg:flex-row  lg:pr-4">
	<div
		id="dino-select"
		class="mx-auto mb-10 flex w-full max-w-screen-sm items-center justify-center  border-1 border-white/50 bg-analogBlack-400 bg-gameGrid shadow-button shadow-white/10 lg:mb-0 lg:w-1/2 lg:max-w-none xl:w-[40%]"
	>
		<div
			class="grid max-w-md grid-cols-2 items-center justify-center py-10 px-1 sm:grid-cols-3 lg:max-w-none lg:grid-cols-3 lg:py-10 lg:px-10 xl:py-16 xl:px-10"
		>
			{#each DATA as dino}
				<div on:click={() => (selected = dino)} class="flex items-center justify-center py-2  lg:py-3 ">
					<DinoButton {dino} isSelected={dino === selected} />
				</div>
			{/each}
		</div>
	</div>
	<div id="selected-villian-display" class="ml-0 h-fit w-full max-w-screen-md px-3 lg:ml-4 lg:w-1/2 lg:max-w-none xl:ml-16 xl:w-[60%] ">
		{#each DATA as dino}
			<div class={selected === dino ? 'block animate-fadeIn' : 'hidden'}>
				<div class="flex flex-row items-center justify-center">
					{#if frame}
						<img alt={`${dino.alt} animated`} src={dino.sprite} class="mr-10 hidden h-[170px] w-[170px] object-cover object-left filter  xl:block" />
					{:else}
						<img alt={`${dino.alt} animated`} src={dino.sprite} class="mr-10 hidden h-[170px] w-[170px] object-cover object-right filter xl:block" />
					{/if}
					<p class="text-center text-white lg:text-left">{dino.blurb}</p>
				</div>
				<div class="flex w-full flex-row flex-wrap items-center justify-center pt-10 lg:justify-start">
					{#each dino.downsides as downside}
						<div class="flex max-w-[240px] flex-row items-center justify-start py-2 md:pr-3 xl:w-[33%]">
							<img alt="Negative down arrow" src="/negative-arrow.svg" />
							<div>
								<p class="font-rubik font-semibold text-white">{downside.title}</p>
								<p class="leading-tight text-white">{downside.blurb}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
