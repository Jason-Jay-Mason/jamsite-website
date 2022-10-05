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
			body: ['Arial', 'sans-serif'],
			rubik: ['Rubik', 'sans-serif']
		},
		colors: {
			transparent: 'transparent',
			black: '#000000',
			grey: {
				100: '#d8d8d8'
			},
			analogBlack: {
				100: '#5A5A5A',
				200: '#424242',
				300: '#1b1b1b',
				400: '#171717'
			},
			jamAqua: {
				100: '#2A9ECF',
				200: '#216A89',
				300: '#0E3241',
				400: '#00B2FF'
			},
			villainRed: {
				100: '#F25D54',
				200: '#CE4D45',
				300: '#B1433D',
				400: '#762C28'
			},
			warnYellow: {
				100: '#FFD265',
				200: '#FFC63E',
				300: '#FFBC18'
			},
			successGreen: {
				100: '#2AA876',
				200: '#209365',
				300: '#287959',
				400: '#0EE28E'
			},
			white: '#FFFFFF'
		},
		extend: {
			dropShadow: {
				icon: '0px 0px 17px rgba(255, 255, 255, 0.6)',
				space: '0px 0px 17px rgba(255, 255, 255, 0.6)',
				smIconWhite: '0px 0px 7px rgba(255, 255, 255, 0.6)',
				smIconRed: '0px 0px 7px rgba(206, 77, 69, 0.6)',
				smIconYellow: '0px 0px 7px rgba(255, 188, 24, 0.6)',
				black: '0px 0px 8px rgba(0, 0, 0, 1)'
			},
			lineHeight: {
				5: '1.25rem',
				xl: '2.3rem'
			},
			keyframes: {
				fadeIn: {
					'0% ': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			},
			animation: {
				fadeIn: 'fadeIn 1s ease'
			},

			backgroundImage: {
				gameGrid: "url('/game-grid.svg')",
				subtleGameGrid: "url('/subtle-game-grid.svg')"
			},
			boxShadow: {
				button: '0px 0px 17px',
				icon: '0px 0px 7px'
			}
		}
	},
	plugins: []
};
