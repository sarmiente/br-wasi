import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/src/assets/img/br_front_1.jpg')",
				'hero-pattern-02': "url('/src/assets/img/br_front_2.jpg')",
				'hero-pattern-03': "url('/src/assets/img/br_front_3.jpg')",
				'pattern-03': "url('/src/assets/img/pattern-03.jpg')",
				'pattern-02': "url('/src/assets/img/pattern-02.jpg')",

				
			  },
			fontFamily: {
				display: ["Oswald"],
				body: ['"Roboto Slab"'],
				heading: ["Vidaloka"],
				hero: ["Roboto"],
				pattern: ["Montserrat"],
     			
			  },
			  animation: {
				marquee: 'marquee 25s linear infinite',
			  },
			  keyframes: {
				marquee: {
				  '0%': { transform: 'translateX(0%)' },
				  '100%': { transform: 'translateX(-100%)' },
				}}
		},
	},
	plugins: [
		require('@tailwindcss/forms'), require("@tailwindcss/typography"), require('tailwindcss-motion')
	],
}
