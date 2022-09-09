<script>
	export let href;
</script>

<a {href}>
	<button
		class="mb-3 w-10/12 max-w-xs bg-jamAqua-100/40 py-5 text-base font-light text-white shadow-jamAqua-100/30 transition-all hover:bg-jamAqua-100 hover:shadow-jamAqua-100/90 md:mx-4 md:w-auto md:max-w-none md:py-5 md:px-14 md:text-base"
		><slot /></button
	>
</a>
