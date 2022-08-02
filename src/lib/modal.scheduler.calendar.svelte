<script>
	import { onMount } from 'svelte';
	import Button from '$lib/button.svelte';
	import { fade } from 'svelte/transition';

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
	let dates = new Array(scheduleMax);
	let queries = new Array(scheduleMax);
	let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	let clientTimes = {};
	let selectedTime = null;

	//#region time helper
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
				return 'Tuesday';
			case 3:
				return 'Wednesday';
			case 4:
				return 'Thursday';
			case 5:
				return 'Friday';
			case 6:
				return 'Saturday';
		}
	}
	//#endregion time helpers
	//#region generateDays
	//helper function to convert time zone to the clients time zone and add the final times into the clientTimes object for looping
	async function addToClientTimes(date, times) {
		//loop through each of the times
		times.forEach((time) => {
			const jamsite = new Date( //get a time object in jamsite's local time as returned from zoho
				date.toLocaleString('en-US', {
					dateStyle: 'full'
				}) + ` ${time}`
			);

			//view friendly date and times in users timezone
			const [day, longMonth, singleDate, year, standardTime, amPm] = jamsite
				.toLocaleString('en-US', {
					timeZone: timeZone,
					dateStyle: 'full',
					timeStyle: 'short',
					hourCycle: 'h12'
				})
				.replaceAll(',', '') //remove cammas
				.split(' ') //split by spaces
				.filter((a) => a !== 'at'); //filter out the at

			//query friendly date and time to send back to server and book the time
			const [qmonth, qdate, qyear, militaryTime] = jamsite //get the rest of the time info for the client for querying
				.toLocaleString('en-US', {
					timeZone: timeZone,
					day: '2-digit',
					month: 'short',
					year: 'numeric',
					hour: 'numeric',
					minute: '2-digit',
					hourCycle: 'h24'
				})
				.replaceAll(',', '') //remove commas
				.split(' '); //spit the string by spaces

			const query = `${qdate}-${qmonth}-${qyear} ${militaryTime}:00`; //construct the date param when posting to book

			const timeObj = {
				//object for the view
				//day props
				day,
				longMonth,
				singleDate,
				year,
				qmonth,
				qdate,
				qyear,
				//time props
				standardTime,
				amPm,
				militaryTime,
				query
			};

			const dateKey = `${qmonth}${qdate}${qyear}`; //key to store the dat in the client times obj

			//check to see if this date is already in the object
			if (clientTimes[dateKey]) {
				clientTimes[dateKey].times.push(timeObj);
			} else {
				clientTimes[dateKey] = {
					day,
					longMonth,
					singleDate,
					year,
					qmonth,
					qdate,
					qyear,
					times: [timeObj]
				};
			}
		});
	}

	async function generateDays() {
		loading = true; //loading for spinner
		const now = new Date();

		//check for previously loaded times so we dont run the api limit out
		let storedTimes = JSON.parse(window.localStorage.getItem('clientTimes')); //get the stored items out of local storage
		console.log('stored items', storedTimes);
		if (storedTimes && storedTimes.clientTimes) {
			if (storedTimes.ttl < now.getTime() || Object.keys(storedTimes.clientTimes).length < 1) {
				console.log('time exceeded for client times or there are no times saved');
				//if the times has expired on the local storage then refresh
				window.localStorage.removeItem('clientTimes');
			} else {
				console.log('times found in storage');
				//othersie set the client items in state to equal to client items in local storage
				clientTimes = storedTimes.clientTimes;
				return;
			}
		}

		//if there are not times in storage we need to fetch them but first we need to check for a token
		//if there is already a auth then check its age
		let auth = JSON.parse(window.localStorage.getItem('auth')); //get the stored items out of local storage
		if (auth) {
			console.log('auth found in storage');

			if (now.getTime() > auth.ttl) {
				console.log('time exceeded for auth removing auath', now.getTime(), auth.ttl);
				window.localStorage.removeItem('auth'); //remove if expired
			}
		}
		//if there is not an auth in local the set it
		if (!window.localStorage.getItem('auth')) {
			const res = await fetch('/api/auth'); //fetch to the api end point for the token
			const data = await res.json();

			if (data?.access_token) {
				//if we get a token back then set it in local storage for a little under an hour
				console.log('created new auth because there is no token in memory');
				window.localStorage.setItem(
					'auth',
					JSON.stringify({
						ttl: now.getTime() + 3000000,
						token: data.access_token
					})
				);
			}
		}

		if (!window.localStorage.getItem('auth')) {
			//if we still do not have the token in local storage at this point then there is a bug
			loading = false;
			errorMessage =
				'Oops! It looks like we are too busy right now to fullfil your request! Please try again in a few minutes.';
			console.log('auth not found in storage after api call');
			return; //exit the function
		}

		//get the next few days to query the api for availibility
		for (let i = 0; i < scheduleMax; i++) {
			let date = new Date(); //this will get todays date
			date.setDate(date.getDate() + 2 + i); // this will get the i+1 day from tomorrow
			dates[i] = date; //set the date to use in converting time zones
			queries[i] = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`; //create the query string to send to zoho
		}

		//query the api for each of the days I just created
		if (window.localStorage.getItem('auth')) {
			console.log('auth found, now getting times');
			//check for the token in local storage
			for (let i = 0; i < queries.length; i++) {
				if (Object.keys(clientTimes).length >= 4) {
					//check the clientTimes final object to see if we have four days of times yet and if so stop
					console.log('client times length is greater than 4');
					break;
				} else {
					//othersie get the ith days times
					try {
						let auth = JSON.parse(window.localStorage.getItem('auth')); //get the token
						let params = new URLSearchParams({
							date: queries[i],
							token: auth.token
						}); //create the search params
						const res = await fetch('/api/get-schedule?' + params, {
							//hit the zoho api for the availibility
							method: 'GET'
						});
						const data = await res.json();

						console.log(data, 'this is the time data');
						if (data?.response?.returnvalue?.data?.length > 1) {
							//if we get a response then add the converted times to the final object
							console.log('adding times fechted to client times obj', data);
							addToClientTimes(dates[i], data.response.returnvalue.data);
						}
					} catch (err) {
						console.error(err);
					}
				}
			}

			if (clientTimes.length < 1) {
				//if we did not get times back then we must not have availibility
				loading = false;
				errorMessage =
					'It looks like we are all booked for the next two weeks! Try sending us a message instead and we will get back to you as soon as we can.';
			} else {
				//set the client times in local storage to save on api for zoho
				window.localStorage.setItem(
					'clientTimes',
					JSON.stringify({
						clientTimes: clientTimes,
						ttl: now.getTime() + 1800000 + 1000000000000 //half hour
					})
				);
				errorMessage = null; //clear the error messsage
				loading = false; //we are done here
				console.log(clientTimes);
				console.log('client times loaded from api');
			}
		}
	}

	//#endregion

	onMount(generateDays);

	const buttonStyles =
		'transition-all shadow-transparent border-1 justify-center items-center text-base font-light w-10/12 py-2 my-2 rounded-sm';
</script>

<div class="flex flex-col justify-center items-center h-auto md:h-full max-w-lg mx-auto">
	<div class="flex flex-col md:flex-row justify-center  items-center ">
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
								? buttonStyles + ' text-successGreen-100 border-successGreen-100'
								: buttonStyles + ' text-white border-white hover:bg-white/5'}
							>{time.standardTime}{time.amPm}</button
						>
					{/if}
				{/each}
			</div>
		{/each}
	</div>
	<div class="h-32 mb-12">
		{#if selectedTime}
			<div transition:fade class="flex flex-col justify-center items-center">
				<p class="text-white text-center py-5">
					{selectedTime.day}
					{selectedTime.longMonth}
					{selectedTime.singleDate}
					@ {selectedTime.standardTime}{selectedTime.amPm}
				</p>
				<Button
					styles="bg-successGreen-100/80 hover:bg-successGreen-100 shadow-successGreen-100/50 hover:shadow-successGreen-100"
					>Next</Button
				>
			</div>
		{/if}
	</div>
</div>
