<script lang="ts">
	import { settings } from '$stores/settings';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	import { NavBarLinks, toggleActive } from '$stores/navbarlinks';

	export let isHome: boolean;

	$: lang = $settings.lang;
	$: links = $NavBarLinks;

	let previousY: number;
	let currentY: number;
	let clientHeight: number;

	const deriveDirection = (y: number) => {
		const direction = !previousY || previousY < currentY ? 'down' : 'up';
		previousY = y;

		return direction;
	};

	$: scrollDirection = deriveDirection(currentY);
	$: offscreen = scrollDirection === 'down' && currentY > clientHeight * 4;
</script>

<svelte:window bind:scrollY={currentY} />

<div
	class="sticky top-0 z-10 flex px-2 text-lg transition-transform ease-in bg-navbar-1/50 md:px-0 backdrop-blur-sm"
	class:motion-safe:-translate-y-full={offscreen}
	bind:clientHeight
>
	<Navbar navClass="px-2 sm:px-4 py-2.5 w-full" color="none" let:hidden let:toggle>
		<NavBrand href="/">
			<img src="/images/informed_icon_white.png" class="h-6 mr-3 sm:h-9" alt="Informed" />
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			{#each links as link}
				<NavLi
					href={link.link}
					active={link.active}
					activeClass="rounded-none md:border-b-2 {isHome
						? 'md:border-b-white text-white'
						: 'md:border-b-black'} md:dark:border-b-white"
					nonActiveClass="{isHome
						? 'text-white'
						: 'hover:text-black hover:dark:text-white'} hover:scale-125"
					on:click={() => toggleActive(link.name)}>{link.name}</NavLi
				>
			{/each}
			<span class="hidden md:inline-flex {isHome && 'text-white'}">|</span>
			<NavLi
				class="{isHome && 'text-white'} hover:scale-125">{lang}</NavLi
			>
			<span class="hidden md:inline-flex {isHome && 'text-white'}">|</span>
			<NavLi><DarkMode btnClass="p-0 border-0" /></NavLi>
		</NavUl>
	</Navbar>
</div>
