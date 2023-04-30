import { writable } from 'svelte/store';

interface NavBarLink {
	link: string;
	name: string;
	active: boolean;
}

export const NavBarLinks = writable<NavBarLink[]>([
	{
		link: '/',
		name: 'Home',
		active: true
	},
	{
		link: '/portfolio',
		name: 'Portfolio',
		active: false
	},
	{
		link: '/library',
		name: 'Library',
		active: false
	},
	{
		link: '/aboutus',
		name: 'About us',
		active: false
	},
	{
		link: '/contact',
		name: 'Contact',
		active: false
	}
]);

export const toggleActive = (name: string) => {
	NavBarLinks.update((links) => {
		links.forEach((link) => {
			const { name: linkName } = link;
			link.active = linkName === name;
		});
		return links;
	});
};
