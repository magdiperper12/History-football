import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#E3FDFD',
				secoundry: '#CBF1F5',
				third: '#A6E3E9',
				forth: '#71C9CE',
				darkprimary: '#1B262C',
				darksecoundry: '#0b3e60',
				darkthird: '#3282B8',
				darkforth: '#BBE1FA',
				icon: '#6366F1',
			},
			animation: {
				fadeIn: 'fadeIn 0.7s ease-in-out forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			boxShadow: {
				'custom-light': '0px 0px 20px #71C9CE',
				'custom-dark': '0px 0px 10px #175a87',
				glow: '0 0 10px rgba(255, 150, 255, 0.5)',
				'inner-glow': 'inset 0 2px 4px rgba(0, 0, 0, 0.6)',
			},
		},
	},
	darkMode: 'class', // Enable dark mode using class-based approach
	plugins: [],
};

export default config;
