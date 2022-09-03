<script>
	import Corner from '$lib/box-highlight.corner.svelte';
	export let dino;
	export let isSelected;
	const styles =
		'relative max-w-[160px] md:max-w-none flex flex-col transition-all justify-center items-center cursor-pointer w-10/12 h-full group ';
	const imgStyles = 'w-[90%] transition-all filter py-2 ';
</script>

<div class={isSelected ? styles + 'bg-villainRed-300' : styles + 'hover:bg-white/10'}>
	<div class="p-4 flex justify-center items-center flex-col">
		<img class={isSelected ? imgStyles + 'drop-shadow-space' : imgStyles + ''} src={dino.imgSrc} />
		<p class="text-white font-rubik text-center w-full px-3 filter">
			{dino.title}
		</p>
	</div>
</div>
