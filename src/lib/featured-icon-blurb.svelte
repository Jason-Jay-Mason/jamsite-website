<!-- Simple component to be used in sections for the site look at the "problem" section on the homepage to see an example -->
<script>
	export let headline;
	export let body;
	export let iconSrc;
	export let iconStyle;
</script>

<div class="flex w-full flex-col py-7 text-white md:px-4">
	<img alt={`${headline} icon`} src={iconSrc} class="w-12 pb-6" style={iconStyle} />
	<h4 class="pb-3 text-xl md:text-2xl">{headline}</h4>
	<p>
		<slot />
	</p>
</div>
