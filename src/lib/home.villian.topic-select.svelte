<script>
	import DinoButton from '$lib/home.villian.topic-select.dino-button.svelte';
	import { onDestroy } from 'svelte';
	import { schedulerModalVisible } from '$lib/stores.js';

	//function to open the scheduler by updating the show modal store
	function showModal() {
		schedulerModalVisible.update((value) => (value = true));
	}

	//#region data
	const DATA = [
		{
			title: 'WordPress',
			alt: 'Wordpress Rex',
			imgSrc: '/wordpress-rex-icon.svg',
			sprite: '/wordpress-rex-dark2.svg',
			blurb:
				'Wordpress is the content management system behind 43% of websites online. Despite being the platform that most businesses/agencies choose to use when building a website, the combination of a lack of technical know-how, and inherent issues with wordpress itself, have led many businesses to reap disastrous consequences.',
			linkText: 'Learn more about how your wordpress website is effecting your bottom line and how to fix it.',
			downsides: [
				{
					title: 'Site Speed',
					blurb: '612% slower than modern sites'
				},
				{
					title: 'Security',
					blurb: '90% of all hacking attempts'
				},
				{
					title: 'Vendor Lockin',
					blurb: '$50-$600/month for quality hosting'
				}
			]
		},
		{
			title: 'Analytics',
			alt: 'Google Analytics',
			imgSrc: '/wordpress-rex-icon.svg',
			sprite: '/wordpress-rex.svg',
			blurb:
				'Many businesses use Google products like Analytics on their websites. Each of the products are essentially blocks of code that are fetched from Google’s slow servers when a user loads a webpage. As a result, page speed scores are negatively impacted. ',
			linkText: 'Learn about the impact of 3rd party scripts like Google Analytics.',
			downsides: [
				{
					title: 'Site Speed',
					blurb: 'Can add over 1 second load time'
				},
				{
					title: 'Search Rank',
					blurb: 'Can cause lower search engine rank'
				}
			]
		},
		{
			title: 'Wix',
			alt: 'Wix',
			imgSrc: '/wordpress-rex-icon.svg',
			sprite: '/wordpress-rex.svg',
			blurb:
				'Wix is a page builder and second most popular content management system. Due to the outdated technology they use under the hood, the average page speed for a wix site is slower than modern best practices. Unlike Wordpress, Wix’s page builder is purely visual which means that technical improvements to the base site speed are nearly impossible in most cases.',
			linkText: 'Learn about page builders that perform better than Wix.',
			downsides: [
				{
					title: 'Site Speed',
					blurb: '496% slower than modern sites'
				},
				{
					title: 'No Code',
					blurb: 'Speed improvements are impossible'
				},
				{
					title: 'Vendor Lockin',
					blurb: 'Locked in to paid membership'
				}
			]
		},
		{
			title: 'Adobe',
			alt: 'Wordpress Rex',
			imgSrc: '/wordpress-rex-icon.svg',
			sprite: '/wordpress-rex.svg',
			blurb:
				'Adobe sells a host of premier enterprise tier content management tools that are used by the likes of Ben n Jerry’s, Helly Hanson, and Land Rover just to name a few. Despite the clout, this platform is associated with websites that have THE worst performance scores out of all outdated technologies. ',
			linkText: 'Learn how you can improve enterprise site speed without sacrificing the convenience of content management.',
			downsides: [
				{
					title: 'Site Speed',
					blurb: '1235% slower than modern sites'
				},
				{
					title: 'Maintence',
					blurb: 'Many moving parts involved'
				},
				{
					title: 'Cost',
					blurb: 'Used in enterprise businesses'
				}
			]
		},
		{
			title: 'Shopify',
			alt: 'Shopify page builder',
			imgSrc: '/wordpress-rex-icon.svg',
			sprite: '/wordpress-rex.svg',
			blurb:
				'Shopify is a complete ecommerce solution geared toward small to enterprise tier businesses. Many businesses choose to build their websites using shopify themes and page builders that are not optimized for performance. Unfortunately, these businesses suffer lost sales as a result despite the real benefits of using shopify. ',
			linkText: 'Learn how you can use headless shopify to win back lost sales.',
			downsides: [
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				},
				{
					title: 'Customizability',
					blurb: 'Contraints in design capabilies'
				},
				{
					title: 'Sales',
					blurb: '53% of visitors leave after 3 seconds'
				}
			]
		},
		{
			title: 'Squarespace',
			alt: 'Squarespace',
			imgSrc: '/wordpress-rex-icon.svg',
			sprite: '/wordpress-rex.svg',
			blurb:
				'Squarespace is a page builder and third most popular content management system. Many squarespace sites are not optimized with current site speed techniques out of the box, which results in poor performance in many cases.',
			linkText: 'Learn how you can optimize a Squarespace website and improve site speed.',
			downsides: [
				{
					title: 'Site Speed',
					blurb: '50% of site load > 5 seconds'
				},
				{
					title: 'Functionality',
					blurb: 'Advanced use cases not possible'
				},
				{
					title: 'Vendor Lockin',
					blurb: 'Locked in to paid membership'
				}
			]
		}
	];
	//#endregion data
	let selected = DATA[0];

	//handle animating the large dino
	let frame = false; //since the sprite only has two frames we use false->frame 1 true->frame 2

	function updateFrame() {
		frame = !frame;
	}
	let interval = setInterval(updateFrame, 1000); //Change the frame every second

	//Do the clean up for the interval
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
					<p class="text-center text-white lg:text-left">
						{dino.blurb}
						{#if dino.linkText}
							<span on:click={showModal} class="cursor-pointer text-villainRed-100 hover:text-villainRed-200">{dino.linkText}</span>
						{/if}
					</p>
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
