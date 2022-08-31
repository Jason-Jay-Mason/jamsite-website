<!-- Simple component to be used in sections for the site look at the "problem" section on the homepage to see an example -->
<script>
	export let headline;
	export let body;
	export let iconSrc;
	export let iconStyle;
</script>

<div class="flex flex-col w-full py-7 md:px-4 text-white">
	<img src={iconSrc} class="w-12 pb-6" style={iconStyle} />
	<h4 class="text-xl md:text-2xl pb-3">{headline}</h4>
	<p>{body}</p>
</div>
