<script>
	export let buttonSub;
	export let imgSrc;
	export let selected;

	const styles =
		'w-full px-4 py-5 sm:py-6 lg:py-7 w-fit  max-w-lg  mx-auto flex flex-row justify-center lg:justify-center items-center  transition-all cursor-pointer m ';
</script>

<div id="guide-button" class={styles + (selected ? 'bg-jamAqua-200 hover:bg-jamAqua-200' : 'bg-transparent hover:bg-white/10')}>
	<div class="flex flex-row items-center justify-center">
		<div class={'flex items-center justify-center pr-5 lg:w-28 lg:pr-3 ' + (selected && 'drop-shadow-icon filter')}>
			<img alt={buttonSub} class="w-10 md:w-9 xl:w-10" src={imgSrc} />
		</div>

		<div id="guide-button-text" class={'w-full text-left text-white ' + (selected && 'drop-shadow-space filter')}>
			<p id="guide-button-main" class="font-rubik text-base font-semibold sm:text-2xl md:text-lg lg:pb-1 lg:text-2xl">
				<slot />
			</p>
			<p id="guide-button-sub" class="text-xs leading-7 sm:text-base md:text-xs lg:text-sm xl:text-base">
				{buttonSub}
			</p>
		</div>
	</div>
</div>
