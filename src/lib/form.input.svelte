<script>
	export let placeholder;
	export let type;

	export let required;
	export let validationExpression;
	export let invalidExpMessage;
	export let validExpMessage;
	export let formValue;

	export let labelStyling;
	export let inputStyling;
	export let messageStyling;

	let message = validExpMessage;

	function handleInput(e) {
		if (validationExpression && validationExpression.test) {
			const valid = validationExpression.test(e.target.value);
			if (!valid) {
				e.target.setCustomValidity(invalidExpMessage);
				message = invalidExpMessage;
			} else {
				e.target.setCustomValidity('');
				message = validExpMessage || '';
			}
		} else {
			e.target.setCustomValidity('');
			message = validExpMessage || '';
		}
	}

	function handleChange(e) {
		if (required === true) {
			if (e.target.value === '' || e.target.value === ' ') {
				let error = 'This field is required.';
				e.target.setCustomValidity(error);
				message = error;
			}
		}
	}
</script>

{#if type === 'input'}
	<label class={labelStyling}>
		<input
			type="text"
			bind:value={formValue}
			on:input={handleInput}
			on:blur={handleChange}
			minlength="2"
			{placeholder}
			class={inputStyling}
		/>
		<span class={messageStyling}>{message}&nbsp;</span>
	</label>
{:else if type === 'text-area'}
	<label class={labelStyling}>
		<textarea
			bind:value={formValue}
			type="text"
			minlength="2"
			on:input={handleInput}
			on:blur={handleChange}
			{placeholder}
			class={inputStyling}
		/>
		<span class={messageStyling}>{message}&nbsp;</span>
	</label>
{/if}
