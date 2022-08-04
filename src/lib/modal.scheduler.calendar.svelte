<script>
	import Button from '$lib/button.svelte';
	import { fade } from 'svelte/transition';

	export let clientTimes;
	export let selectedTime;
	export let page;

	const buttonStyles =
		'transition-all shadow-transparent border-1 justify-center items-center text-base font-light w-10/12 py-2 my-2 rounded-sm';
</script>

<div
	transition:fade
	class="flex flex-col justify-center items-center h-auto md:h-full max-w-lg mx-auto"
>
	<div class="flex flex-col md:flex-row justify-center items-center ">
		{#each Object.keys(clientTimes) as clientTimeKey}
			<div class="flex items-center flex-col w-32">
				<p class="text-xl text-white pb-1">{clientTimes[clientTimeKey].day}</p>
				<p class="text-sm text-white pb-3">
					{clientTimes[clientTimeKey].longMonth + ' ' + clientTimes[clientTimeKey].singleDate}
				</p>
				{#each clientTimes[clientTimeKey].times as time, i}
					{#if i < 4}
						<button
							on:click={() => {
								selectedTime = time;
							}}
							class={selectedTime === time
								? buttonStyles + ' text-successGreen-100 border-successGreen-100 bg-analogBlack-300'
								: buttonStyles + ' text-white border-white hover:bg-white/5 bg-analogBlack-300/90'}
							>{time.standardTime}{time.amPm}</button
						>
					{/if}
				{/each}
			</div>
		{/each}
	</div>
	<div class="h-32 mb-12">
		{#if selectedTime}
			<div transition:fade class="flex flex-col  justify-center  items-center w-full">
				<p class="text-white text-center pb-9 pt-6">
					{selectedTime.day}
					{selectedTime.longMonth}
					{selectedTime.singleDate}
					@ {selectedTime.standardTime}{selectedTime.amPm}
				</p>
				<span
					on:click={() => {
						page++;
					}}
				>
					<Button
						styles="bg-successGreen-100/80 hover:bg-successGreen-100 shadow-successGreen-100/50 hover:shadow-successGreen-100"
						>Next</Button
					>
				</span>
			</div>
		{/if}
	</div>
</div>
