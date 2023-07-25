<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar background="bg-white" border="border-black border-b-4" spacing="space-y-0">
	<svelte:fragment slot="headline">
		<div class="flex flex-col">
			<div class="flex justify-center">
				<p
					class="
							font-brand
							text-black
							lg:text-6xl
							tracking-wider
							lg:tracking-widest
							font-semibold
						"
				>
					5th ave. gallery
				</p>
			</div>
		</div>
	</svelte:fragment>
</AppBar>
