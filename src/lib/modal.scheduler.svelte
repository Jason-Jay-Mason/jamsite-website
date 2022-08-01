<script>
	import Modal from '$lib/modal.container.svelte';
	import { schedulerModalVisible } from '$lib/stores.js';
	import Calendar from '$lib/modal.scheduler.calendar.svelte';
</script>

<Modal store={schedulerModalVisible}>
	<Calendar />
</Modal>
