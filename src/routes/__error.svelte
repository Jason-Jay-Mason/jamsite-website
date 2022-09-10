<script>
	import '../app.css';
	import ThankYouPage from '$lib/thank-you.svelte';
	import { page } from '$app/stores';
</script>

<ThankYouPage message="" headline={`Oops, ${$page.status} ${$page.error.message}`} />
