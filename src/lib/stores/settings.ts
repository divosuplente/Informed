import { writable } from 'svelte/store';

export const settings = writable({
	lang: 'EN',
	theme: 'light'
});
