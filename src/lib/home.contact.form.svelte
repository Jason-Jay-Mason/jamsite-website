<script>
	import StyledInput from '$lib/form.styled-input.svelte';
	import Button from '$lib/button.svelte';
	import { goto } from '$app/navigation';
	import Spinner from '$lib/spinner.svelte';
	import { fade } from 'svelte/transition';

	let formValues = {
		name: {
			valid: false,
			value: ''
		},
		email: {
			valid: false,
			value: ''
		},
		message: {
			valid: false,
			value: ''
		}
	};

	$: formValid = !Object.values(formValues).some(({ valid }) => valid === false);

	const formUrl = 'https://submit-form.com/nZtmp841';
	let loading = false;
	let formError = null;
	async function handleSubmit() {
		loading = true;
		try {
			const res = await fetch(formUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(formValues)
			});
			loading = false;
			goto('/thank-you');
		} catch (err) {
			loading = false;
			formError = 'It looks like there was a problem with this form. Please try again later.';
			console.error(err);
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="group flex w-full flex-col">
	<div class="flex w-full flex-col items-center justify-center md:flex-row">
		<div class="w-full px-2">
			<StyledInput placeholder="Name" type="text" bind:formValue={formValues.name.value} bind:valid={formValues.name.valid} />
		</div>
		<div class="w-full px-2">
			<StyledInput placeholder="Email" type="email" bind:formValue={formValues.email.value} bind:valid={formValues.email.valid} />
		</div>
	</div>
	<StyledInput placeholder="How can we help?" type="text-area" bind:formValue={formValues.message.value} bind:valid={formValues.message.valid} />
	{#if formError}
		<p class="text-villainRed-100">{formError}</p>
	{:else if formValid}
		<div transition:fade class="flex w-full items-center justify-center">
			<Button
				type="submit"
				styles="transition-all
			group-invalid:invisible
			mx-auto
			bg-successGreen-100/60
			hover:bg-successGreen-100
			shadow-successGreen-100/60 
			hover:shadow-successGreen-100/90
			mt-8 "
			>
				{#if loading}
					<Spinner styles="-ml-1 mr-3 h-5 w-5 text-white" />
					Please wait...
				{:else}
					Send Message
				{/if}
			</Button>
		</div>
	{/if}
</form>
