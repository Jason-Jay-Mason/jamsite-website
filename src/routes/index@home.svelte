<script>
	import Contact from '$lib/home.contact.svelte';
	import Hero from '$lib/home.hero.svelte';
	import Scheduler from '$lib/modal.scheduler.svelte';
	import Video from '$lib/modal.video.svelte';
	import Problem from '$lib/home.problem.svelte';
	import Guide from '$lib/home.guide.svelte';
	import Plan from '$lib/home.plan.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Rubik:wght@300;400;500;700;800&display=swap" rel="stylesheet" />

	<title>JamSite</title>
	<meta name="robots" content="follow" />
	<meta name="description" content="A web design and development agency helping businesses absolutely crush it with jamstack technology!" />
	<meta property="og:url" content="https://www.jamsite.agency" />
	<link rel="canonical" href="https://www.jamsite.agency" />
	<meta property="og:site_name" content="JamSite" />
	<meta property="og:title" content="JamSite" />
	<meta property="og:description" content="A web design and development agency helping businesses absolutely crush it with jamstack technology!" />
	<meta property="og:image" content="/site-image.jpg" />
	<meta property="twitter:title" content="JamSite" />
	<meta
		property="twitter:description"
		content="A web design and development agency helping businesses absolutely crush it with jamstack technology!"
	/>
	<meta property="twitter:image" content="/site-image-tw.jpg" />
	<meta property="twitter:card" content="summary_large_image" />
</svelte:head>

<Video />
<Scheduler />
<Hero />
<Problem />
<Guide />
<Plan />
<Contact />
