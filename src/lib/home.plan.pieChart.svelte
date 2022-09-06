<script>
	export let value;
	let donutStyles;
	let backgroundClasses = '';
	$: {
		if (value <= 0) {
			donutStyles = `background: conic-gradient(#ffffff ${value}deg, transparent ${value}deg 360deg); mask:radial-gradient(farthest-side,transparent 85%, #ffffff 86% )`;
			backgroundClasses = 'bg-white/10 ';
		}
		if (value > 0 && value < 300) {
			donutStyles = `background: conic-gradient(#CE4D45 ${value}deg, transparent ${value}deg 360deg); mask:radial-gradient(farthest-side,transparent 85%, #ffffff 86% )`;
			backgroundClasses = 'bg-villainRed-100/10 ';
		}
		if (value > 300) {
			donutStyles = `background: conic-gradient(#2AA876 ${value}deg, transparent ${value}deg 360deg); mask:radial-gradient(farthest-side,transparent 85%, #ffffff 86% )`;
			backgroundClasses = 'bg-successGreen-100/10 ';
		}
	}
</script>

<div
	class={backgroundClasses +
		' relative rounded-full h-20 w-20 mb-5 opacity-90 flex justify-center items-center '}
>
	<p class="relative z-20 text-white text-xs font-body text-center ">
		<slot />
	</p>

	<div
		class="absolute h-full w-full flex items-center justify-center rounded-full top-0 "
		style={donutStyles}
	>
		<div
			class={backgroundClasses + 'h-[85%] w-[85%] rounded-full flex items-center justify-center'}
		/>
	</div>
</div>
