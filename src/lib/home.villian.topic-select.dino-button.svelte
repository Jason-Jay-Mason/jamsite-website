<script>
	import Corner from '$lib/box-highlight.corner.svelte';
	export let dino;
	export let isSelected;
	const styles = 'relative max-w-[160px] md:max-w-none flex flex-col transition-all justify-center items-center cursor-pointer w-10/12 h-full group ';
	const imgStyles = 'w-[90%] transition-all filter py-2 ';
</script>

<div class={isSelected ? styles + 'bg-villainRed-300' : styles + 'hover:bg-white/10'}>
	<div class="flex flex-col items-center justify-center p-4">
		<img class={isSelected ? imgStyles + 'drop-shadow-space' : imgStyles + ''} src={dino.imgSrc} />
		<p class="w-full px-3 text-center font-rubik text-white filter">
			{dino.title}
		</p>
	</div>
</div>
