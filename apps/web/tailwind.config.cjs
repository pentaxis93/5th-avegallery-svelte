import { join } from 'path';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		letterSpacing: {
			wide: '.11em',
			wider: '.22em',
			widest: '.33em'
		},
		extend: {
			fontFamily: {
				brand: ['Anti', 'sans-serif']
			},
			dropShadow: {
				custom: '4px 4px rgba(0, 0, 0, 1)'
			}
		}
	},
	plugins: [forms, typography, ...skeleton()]
};
