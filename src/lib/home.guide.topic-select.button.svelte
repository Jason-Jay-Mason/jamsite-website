<script>
	export let buttonSub;
	export let imgSrc;
	export let selected;

	const styles =
		'w-full px-2 py-5 sm:py-6 lg:py-7 mb-7 w-fit  max-w-lg  mx-auto flex flex-row justify-center lg:justify-start items-center  transition-all cursor-pointer border-white rounded-lg border-form shadow-button shadow-white/40 ';
</script>

<div
	id="guide-button"
	class={styles +
		(selected ? 'bg-jamAqua-200 hover:bg-jamAqua-200' : 'bg-transparent hover:bg-white/10')}
>
	<div class="max-w-sm lg:max-w-md lg:w-full flex flex-row  ">
		<div class={'pr-5 lg:pr-3 lg:w-1/3 flex justify-center items-center ' + (selected && 'filter drop-shadow-icon')}>
			<img class="w-12 md:w-10 xl:w-12" src={imgSrc} />
		</div>

		<div
			id="guide-button-text"
			class={'text-white text-left w-full ' + (selected && 'filter drop-shadow-space')}
		>
			<p id="guide-button-main" class="lg:pb-1 font-bold font-rubik text-xl md:text-lg sm:text-2xl lg:text-2xl">
				<slot />
			</p>
			<p id="guide-button-sub" class="leading-7 text-xs md:text-xs sm:text-base lg:text-sm xl:text-base">{buttonSub}</p>
		</div>
	</div>
</div>
