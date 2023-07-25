<script lang="ts">
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
</script>

<!-- TODO: Figure out how to use `hover` and `active` props -->

<AppRail background="bg-secondary-800">
	<AppRailAnchor href="/" title="Home">
		<svelte:fragment slot="lead">
			<Icon icon="solar:home-linear" class="text-3xl" />
		</svelte:fragment>
		<span class="text-sm">Home</span>
	</AppRailAnchor>
	<AppRailAnchor href="/" title="Home">
		<svelte:fragment slot="lead">
			<Icon icon="solar:pallete-2-linear" class="text-3xl" />
		</svelte:fragment>
		<span class="text-sm">Worklines</span>
	</AppRailAnchor>
	<AppRailAnchor href="/contact" title="Contact">
		<svelte:fragment slot="lead">
			<Icon icon="solar:mailbox-linear" class="text-3xl" />
		</svelte:fragment>
		<span class="text-sm">Contact</span>
	</AppRailAnchor>
	<AppRailAnchor href="/about" title="About">
		<svelte:fragment slot="lead">
			<Icon icon="solar:info-square-linear" class="text-3xl" />
		</svelte:fragment>
		<span class="text-sm">About</span>
	</AppRailAnchor>
</AppRail>
