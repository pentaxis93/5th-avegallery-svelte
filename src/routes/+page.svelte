<script>
	import galleryImage from '../assets/5th-avenue-gallery-by-ejgold.png';
</script>

<svelte:head>
	<title>5th Ave. Gallery</title>
</svelte:head>

<h1 class="h1">Hello 5th Ave. Gallery</h1>
<img
	class="w-auto h-auto border-black border-8 border-dotted"
	src={galleryImage}
	alt="5th Ave. Gallery"
/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<div class="flex justify-center">
	<section>
		<a
			class="
			  btn
				variant-filled-tertiary
				border-black
				border-2
				drop-shadow-custom
			"
			href="https://github.com/"
			>GitHub
		</a>
		<a
			class="
				btn
				variant-filled-primary
				border-black
				border-2
				drop-shadow-custom
			"
			href="https://kit.svelte.dev/"
			>SvelteKit
		</a>
		<a
			class="btn
				variant-filled-secondary
				border-black
				border-2
				drop-shadow-custom
			"
			href="https://tailwindcss.com/">Tailwind</a
		>
	</section>
</div>
