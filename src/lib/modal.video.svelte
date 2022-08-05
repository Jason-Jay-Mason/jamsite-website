<script>
	import Modal from '$lib/modal.container.svelte';
	import { videoModalVisible } from '$lib/stores.js';
</script>

<Modal store={videoModalVisible}>
	<div
		class="w-screen flex flex-col justify-center items-center h-full md:h-full max-w-3xl mx-auto pt-4"
	>
		<div class="w-full h-4/6 max-h-[435px]">
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
