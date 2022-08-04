<script>
	import Input from '$lib/form.input.svelte';
	export let placeholder;
	export let formValue;
	export let type;
	export let valid;

	let invalidExpMessage = null;
	function getValidationExpression() {
		switch (type) {
			case 'email':
				invalidExpMessage = 'Please enter a valid email.';
				return new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
			case 'phone':
				invalidExpMessage = 'Please enter a valid phone number';
				return new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
			default:
				return null;
		}
	}
</script>

{#if type === 'email' || type === 'phone' || type === 'text'}
	<Input
		labelStyling="
	flex
	w-full 
	flex-col-reverse
		"
		inputStyling="
bg-analogBlack-300/90
		shadow-button
		text-white
		bg-transparent 
		border-form
		rounded-md
		placeholder:text-center 
		placehoder:text-lg
		placeholder:text-white 
		focus:placeholder:text-transparent
		h-16
		text-center
		peer
		border-white
		placeholder-shown:valid:border-white
		placeholder-shown:valid:shadow-white/30
		invalid:focus:border-warnYellow-100
		invalid:focus:shadow-warnYellow-100/30
		valid:border-successGreen-100
		valid:shadow-successGreen-100/30 
		invalid:border-villainRed-100 
		invalid:shadow-villainRed-100/30"
		messageStyling="
		text-center
		text-sm
		py-2
		peer-focus:peer-invalid:invisible
		peer-invalid:text-villainRed-100
		peer-valid:text-successGreen-100
		peer-valid:visible
		peer-placeholder-shown:peer-valid:invisible 
		peer-empty:peer-invalid:visible
		"
		{placeholder}
		{invalidExpMessage}
		validationExpression={getValidationExpression()}
		required={true}
		validExpMessage="✓"
		bind:formValue
		bind:valid
		{type}
	/>
{:else if type === 'text-area'}
	<Input
		labelStyling="
		flex
		w-full 
		flex-col-reverse
		py-4
		px-3"
		inputStyling="
		shadow-button
		text-white
		bg-transparent 
		border-form
		rounded-md
		placeholder:text-center 
		placehoder:text-lg
		placeholder:text-white 
		focus:placeholder:text-transparent
		h-16
		peer
		border-white
		placeholder-shown:valid:border-white
		placeholder-shown:valid:shadow-white/30
		invalid:focus:border-warnYellow-100
		invalid:focus:shadow-warnYellow-100/30
		valid:border-successGreen-100
		valid:shadow-successGreen-100/30 
		invalid:border-villainRed-100 
		invalid:shadow-villainRed-100/30
		text-left
		p-5
		h-60
		placeholder:text-center
		placeholder:leading-[12rem]"
		messageStyling="
		text-center
		text-sm
		pb-2
		peer-focus:peer-invalid:invisible
		peer-invalid:text-villainRed-100
		peer-valid:text-successGreen-100
		peer-valid:visible
		peer-placeholder-shown:peer-valid:invisible 
		peer-empty:peer-invalid:visible
		"
		{placeholder}
		required={true}
		validExpMessage="✓"
		bind:formValue
		bind:valid
		{type}
	/>
{/if}
