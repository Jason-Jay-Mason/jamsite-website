const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["dummy-icon.svg","favicon.png","game-grid.svg","j-ship-2.svg","j-ship.svg","jamsite-logo-v1.svg","jamsite-logo.svg","laser.svg","wix-raptor.svg","wordpress-rex.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-4503332c.js","imports":["_app/immutable/start-4503332c.js","_app/immutable/chunks/index-930b4413.js","_app/immutable/chunks/index-34e0645c.js","_app/immutable/chunks/singletons-eca981c1.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js'))
		],
		routes: [
			{
				type: 'page',
				id: "@home",
				pattern: /^\/?$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [2,3],
				b: [1]
			},
			{
				type: 'page',
				id: "thank-you-booking",
				pattern: /^\/thank-you-booking\/?$/,
				names: [],
				types: [],
				path: "/thank-you-booking",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "thank-you",
				pattern: /^\/thank-you\/?$/,
				names: [],
				types: [],
				path: "/thank-you",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/get-schedule",
				pattern: /^\/api\/get-schedule\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/get-schedule.js'))
			},
			{
				type: 'endpoint',
				id: "api/book-appointment",
				pattern: /^\/api\/book-appointment\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/book-appointment.js'))
			},
			{
				type: 'endpoint',
				id: "api/auth",
				pattern: /^\/api\/auth\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/auth.js'))
			},
			{
				type: 'page',
				id: "legal/privacy-policy",
				pattern: /^\/legal\/privacy-policy\/?$/,
				names: [],
				types: [],
				path: "/legal/privacy-policy",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "legal/terms-of-service",
				pattern: /^\/legal\/terms-of-service\/?$/,
				names: [],
				types: [],
				path: "/legal/terms-of-service",
				shadow: null,
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
