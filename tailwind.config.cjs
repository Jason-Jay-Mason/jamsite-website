/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		minHeight: {
			hero: '900px'
		},
		borderWidth: {
			1: '1px',
			form: '2px',
			triangle: '12px 16px'
		},
		fontFamily: {
			body: ['Open Sans', 'sans-serif'],
			rubik: ['Rubik', 'sans-serif']
		},
		colors: {
			transparent: 'transparent',
			black: '#000000',
			analogBlack: {
				100: '#5A5A5A',
				200: '#424242',
				300: '#1C1C1C',
				400: '#1B1B1B'
			},
			jamAqua: {
				100: '#2A9ECF',
				200: '#216A89',
				300: '#0E3241'
			},
			villainRed: {
				100: '#F25D54',
				200: '#CE4D45',
				300: '#B1433D'
			},
			warnYellow: {
				100: '#FFD265',
				200: '#FFC63E',
				300: '#FFBC18'
			},
			successGreen: {
				100: '#2AA876',
				200: '#209365',
				300: '#287959'
			},
			white: '#FFFFFF'
		},
		extend: {
			lineHeight: {
				5: '1.25rem',
				xl: '2.25rem'
			},
			keyframes: {
				fadeIn: {
					'0% ': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			},
			animation: {
				fadeIn: 'fadeIn 2s ease'
			},

			backgroundImage: {
				gameGrid: "url('/game-grid.svg')"
			},
			boxShadow: {
				button: '0px 0px 17px'
			}
		}
	},
	plugins: []
}
