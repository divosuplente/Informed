<script>
	import '../styles/app.css';
	import VimeoIcon from '$components/VimeoIcon.svelte';
	import LinkedinOutlined from 'svelte-ant-design-icons/LinkedinOutlined.svelte'
	import InstagramOutlined from 'svelte-ant-design-icons/InstagramOutlined.svelte'
	import CopyrightIcon from '$components/CopyrightIcon.svelte';
	import NavBar from '$components/NavBar.svelte';

	let lang = 'EN';
	let year = new Date().getFullYear();
</script>

<NavBar />
<slot />
<footer class="text-sm bg-gray-200">
	<div id="top" class="flex items-center justify-between pt-5 mx-6">
		<div id="footer-logo" class="w-40">
			<img src="/images/informed.gif" alt="Informed" />
		</div>
		<div id="footer-menu" class="">
			<ul class="flex items-center gap-8">
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
						<li><VimeoIcon size="20"/></li>
						<li><LinkedinOutlined size="20"/></li>
						<li><InstagramOutlined size="20"/></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
	<hr class="h-px mx-6 my-5 bg-gray-200 border-0 dark:bg-gray-400" />
	<div id="bottom" class="flex justify-between pb-5 mx-6">
		<div id="bottom-left">
			<ul class="flex items-center gap-8">
				<li><a href="/terms" class="no-underline">Terms and Conditions</a></li>
				<li><a href="/privacy" class="no-underline">Privacy Policy</a></li>
				<li><a href="/disclaimer" class="no-underline">Disclaimer</a></li>
			</ul>
		</div>
		<div id="bottom-right">
			<ul class="flex items-center gap-8">
				<li>KvK 75158337</li>
				<li id="copyright" class="flex items-center"><CopyrightIcon /> {year} Informed</li>
			</ul>
		</div>
	</div>
</footer>

<style>
  :global(li#copyright > svg) {
		height: 0.875rem;
		width: 0.875rem;
    margin-right: 3px;
	}
</style>
