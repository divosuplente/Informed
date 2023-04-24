<script lang="ts">
	import { settings } from '$stores/settings';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	import { NavBarLinks,toggleActive} from '$stores/navbarlinks';

	$: lang = $settings.lang;
	$: links = $NavBarLinks;
</script>

<div class="relative px-8">
	<Navbar
		navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 backdrop-blur-sm bg-gradient-to-b from-gray-400"
		color="none"
		let:hidden
		let:toggle
	>
		<NavBrand href="/">
			<img src="/images/informed_icon_white.png" class="h-6 mr-3 sm:h-9" alt="Informed" />
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			{#each links as link}
				<NavLi href={link.link} active={link.active} activeClass="rounded-none md:border-b-2 md:border-b-black md:dark:border-b-white" nonActiveClass="hover:text-white" on:click={()=>toggleActive(link.name)}>{link.name}</NavLi>
			{/each}
			<span>|</span>
			<NavLi activeClass="hover:text-white" nonActiveClass="hover:text-white">{lang}</NavLi>
			<span>|</span>
			<NavLi><DarkMode btnClass="p-0 border-0"/></NavLi>
		</NavUl>
	</Navbar>
</div>
