<script>
	import { onMount } from 'svelte';

	//#region dummy data
	let dummyData = [
		{
			day: new Date('2022-08-03'),
			times: [
				'10:00',
				'10:15',
				'10:30',
				'10:45',
				'11:00',
				'11:15',
				'11:30',
				'11:45',
				'12:00',
				'12:15',
				'12:30',
				'12:45',
				'13:00',
				'13:15',
				'13:30',
				'13:45',
				'14:00',
				'14:15',
				'14:30',
				'14:45',
				'15:00',
				'15:15',
				'15:30',
				'15:45',
				'16:00',
				'16:15',
				'16:30',
				'16:45',
				'17:00',
				'17:15',
				'17:30',
				'17:45',
				'18:00',
				'18:15',
				'18:30',
				'18:45',
				'19:00',
				'19:15'
			]
		},
		{
			day: new Date('2022-08-04'),
			times: [
				'10:00',
				'10:15',
				'10:30',
				'10:45',
				'11:00',
				'11:15',
				'11:30',
				'11:45',
				'12:00',
				'12:15',
				'12:30',
				'12:45',
				'13:00',
				'13:15',
				'13:30',
				'13:45',
				'14:00',
				'14:15',
				'14:30',
				'14:45',
				'15:00',
				'15:15',
				'15:30',
				'15:45',
				'16:00',
				'16:15',
				'16:30',
				'16:45',
				'17:00',
				'17:15',
				'17:30',
				'17:45',
				'18:00',
				'18:15',
				'18:30',
				'18:45',
				'19:00',
				'19:15'
			]
		},
		{
			day: new Date('2022-08-05'),
			times: [
				'10:00',
				'10:15',
				'10:30',
				'10:45',
				'11:00',
				'11:15',
				'11:30',
				'11:45',
				'12:00',
				'12:15',
				'12:30',
				'12:45',
				'13:00',
				'13:15',
				'13:30',
				'13:45',
				'14:00',
				'14:15',
				'14:30',
				'14:45',
				'15:00',
				'15:15',
				'15:30',
				'15:45',
				'16:00',
				'16:15',
				'16:30',
				'16:45',
				'17:00',
				'17:15',
				'17:30',
				'17:45',
				'18:00',
				'18:15',
				'18:30',
				'18:45',
				'19:00',
				'19:15'
			]
		},
		{
			day: new Date('2022-08-08'),
			times: [
				'10:00',
				'10:15',
				'10:30',
				'10:45',
				'11:00',
				'11:15',
				'11:30',
				'11:45',
				'12:00',
				'12:15',
				'12:30',
				'12:45',
				'13:00',
				'13:15',
				'13:30',
				'13:45',
				'14:00',
				'14:15',
				'14:30',
				'14:45',
				'15:00',
				'15:15'
			]
		}
	];
	//#endregion

	let loading = false;
	let errorMessage = null;
	const scheduleMax = 13;
	let days = new Array(scheduleMax);
	let queries = new Array(scheduleMax);
	let times = new Array();

	async function generateDays() {
		loading = true;
		//get the next days
		for (let i = 0; i < scheduleMax; i++) {
			var day = new Date(); //this will get todays date
			day.setDate(day.getDate() + 2 + i); // this will get the ith day from tomorrow
			days[i] = day;
			queries[i] = `${day.getDate()}-${day.getMonth() + 1}-${day.getFullYear()}`;
		}
		//handle zoho zoho auth
		//if there is already an auth then check its age
		if (window.localStorage.getItem('zoho')) {
			const obj = JSON.parse(window.localStorage.getItem('zoho'));
			let now = new Date();
			//remove the token if too old
			if (now.getTime() > obj.ttl) {
				window.localStorage.removeItem('zoho');
			}
		}
		//if there is not an auth in local the set it
		if (!window.localStorage.getItem('zoho')) {
			const res = await fetch('/api/zoho-auth');
			const data = await res.json();
			let now = new Date();
			console.log(data);

			if (data?.access_token) {
				window.localStorage.setItem(
					'zoho',
					JSON.stringify({
						ttl: now.getTime() + 3000,
						token: data.access_token
					})
				);
			} else {
				window.localStorage.removeItem('zoho');
			}
		}

		if (!window.localStorage.getItem('zoho')) {
			loading = false;
			errorMessage =
				'Oops! It looks like we are too busy right now to fullfil your request! Please try again in a few minutes.';
		}

		if (window.localStorage.getItem('zoho')) {
			console.log(window.localStorage.getItem('zoho'));
			for (let i = 0; i < queries.length; i++) {
				if (times.length >= 4) {
					break;
				} else {
					try {
						let zoho = JSON.parse(window.localStorage.getItem('zoho'));
						let params = new URLSearchParams({
							date: queries[i],
							token: zoho.token
						});
						const res = await fetch('/api/get-schedule?' + params, {
							method: 'GET'
						});
						const data = await res.json();
						console.log(data);
						if (data?.response?.returnvalue?.data?.length > 1) {
							times.push({
								day: days[i],
								times: data.response.returnvalue.data
							});
						}
					} catch (err) {
						console.error(err);
					}
				}
			}

			if (times.length === 0) {
				loading = false;
				errorMessage =
					'It looks like we are all booked for the next two weeks! Try sending us a message instead and we will get back to you as soon as we can.';
			} else {
				console.log(times);
				loading = false;
				errorMessage = null;
			}
		}
	}

	//#region time helpers
	function getMonth(monthIndex) {
		switch (monthIndex) {
			case 0:
				return 'January';
			case 1:
				return 'February';
			case 2:
				return 'March';
			case 3:
				return 'April';
			case 4:
				return 'May';
			case 5:
				return 'June';
			case 6:
				return 'July';
			case 7:
				return 'August';
			case 8:
				return 'September';
			case 9:
				return 'October';
			case 10:
				return 'November';
			case 11:
				return 'December';
		}
	}
	function getDay(dayIndex) {
		switch (dayIndex) {
			case 0:
				return 'Sunday';
			case 1:
				return 'Monday';
			case 2:
				return 'Wednesday';
			case 3:
				return 'Thursday';
			case 4:
				return 'Friday';
			case 5:
				return 'Saturday';
		}
	}
	//#endregion time helpers

	onMount(generateDays);
</script>

<div>
	<div class="flex flex-col md:flex-row justify-between items-center w-full max-w-lg m-auto">
		{#each dummyData as day}
			<div class="flex items-center flex-col">
				<p class="text-xl text-white pb-1">{getDay(day.day.getDay())}</p>
				<p class="text-sm text-white">{getMonth(day.day.getMonth()) + ' ' + day.day.getDate()}</p>
				{#each day.times as time, i}
					{#if i < 4}
						<button class="text-white">{time}</button>
					{/if}
				{/each}
			</div>
		{/each}
	</div>
</div>
