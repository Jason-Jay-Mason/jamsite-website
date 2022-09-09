<script>
	export let fromColor;
	export let direction; // a prop that can be passed to set the direction of the gradient to transparent
	const styles = `bg-gradient-to-${direction === 'bottom' ? 'b' : 't'} ${fromColor} to-transparent -mt-36 h-36 z-0`;
</script>

<div class={styles} />
