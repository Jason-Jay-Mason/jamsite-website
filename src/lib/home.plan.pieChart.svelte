<script>
	export let value;
	let donutStyles;
	let backgroundClasses = '';
	$: {
		if (value <= 0) {
			donutStyles = `background: conic-gradient(#ffffff ${value}deg, transparent ${value}deg 360deg); -webkit-mask-image: radial-gradient(farthest-side,transparent 85%, #ffffff 86% ); mask:radial-gradient(farthest-side,transparent 85%, #ffffff 86% )`;
			backgroundClasses = 'bg-white/10 ';
		}
		if (value > 0 && value < 300) {
			donutStyles = `background: conic-gradient(#CE4D45 ${value}deg, transparent ${value}deg 360deg); -webkit-mask-image: radial-gradient(farthest-side,transparent 85%, #ffffff 86% );mask:radial-gradient(farthest-side,transparent 85%, #ffffff 86% )`;
			backgroundClasses = 'bg-villainRed-100/10 shadow-button shadow-villainRed-200/20 ';
		}
		if (value > 300) {
			donutStyles = `background: conic-gradient(#2AA876 ${value}deg, transparent ${value}deg 360deg); -webkit-mask-image: radial-gradient(farthest-side,transparent 85%, #ffffff 86% );mask:radial-gradient(farthest-side,transparent 85%, #ffffff 86% )`;
			backgroundClasses = 'bg-successGreen-100/10 shadow-button shadow-successGreen-200/40 ';
		}
	}
</script>

<div class={backgroundClasses + ' relative mx-2 mb-5 flex h-20 w-20 items-center justify-center rounded-full opacity-90 lg:mx-0  '}>
	<p class="relative z-20 text-center font-body text-xs text-white ">
		<slot />
	</p>

	<div class="absolute top-0 flex h-full w-full items-center justify-center rounded-full" style={donutStyles}>
		<div class={backgroundClasses + 'flex h-[85%] w-[85%] items-center justify-center rounded-full'} />
	</div>
</div>
