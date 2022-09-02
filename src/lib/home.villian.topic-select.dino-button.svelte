<script>
	import Corner from '$lib/box-highlight.corner.svelte';
	const dinoStyles = 'relative w-fit mx-auto max-w-full  border-white/60 border-1 ';
	export let dino;
	export let isSelected;
	const styles =
		'relative flex flex-col justify-center items-center border-1 cursor-pointer w-10/12 h-full group  ';
	const imgStyles =
		'w-10/12 transition-all filter group-hover:drop-shadow-smIconRed group-hover:brightness-[1] py-2 ';
</script>

<div class={isSelected ? styles + 'border-white/80' : styles + 'border-transparent'}>
	<div class="p-4 flex justify-center items-center flex-col">
		<div class={isSelected ? 'opacity-100' : 'opacity-0'}>
			<span
				class="border-white/60 bg-analogBlack-300 border-1 absolute  h-2 md:h-3 w-2 md:w-3 -bottom-2 md:-bottom-1.5 -right-2 md:-right-1.5"
			/>
			<span
				class="border-white/60 bg-analogBlack-300 border-1 absolute  h-2 md:h-3 w-2 md:w-3 -top-2 md:-top-1.5 -right-2 md:-right-1.5"
			/>
			<span
				class="border-white/60 bg-analogBlack-300 border-1 absolute  h-2 md:h-3 w-2 md:w-3 -top-2 md:-top-1.5 -left-2 md:-left-1.5"
			/>
			<span
				class="border-white/60  transition-border bg-analogBlack-300 border-1 absolute  h-2 md:h-3 w-2 md:w-3 -bottom-2 md:-bottom-1.5 -left-2 md:-left-1.5"
			/>
		</div>
		<img
			class={isSelected
				? imgStyles + 'drop-shadow-smIconRed brightness-100'
				: imgStyles + 'brightness-[3]'}
			src={dino.imgSrc}
		/>
		<p class="text-white text-center w-full px-3">{dino.title}</p>
	</div>
</div>
