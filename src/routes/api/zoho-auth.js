async function getNewToken() {
	try {
		let url = 'https://accounts.zoho.com/oauth/v2/token?'
		const params = new URLSearchParams({
			refresh_token: import.meta.env.VITE_ZOHO_REFRESH_TOKEN,
			client_id: import.meta.env.VITE_ZOHO_CLIENT_ID,
			client_secret: import.meta.env.VITE_ZOHO_CLIENT_SECRET,
			grant_type: 'refresh_token'
		})

		const res = await fetch(url + params, {
			method: 'POST'
		})
		const data = await res.json()

		return data
	} catch (err) {
		return err
	}
}
export async function GET() {
	try {
		const data = await getNewToken()
		return {
			status: 200,
			headers: {
				'access-control-allow-origin': '*'
			},
			body: data
		}
	} catch (err) {
		return {
			status: err.response.status,
			headers: {
				'access-control-allow-origin': '*'
			},
			body: 'There was an issue with your request'
		}
	}
}
