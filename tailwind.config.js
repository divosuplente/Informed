/** @type {import('tailwindcss').Config} */

function withOpacityValue(variable) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `var(--${variable})`;
		}
		return `var(--${variable}) / ${opacityValue}`;
	};
}

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		'./node_modules/tw-elements/dist/js/**/*.js'
	],
	theme: {
		extend: {
			navbar: {
				1: withOpacityValue('navbar-color')
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries'),
		require('flowbite/plugin'),
		require('tw-elements/dist/plugin.cjs')
	],
	darkMode: 'class'
};
