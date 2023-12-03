/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#e50914',
			},
		},
		container: {
			center: true,
			padding: '2rem',
		},
	},
	plugins: [],
};
