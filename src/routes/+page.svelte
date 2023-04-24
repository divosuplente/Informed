<script lang="ts">

	import { ImagePlaceholder, Skeleton, TextPlaceholder } from "flowbite-svelte";

</script>
<svelte:head>
	<title>Home - Informed</title>
</svelte:head>
<!-- <section
	class="relative flex items-center justify-center h-screen mb-12 overflow-hidden mt-[-5.7rem]"
>
	<div class="relative z-10 font-bold text-6xl text-white w-[60%]">
		Empower Your Patients with our Medical Animations
	</div>
	<video autoplay loop muted class="absolute w-auto min-w-full min-h-full max-w-none">
		<source src="/videos/rotterdam.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
</section> -->
<div style="height:300px;" class="pb-16 overflow-scroll">
    <Skeleton class="mt-16 mb-8" />
    <ImagePlaceholder class="my-8" />
    <TextPlaceholder class="my-8" />
  </div>