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
	let dates = new Array(scheduleMax);
	let queries = new Array(scheduleMax);
	let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	let clientTimes = {};

	//#region generateDays
	//helper function to convert time zone to the clients time zone and add the final times into the clientTimes object for looping
	async function addToClientTimes(date, times) {
		times.forEach((time) => {
			//loop through each of the times
			//get a time object for mt time
			const jamSiteTime = new Date(`2020-01-01T${time}`);
			jamSiteTime.setMonth(date.getMonth());
			jamSiteTime.setDate(date.getDate());
			jamSiteTime.setFullYear(date.getFullYear());

			// get a time string for the users times zone and spit it into parts
			const [clientDateString, clientTime, standard] = jamSiteTime
				.toLocaleString('en-US', { timeZone: timeZone })
				.split(' ');

			const clientDate = new Date(jamSiteTime.toLocaleString('en-US', { timeZone: timeZone })); // get the date for client

			const [hours, minutes, seconds] = clientTime.split(':'); //get the hours and minutes off the time string

			const finalTimeString = `${hours}:${minutes}${standard}`; //construct the time string for ui

			//check to see if this date is already in the object
			if (clientTimes[clientDate.getDate()]) {
				console.log('adding times to cleint times');
				clientTimes[clientDate.getDate()].times.push(finalTimeString);
			} else {
				console.log('create new object in client times');
				clientTimes[clientDate.getDate()] = {
					date: clientDate,
					day: clientDate.getDay(),
					month: clientDate.getMonth(),
					times: [finalTimeString]
				};
			}
		});
	}

	async function generateDays() {
		loading = true;
		const now = new Date();

		//check for previously loaded times so we dont run the api limit out
		let storedTimes = JSON.parse(window.localStorage.getItem('clientTimes')); //get the stored items out of local storage
		console.log('stored items', storedTimes);
		if (storedTimes && storedTimes !== undefined && storedTimes.clientTimes) {
			if (storedTimes.ttl < now.getTime() || Object.keys(storedTimes.clientTimes).length < 1) {
				console.log('time exceeded for client times or there are no times saved');
				//if the times has expired on the local storage then refresh
				window.localStorage.removeItem('clientTimes');
			} else {
				console.log('times found in storage');
				//othersie set the client items in state to equal to client items in local storage
				clientTimes = storedTimes;
				return;
			}
		}

		//handle zoho zoho auth
		//if there is already an auth then check its age
		let auth = JSON.parse(window.localStorage.getItem('auth')); //get the stored items out of local storage
		if (auth) {
			console.log('auth found in storage');

			if (now.getTime() > auth.ttl) {
				console.log('time exceeded for auth removing auath', now.getTime(), auth.ttl);
				window.localStorage.removeItem('auth'); //remove if expired
			}
		}
		//if there is not an auth in local the set it
		if (!auth || auth == undefined) {
			const res = await fetch('/api/zoho-auth'); //fetch to the api end point for the token
			const data = await res.json();

			if (data?.access_token && data?.access_token !== undefined) {
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

		if (window.localStorage.getItem('auth') == undefined || !window.localStorage.getItem('zoho')) {
			//if we still do not have the token in local storage at this point then there is a bug
			loading = false;
			errorMessage =
				'Oops! It looks like we are too busy right now to fullfil your request! Please try again in a few minutes.';
			console.log('auth not found in storage after api call');
			return; //exit the function
		}

		//get the next few days to query the api for availibility
		for (let i = 0; i < scheduleMax; i++) {
			var date = new Date(); //this will get todays date
			date.setDate(date.getDate() + 2 + i); // this will get the i+1 day from tomorrow
			dates[i] = date; //set the date to use in converting time zones
			queries[i] = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`; //create the query string to send to zoho
		}

		//query the api for each of the days I just created
		if (auth) {
			console.log('auth found, now getting times');
			//check for the token in local storage
			for (let i = 0; i < queries.length; i++) {
				if (Object.keys(clientTimes).length >= 4) {
					//check the clientTimes final object to see if we have four days of times yet and if so stop
					console.log('client times length is greater than 4');
					break;
				} else {
					//othersie get the ith days tiems
					try {
						let zoho = JSON.parse(window.localStorage.getItem('auth')); //get the token
						let params = new URLSearchParams({
							date: queries[i],
							token: zoho.token
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

			if (clientTimes.length === 0) {
				//if we did not get times back then we must not have availibility
				loading = false;
				errorMessage =
					'It looks like we are all booked for the next two weeks! Try sending us a message instead and we will get back to you as soon as we can.';
			} else {
				window.localStorage.setItem(
					'clientTimes',
					JSON.stringify({
						clientTimes: clientTimes,
						ttl: now.getTime() + 180000
					})
				); //set the client times in local storage to save on api for zoho
				errorMessage = null; //clear the error messsage
				loading = false; //we are done here
				console.log(clientTimes);
				console.log('client times loaded from api');
			}
		}
	}

	//#endregion

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

	// onMount(generateDays);
</script>

<!-- <div> -->
<!-- 	<div class="flex flex-col md:flex-row justify-between items-center w-full max-w-lg m-auto"> -->
<!-- 		{#each Object.keys(clientTimes) as clientTimeKey} -->
<!-- 			<div class="flex items-center flex-col"> -->
<!-- 				<p class="text-xl text-white pb-1">{getDay(clientTimes[clientTimeKey].day)}</p> -->
<!-- 				<p class="text-sm text-white"> -->
<!-- 					{getMonth(clientTimes[clientTimeKey].month) + ' ' + clientTimeKey} -->
<!-- 				</p> -->
<!-- 				{#each clientTimes[clientTimeKey].times as time, i} -->
<!-- 					{#if i < 4} -->
<!-- 						<button class="text-white">{time}</button> -->
<!-- 					{/if} -->
<!-- 				{/each} -->
<!-- 			</div> -->
<!-- 		{/each} -->
<!-- 	</div> -->
<!-- </div> -->
<div>
	<div class="flex flex-col md:flex-row justify-between items-center w-full max-w-lg m-auto">
		{#each dummyData as day}
			<div class="flex items-center flex-col">
				<p class="text-xl text-white pb-1">{getDay(day.day.getDay())}</p>
				<p class="text-sm text-white">
					{getMonth(day.day.getMonth()) + ' ' + day.day.getDate()}
				</p>
				{#each day.times as time, i}
					{#if i < 4}
						<button class="text-white">{time}</button>
					{/if}
				{/each}
			</div>
		{/each}
	</div>
</div>
