<script>
	export let yPosition;
	export let xPosition;
	let styles = 'border-white/60 bg-analogBlack-300 border-1 absolute';
	if (yPosition === 'top') {
		if (xPosition === 'left') {
			styles += ' h-2 md:h-4 w-2 md:w-4 -top-1 md:-top-2 -left-1 md:-left-2';
		} else {
			styles += ' h-2 md:h-4 w-2 md:w-4 -top-1 md:-top-2 -right-1 md:-right-2';
		}
	} else {
		if (xPosition === 'left') {
			styles += ' h-2 md:h-4 w-2 md:w-4 -bottom-1 md:-bottom-2 -left-1 md:-left-2';
		} else {
			styles += ' h-2 md:h-4 w-2 md:w-4 -bottom-1 md:-bottom-2 -right-1 md:-right-2';
		}
	}
</script>

<span class={styles} />
