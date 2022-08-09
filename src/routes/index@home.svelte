<script>
	import Contact from '$lib/home.contact.svelte';
	import Hero from '$lib/home.hero.svelte';
	import Scheduler from '$lib/modal.scheduler.svelte';
	import Video from '$lib/modal.video.svelte';
	import Problem from '$lib/home.problem.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Rubik:wght@300;400;500;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Video />
<Scheduler />
<Hero />
<Problem />
<Contact />
