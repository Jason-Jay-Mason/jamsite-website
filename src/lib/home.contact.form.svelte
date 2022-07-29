<script>
	import Input from '$lib/form.input.svelte';
	import Button from '$lib/button.svelte';
	import { goto } from '$app/navigation';

	const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
	const labelStyling = 'flex w-full flex-col-reverse ';
	const validationInputStyling =
		' peer border-white placeholder-shown:valid:border-white placeholder-shown:valid:shadow-white/30 invalid:focus:border-warnYellow-100 invalid:focus:shadow-warnYellow-100/30 valid:border-successGreen-100 valid:shadow-successGreen-100/30  invalid:border-villainRed-100 invalid:shadow-villainRed-100/30';
	const inputStyling =
		'shadow-button text-white bg-transparent border-form rounded-md placeholder:text-center placehoder:text-lg placeholder:text-white focus:placeholder:text-transparent' +
		validationInputStyling;
	const messageStyling =
		'text-center text-sm pb-2 peer-focus:peer-invalid:invisible peer-invalid:text-villainRed-100 peer-valid:text-successGreen-100 peer-valid:visible peer-placeholder-shown:peer-valid:invisible peer-empty:peer-invalid:visible';

	let formValues = {
		name: null,
		email: null,
		message: null
	};

	let buttonStyles =
		'transition-all group-invalid:invisible mx-auto bg-successGreen-100/60 hover:bg-successGreen-100 shadow-successGreen-100/60 hover:shadow-successGreen-100/90 mt-8 ';
	let submitStyles = buttonStyles + 'invisible';

	$: {
		let found = Object.values(formValues).findIndex((e) => e === null);
		if (found === -1) {
			submitStyles = buttonStyles + 'visible group-valid:animate-fadeIn';
		} else {
			submitStyles = buttonStyles + 'invisible';
		}
	}

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

<form on:submit|preventDefault={handleSubmit} class="group flex flex-col w-full">
	<div class="flex w-full flex-col md:flex-row justify-center items-center">
		<Input
			labelStyling={labelStyling + 'px-3'}
			inputStyling={inputStyling + ' h-16 text-center'}
			{messageStyling}
			placeholder="Name"
			required={true}
			validExpMessage="✓"
			type="input"
			bind:formValue={formValues.name}
		/>

		<Input
			labelStyling={labelStyling + ' px-3'}
			inputStyling={inputStyling + ' h-16 text-center'}
			{messageStyling}
			placeholder="Email"
			required={true}
			invalidExpMessage="Please enter a valid email."
			validExpMessage="✓"
			validationExpression={emailRegex}
			type="input"
			bind:formValue={formValues.email}
		/>
	</div>

	<Input
		labelStyling={labelStyling + 'px-3 py-4'}
		inputStyling={inputStyling +
			' text-left p-5 h-60  placeholder:text-center placeholder:leading-[12rem]'}
		{messageStyling}
		placeholder="How can we help?"
		required={true}
		validExpMessage="✓"
		type="text-area"
		bind:formValue={formValues.message}
	/>
	{#if formError}
		<p class="text-villainRed-100">{formError}</p>
	{:else}
		<Button type="submit" styles={submitStyles}>
			{#if loading}
				<svg
					class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					/>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
				Please wait...
			{:else}
				Send Message
			{/if}
		</Button>
	{/if}
</form>
