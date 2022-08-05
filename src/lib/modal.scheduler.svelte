<script>
	import Modal from '$lib/modal.container.svelte';
	import { schedulerModalVisible } from '$lib/stores.js';
	import Calendar from '$lib/modal.scheduler.calendar.svelte';
	import Spinner from '$lib/spinner.svelte';
	import Error from '$lib/modal.scheduler.error.svelte';
	import StyledInput from '$lib/form.styled-input.svelte';
	import { fade } from 'svelte/transition';
	import Button from '$lib/button.svelte';
	import { goto } from '$app/navigation';

	let loading = false;
	let page = 1;
	let errorMessage = null;
	const scheduleMax = 13;
	let dates = new Array(scheduleMax);
	let queries = new Array(scheduleMax);
	let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	let clientTimes = {};
	let selectedTime = null;
	let formError = null;

	let formValues = {
		name: {
			valid: false,
			value: ''
		},
		email: {
			valid: false,
			value: ''
		},
		phone: {
			valid: false,
			value: ''
		}
	};
	$: formValid = !Object.values(formValues).some(({ valid }) => valid === false);

	//#region generate client times
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
	//#endregion

	function validateAuth(auth) {
		const now = new Date();
		if (auth) {
			console.log('auth found in storage');

			if (now.getTime() > auth.ttl) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	}

	async function refreshToken() {
		const now = new Date();
		//if there is already a auth then check its age
		let auth = JSON.parse(window.localStorage.getItem('auth')); //get the stored items out of local storage
		let valid = validateAuth(auth);
		if (valid) {
			//if the auth is valid return ok
			return true;
		}
		if (!valid && auth) {
			//if not valid remove the auth from local storage
			window.localStorage.removeItem('auth'); //remove if not valid
		}

		//if there is not an auth in local then set it
		if (!window.localStorage.getItem('auth')) {
			const res = await fetch('/api/auth'); //fetch to the api end point for the token
			const data = await res.json();

			if (data?.access_token) {
				//if we get a token back then set it in local storage for a little under an hour
				window.localStorage.setItem(
					'auth',
					JSON.stringify({
						ttl: now.getTime() + 3000000,
						token: data.access_token
					})
				);
				return true;
			} else {
				return false;
			}
		}
	}

	//#region generateDays
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
				loading = false;
				return;
			}
		}

		//no times in locoal storage so we need a token to get the times
		const tokenOk = await refreshToken();
		if (!tokenOk) {
			//if we still do not have the token in local storage at this point then there is a bug
			loading = false;
			errorMessage =
				'Oops! It looks like we are too busy right now to fulfill your request! Please try again in a few minutes.';
			console.log('auth not found in storage after api call');
			loading = false;
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
						ttl: now.getTime() + 1800000 //half hour
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

	schedulerModalVisible.subscribe((value) => {
		if (value === true) {
			generateDays();
		}
	});

	async function handleSubmit(e) {
		loading = true;
		//check for token and if no token then get one
		const auth = window.localStorage.getItem('auth');
		const authOk = await refreshToken(auth);
		if (authOk) {
			try {
				const newAuth = JSON.parse(window.localStorage.getItem('auth'));
				const res = await fetch('/api/book-appointment', {
					method: 'POST',
					body: JSON.stringify({
						from_time: selectedTime.query,
						time_zone: timeZone,
						token: newAuth.token,
						customer_details: {
							name: formValues.name.value,
							email: formValues.email.value,
							phone_number: formValues.phone.value.replaceAll(/\s|\(|\)|\-/g, '')
						}
					})
				});
				const data = await res.json();
				if (data.response.status === 'success') {
					goto('/thank-you');
				} else {
					loading = false;
					if (data.response.returnvalue.message === 'slot not available') {
						formError =
							'Crap! It looks like this time slot was just taken by another site visitor! Please select a new time.';
						return false;
					} else {
						console.error(data);
						errorMessage =
							'It looks like there was a problem with your booking request. Please fill out our contact form.';
						return false;
					}
				}
			} catch (err) {
				loading = false;
				console.error(err);
			}
		} else {
			loading = false;
			errorMessage =
				'Oops! It looks like we are too busy right now to fullfil your request! Please try again in a few minutes.';
		}
	}
</script>

<Modal store={schedulerModalVisible}>
	{#if loading && !formValid}
		<div class="h-full flex justify-center items-center">
			<Spinner styles="w-16 h-16 text-white" />
		</div>
	{:else if errorMessage}
		<Error>{errorMessage}</Error>
	{:else if clientTimes && page === 1}
		<Calendar bind:page bind:clientTimes bind:selectedTime />
	{:else if clientTimes && page === 2 && selectedTime}
		<div
			transition:fade
			class="flex flex-col w-full md:w-96 mx-auto h-full justify-center items-center px-3"
		>
			<div class="flex flex-row w-full justify-start items-center" transition:fade>
				<button
					on:click={() => {
						page--;
						formError = null;
						console.log(formError);
					}}
					class="text-white border-1 border-white shadow-transparent px-2 pb-1 pt-1.5 hover:bg-white/10 transition-all mr-6"
					>&crarr;</button
				>
				<p class="text-white font-semibold text-sm md:text-lg text-center">
					{selectedTime.day}
					{selectedTime.longMonth}
					{selectedTime.singleDate}
					@ {selectedTime.standardTime}{selectedTime.amPm}
				</p>
			</div>
			<form on:submit|preventDefault={handleSubmit} class="group w-full">
				<StyledInput
					placeholder="Name"
					type="text"
					bind:formValue={formValues.name.value}
					bind:valid={formValues.name.valid}
				/>
				<StyledInput
					placeholder="Email"
					type="email"
					bind:formValue={formValues.email.value}
					bind:valid={formValues.email.valid}
				/>
				<StyledInput
					placeholder="Phone"
					type="phone"
					bind:formValue={formValues.phone.value}
					bind:valid={formValues.phone.valid}
				/>
				<div
					class=" relative w-full h-40 mb-12 pt-5 mx-auto flex flex-col justify-center items-center"
				>
					{#if formError}
						<div transition:fade class="absolute">
							<p class="text-villainRed-100 text-center">{formError}</p>
						</div>
					{:else if formValid && !formError}
						<span transition:fade class="absolute">
							<Button
								type="submit"
								styles="transition-all
						group-invalid:invisible
						mx-auto
						bg-successGreen-100/60
						hover:bg-successGreen-100
						shadow-successGreen-100/60 
						hover:shadow-successGreen-100/90"
							>
								{#if loading}
									<Spinner styles="-ml-1 mr-3 h-5 w-5 text-white" />
									Please wait...
								{:else}
									Book Meeting
								{/if}
							</Button>
						</span>
					{/if}
				</div>
			</form>
		</div>
	{:else}
		<Error
			>It looks like there was a problem getting our schedule, please fill out our contact form.</Error
		>
	{/if}
</Modal>
