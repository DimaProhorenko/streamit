/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#e50914',
			},
			backgroundImage: {
				'back-gradient':
					'linear-gradient(50deg, rgba(0, 0, 0, 0.9000) 20.00%, rgba(0, 0, 0, 0.8965) 26.50%, rgba(0, 0, 0, 0.8861) 33.00%, rgba(0, 0, 0, 0.8688) 39.50%, rgba(0, 0, 0, 0.8444) 46.00%, rgba(0, 0, 0, 0.8132) 52.50%, rgba(0, 0, 0, 0.7750) 59.00%, rgba(0, 0, 0, 0.7368) 65.50%, rgba(0, 0, 0, 0.7056) 72.00%, rgba(0, 0, 0, 0.6813) 78.50%, rgba(0, 0, 0, 0.6639) 85.00%, rgba(0, 0, 0, 0.6535) 91.50%, rgba(0, 0, 0, 0.6500) 98.00%)',
			},
		},
		container: {
			center: true,
			padding: '2rem',
		},
	},
	plugins: [],
};
