<script>
	export let data;
	let messageIndex = 0;
	let letterIndex = 0;
	let deleting = false;
	$: currentMessage = letterIndex === 0 ? '' : data[messageIndex].slice(0, letterIndex);

	const handleTyping = () => {
		if (deleting === false) {
			if (letterIndex === data[messageIndex].length) {
				deleting = true;
			} else {
				letterIndex++;
			}
		} else {
			if (letterIndex === 0) {
				deleting = false;
				if (messageIndex === data.length - 1) {
					messageIndex = 0;
				} else {
					messageIndex++;
				}
			} else {
				letterIndex--;
			}
		}
	};

	let typingInt;
	$: {
		clearInterval(typingInt);
		if (letterIndex === data[messageIndex].length) {
			typingInt = setInterval(handleTyping, 3000);
		} else {
			if (deleting) {
				typingInt = setInterval(handleTyping, Math.random() * (90 - 80) + 80);
			} else {
				typingInt = setInterval(handleTyping, Math.random() * (160 - 80) + 80);
			}
		}
	}

	let cursorActive = true;
	let cursorMs = 600;

	const handleCursor = () => {
		if (letterIndex === data[messageIndex].length) {
			cursorActive = !cursorActive;
		} else {
			cursorActive = true;
		}
	};

	let clearCursor;
	$: {
		clearInterval(clearCursor);
		clearCursor = setInterval(handleCursor, cursorMs);
	}
</script>

<div class="relative mx-auto flex w-fit items-center justify-center pb-1">
	<span class="w-auto">
		{currentMessage}&nbsp;
		{#if cursorActive}
			<span class="absolute -ml-2 font-thin md:-ml-5">|</span>
		{/if}
	</span>
</div>
