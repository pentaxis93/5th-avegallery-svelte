<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '../styles/theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, Drawer, drawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	import '../styles/prism-cb.css';
	import '../styles/global.scss';
	import { draw, fade } from 'svelte/transition';

	// These are my regular imports with no special rules
	import Navigation from '$lib/components/Navigation.svelte';
	import Header from '$lib/components/Header.svelte';
	import PageFooter from '$lib/components/PageFooter.svelte';
	import NavigationRail from '$lib/components/NavigationRail.svelte';

	export let data;
</script>

<Drawer bgDrawer="bg-secondary-500">
	<NavigationRail />
</Drawer>

<AppShell
	regionPage="bg-tertiary-500 text-black"
	slotSidebarLeft="bg-secondary-500"
	slotPageFooter="bg-primary-400 text-black border-black border-t-4"
>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<NavigationRail />
	</svelte:fragment>

	<svelte:fragment slot="pageFooter">
		<PageFooter />
	</svelte:fragment>

	<!-- Page Route Content -->
	{#key data.currentRoute}
		<div in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
			<div class="flex justify-center p-8">
				<slot />
			</div>
		</div>
	{/key}
</AppShell>
