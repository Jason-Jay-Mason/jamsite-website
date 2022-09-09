<script>
	import Modal from '$lib/modal.container.svelte';
	import { videoModalVisible } from '$lib/stores.js';
</script>

<Modal store={videoModalVisible}>
	<div class="mx-auto flex h-full w-screen max-w-3xl flex-col items-center justify-center pt-4 md:h-full">
		<div class="h-4/6 max-h-[435px] w-full">
			<iframe
				width="100%"
				height="100%"
				src="https://www.youtube.com/embed/sxrBUcUr3R0?autoplay=1"
				title="Video"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				autoplay
			/>
		</div>
	</div>
</Modal>
