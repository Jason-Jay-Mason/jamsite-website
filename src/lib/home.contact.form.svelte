<script>
	import Input from '$lib/form.input.svelte';
	import Button from '$lib/button.svelte'

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
	
	let buttonStyles = 'transition-all group-invalid:invisible mx-auto bg-successGreen-100/60 hover:bg-successGreen-100 shadow-successGreen-100/60 hover:shadow-successGreen-100/90 mt-8 '
	let submitStyles = buttonStyles + 'invisible';

	$: {
		let found = Object.values(formValues).findIndex((e) => e === null);
		if (found === -1) {
			submitStyles = buttonStyles + 'visible group-valid:animate-fadeIn';
		} else {
			submitStyles = buttonStyles + 'invisible';
		}
	}

	function handleSubmit(e) {
		console.log(formValuesArray);
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
					' text-left p-5 h-60 placeholder:absolute placeholder:text-center placeholder:leading-[12rem]'}
				{messageStyling}
				placeholder="How can we help?"
				required={true}
				validExpMessage="✓"
				type="text-area"
				bind:formValue={formValues.message}
			/>
			<Button type="submit" styles={submitStyles}>
				Send Message
			</Button>

		</form>

