async function getDates(date, token) {
	try {
		let url = 'https://www.zohoapis.com/bookings/v1/json/availableslots?'
		let params = new URLSearchParams({
			service_id: '4310677000000274004',
			staff_id: '4310677000000026017',
			selected_date: date
		})
		const res = await fetch(url + params, {
			method: 'GET',
			headers: {
				Authorization: 'Zoho-oauthtoken ' + token
			}
		})
		const data = await res.json()
		return data
	} catch (err) {
		return err
	}
}

export async function GET({ url }) {
	const date = url.searchParams.get('date')
	const token = url.searchParams.get('token')
	try {
		const data = await getDates(date, token)
		return {
			status: 200,
			headers: {
				'access-control-allow-origin': '*'
			},
			body: data
		}
	} catch (err) {
		return {
			status: 403,
			headers: {
				'access-control-allow-origin': '*'
			},
			body: err
		}
	}
}
