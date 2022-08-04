<script>
	export let placeholder;
	export let type;
	export let valid;

	export let required;
	export let validationExpression;
	export let invalidExpMessage;
	export let validExpMessage;
	export let formValue;

	export let labelStyling;
	export let inputStyling;
	export let messageStyling;

	let message = validExpMessage;
	let keypress = null;

	function handlePhoneInput(e) {
		if (keypress.code[0] === 'K' || (e.target.value.length > 14 && keypress.key !== 'Backspace')) {
			e.target.value = e.target.value.slice(0, e.target.value.length - 1);
			return;
		}

		let next;
		let value = e.target.value;
		if (keypress.key !== 'Backspace') {
			switch (value.length) {
				case 1:
					next = '(' + value;
					break;
				case 4:
					next = value + ') ';
					break;
				case 9:
					next = value + '-';
					break;
				default:
					next = value;
			}
			formValue = next;
		} else {
			switch (value.length) {
				case 1:
					next = '';
					break;
				case 5:
					next = value.slice(0, 3);
					break;
				case 9:
					next = value.slice(0, 8);
					break;
				default:
					next = value;
			}
			formValue = next;
		}

		if (validationExpression && validationExpression.test) {
			const testPasssed = validationExpression.test(e.target.value);
			if (!testPasssed) {
				valid = false;
				e.target.setCustomValidity(invalidExpMessage);
				message = invalidExpMessage;
			} else {
				valid = true;
				e.target.setCustomValidity('');
				message = validExpMessage || '';
			}
		} else {
			valid = true;
			e.target.setCustomValidity('');
			message = validExpMessage || '';
		}
	}

	function handleInput(e) {
		if (validationExpression && validationExpression.test) {
			const testPasssed = validationExpression.test(e.target.value);
			if (!testPasssed) {
				valid = false;
				e.target.setCustomValidity(invalidExpMessage);
				message = invalidExpMessage;
			} else {
				valid = true;
				e.target.setCustomValidity('');
				message = validExpMessage || '';
			}
		} else {
			valid = true;
			e.target.setCustomValidity('');
			message = validExpMessage || '';
		}
	}

	function handleChange(e) {
		if (required === true) {
			if (e.target.value === '' || e.target.value === ' ') {
				valid = false;
				let error = 'This field is required.';
				e.target.setCustomValidity(error);
				message = error;
			}
		}
	}
</script>

{#if type === 'text' || type === null || type === 'email'}
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
{:else if type === 'phone'}
	<label class={labelStyling}>
		<input
			value={formValue}
			type="text"
			on:keydown={(e) => {
				keypress = e;
			}}
			on:input={handlePhoneInput}
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
