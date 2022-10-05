<script>
	import Button from '$lib/home.guide.topic-select.button.svelte';
	import Cta from '$lib/button.svelte';
	import { schedulerModalVisible } from '$lib/stores.js';

	function showModel() {
		schedulerModalVisible.update((v) => (v = true));
	}
	//#region data
	const DATA = [
		{
			buttonMain: 'Site Speed Repairs',
			buttonSub: 'Get a speed boost on your site',
			buttonImgSrc: '/button-dummy.svg',
			headline: 'Get a speed boost on your existing site',
			hook: 'Want to speed up your current site without much time or investment?',
			body: "Get a free site audit from one of our site speed experts, and we will help you implement modern best practices to get the most out of your current website. You will see a massive reduction in your site's load times or your money back.",
			qualifier: 'Businesses that have an in-house website that could benefit from a technical speed boost.',
			cta: 'Schedule Site Audit'
		},
		{
			buttonMain: 'JAMstack Websites',
			buttonSub: 'Lighting fast websites that win',
			buttonImgSrc: '/button-dummy.svg',
			hook: 'Want to build a new site that will gain you a competitive advantage?',
			headline: 'Lighting fast websites that win',
			body: 'JAMstack websites are lightning fast web applications that leverage all of the most recent web technology to deliver absolutely unmatched results in user experience, search engine optimization, site speed, functionality, and more.',
			qualifier: 'Businesses that need a new website that gives them a competitive advantage.',
			cta: 'Schedule Discovery Call'
		},
		{
			buttonMain: 'JAMstack E-commerce',
			buttonSub: 'The future of e-commerce is JAMstack',
			buttonImgSrc: '/button-dummy.svg',
			hook: 'Want to get an ecommerce site that doesn’t lose sales due to poor performance?',
			headline: 'The future of e-commerce is JAMstack',
			body: 'JAMstack is THE modern way to build web applications offering unmatched performance, flexibility, functionality, and user experience. Join top ecommerce brands like Nike, Old Navy, Asus, and ditch the outdated tech. Work with us to find out if your business is a candidate for a modern JAMstack ecommerce experience. ',
			qualifier: 'Ecommerce brands with outdated websites that are ready to take their sales to the next level.',
			cta: 'Schedule Discovery Call'
		}
	];
	//#endregion data
	let selected = 0;
</script>

<div class="relative flex w-full max-w-screen-2xl flex-col justify-center md:pb-12 lg:flex-row" id="guide-container">
	<div
		class="mx-auto mb-10 flex w-full max-w-screen-sm flex-col items-center justify-center border-1 border-white/50 bg-analogBlack-400 bg-gameGrid py-10  px-1 shadow-button shadow-white/10 lg:mb-0 lg:w-1/2 lg:max-w-none lg:py-10 lg:px-10 xl:w-[40%] xl:py-16 xl:px-10"
		id="guide-buttons"
	>
		{#each DATA as topic, i}
			<div on:click={() => (selected = i)} class={i === DATA.length - 1 ? 'w-full' : 'mb-4 w-full'}>
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
				<div class="mr-5 animate-fadeIn">
					<h5 class="pb-6 font-rubik text-3xl font-bold xl:text-4xl">{topic.headline}</h5>
					<p class=" pb-5 text-white"><span class="font-bold">{topic.hook}</span>&nbsp; {topic.body}</p>
					<p class="text-lg font-bold text-white/80">Perfect for...</p>
					<p class="pb-8 italic text-white">
						{topic.qualifier}
					</p>
					<div on:click={showModel} class="mx-auto w-fit lg:mx-0">
						<Cta styles="bg-jamAqua-100/60 hover:bg-jamAqua-100 shadow-jamAqua-100/70 ml-0">{topic.cta}</Cta>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>
