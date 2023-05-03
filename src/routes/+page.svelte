<script lang="ts">

	import { ImagePlaceholder, Skeleton } from "flowbite-svelte";

</script>
<svelte:head>
	<title>Home - Informed</title>
</svelte:head>
<section class="relative container h-[107.2vh] min-w-full flex flex-col items-center justify-center -mt-[7.2rem] bg-black/60 dark:bg-black/60 aspect-video">
	<video class="absolute object-fill w-full h-full -z-10" autoplay loop muted playsinline disablepictureinpicture>
		<source
    src="/videos/Informed.webm"
    type="video/webm" />
  <source
    src="/videos/informed.mp4"
    type="video/mp4" />
</video> 
	<h1 class="font-bold text-6xl text-white w-[60%]">
		Empower Your Patients with our Medical Animations
	</h1>
</section>
<section>
	<ImagePlaceholder />
	<Skeleton />
</section>