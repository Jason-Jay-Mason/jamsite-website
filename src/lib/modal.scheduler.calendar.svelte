<script>
	import Button from '$lib/button.svelte';
	import { fade } from 'svelte/transition';

	export let clientTimes;
	export let selectedTime;
	export let page;

	const buttonStyles = 'transition-all shadow-transparent border-1 justify-center items-center text-base font-light w-10/12 py-2 my-2 rounded-sm';
</script>

<div transition:fade class="mx-auto flex h-auto max-w-lg flex-col items-center justify-center md:h-full">
	<div class="flex flex-col items-center justify-center md:flex-row ">
		{#each Object.keys(clientTimes) as clientTimeKey}
			<div class="flex w-32 flex-col items-center">
				<p class="pb-1 text-xl text-white">{clientTimes[clientTimeKey].day}</p>
				<p class="pb-3 text-sm text-white">
					{clientTimes[clientTimeKey].longMonth + ' ' + clientTimes[clientTimeKey].singleDate}
				</p>
				{#each clientTimes[clientTimeKey].times as time, i}
					{#if i < 4}
						<button
							on:click={() => {
								selectedTime = time;
							}}
							class={selectedTime === time
								? buttonStyles + ' border-successGreen-100 bg-analogBlack-300 text-successGreen-100'
								: buttonStyles + ' border-white bg-analogBlack-300/90 text-white hover:bg-white/5'}>{time.standardTime}{time.amPm}</button
						>
					{/if}
				{/each}
			</div>
		{/each}
	</div>
	<div class="mb-12 h-32">
		{#if selectedTime}
			<div transition:fade class="flex w-full  flex-col  items-center justify-center">
				<p class="pb-9 pt-6 text-center text-white">
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
					<Button styles="bg-successGreen-100/80 hover:bg-successGreen-100 shadow-successGreen-100/50 hover:shadow-successGreen-100">Next</Button>
				</span>
			</div>
		{/if}
	</div>
</div>
