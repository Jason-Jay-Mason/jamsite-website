<script>
	export let subHeadline;
</script>

<div class=" m-auto max-w-screen-lg text-center md:max-w-screen-sm lg:max-w-none">
	<h3 class="text-1xl xl:4xl pb-2 font-light md:pb-5 md:text-3xl">{subHeadline}</h3>
	<h4 class="pb-10 text-3xl font-extrabold md:text-5xl lg:pb-16 xl:text-6xl">
		<slot />
	</h4>
</div>
