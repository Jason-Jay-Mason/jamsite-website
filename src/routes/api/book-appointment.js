export async function POST({ request }) {
	const body = await request.json();
	try {
		const searchParams = new URLSearchParams({
			service_id: '4310677000000274004',
			staff_id: '4310677000000026017',
			from_time: body.from_time,
			time_zone: body.time_zone,
			customer_details: JSON.stringify(body.customer_details)
		});
		const url = 'https://www.zohoapis.com/bookings/v1/json/appointment?';
		const res = await fetch(url + searchParams, {
			method: 'POST',
			headers: {
				Authorization: 'Zoho-oauthtoken ' + body.token
			}
		});
		const data = await res.json();

		return {
			status: 200,
			headers: {
				'access-control-allow-origin': '*'
			},
			body: data
		};
	} catch (err) {
		return {
			status: 403,
			headers: {
				'access-control-allow-origin': '*'
			},
			body: err
		};
	}
}
