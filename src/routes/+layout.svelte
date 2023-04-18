<script>
	import '../styles/app.css';
	import VimeoIcon from '$lib/components/VimeoIcon.svelte';
	import LinkedinIcon from '$lib/components/LinkedinIcon.svelte';
	import InstagramIcon from '$lib/components/InstagramIcon.svelte';
	import CopyrightIcon from '$lib/components/CopyrightIcon.svelte';
	let lang = 'EN';
	let year = new Date().getFullYear();
</script>

<header
	class="sticky top-0 p-4 flex justify-around items-center z-50 mb-4 backdrop-blur-sm bg-gradient-to-b from-gray-400"
>
	<div id="logo" class="w-40">
		<img src="/images/informed.gif" alt="Informed" />
	</div>
	<div id="menu" class="">
		<ul class="flex gap-10 md:gap-12">
			<li><a href="/" class="no-underline">Home</a></li>
			<li>
				<a href="/portfolio" class="no-underline hover:text-white">Portfolio</a>
			</li>
			<li><a href="/library" class="no-underline">Library</a></li>
			<li><a href="/aboutus" class="no-underline">About us</a></li>
			<li><a href="/contact" class="no-underline">Contact</a></li>
			<li>|</li>
			<li>{lang}</li>
		</ul>
	</div>
</header>
<slot />
<footer class="bg-gray-200 text-sm">
	<div id="top" class="flex items-center mx-6 justify-between pt-5">
		<div id="footer-logo" class="w-40">
			<img src="/images/informed.gif" alt="Informed" />
		</div>
		<div id="footer-menu" class="">
			<ul class="flex gap-8 items-center">
				<li><a href="/" class="no-underline">Home</a></li>
				<li><a href="/portfolio" class="no-underline">Portfolio</a></li>
				<li><a href="/library" class="no-underline">Library</a></li>
				<li><a href="/aboutus" class="no-underline">About us</a></li>
				<li><a href="/careers" class="no-underline">Careers</a></li>
				<li>|</li>
				<li>Client login</li>
				<li>|</li>
				<li>
					<ul class="flex gap-4">
						<li><VimeoIcon /></li>
						<li><LinkedinIcon /></li>
						<li><InstagramIcon /></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
	<hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-400 mx-6" />
	<div id="bottom" class="flex justify-between mx-6 pb-5">
		<div id="bottom-left">
			<ul class="flex gap-8 items-center">
				<li><a href="/terms" class="no-underline">Terms and Conditions</a></li>
				<li><a href="/privacy" class="no-underline">Privacy Policy</a></li>
				<li><a href="/disclaimer" class="no-underline">Disclaimer</a></li>
			</ul>
		</div>
		<div id="bottom-right">
			<ul class="flex gap-8 items-center">
				<li>KvK 75158337</li>
				<li id="copyright" class="flex items-center"><CopyrightIcon /> {year} Informed</li>
			</ul>
		</div>
	</div>
</footer>

<style>
	:global(svg) {
		height: 1rem;
		width: 1rem;
	}

  :global(li#copyright > svg) {
		height: 0.875rem;
		width: 0.875rem;
    margin-right: 3px;
	}
</style>
