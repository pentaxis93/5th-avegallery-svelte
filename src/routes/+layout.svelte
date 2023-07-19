<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '../styles/theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		Drawer,
		drawerStore,
		type DrawerSettings
	} from '@skeletonlabs/skeleton';
	import '../styles/prism-cb.css';
	import '../styles/global.scss';
	import { draw, fade } from 'svelte/transition';

	// These are my regular imports with no special rules
	import Icon from '@iconify/svelte';
	import SidebarNav from './SidebarNav.svelte';

	export let data;
</script>

<Drawer bgDrawer="bg-secondary-800" width="w-28">
	<div class="p-4">
		<SidebarNav />
	</div>
</Drawer>

<!-- App Shell -->
<AppShell
	regionPage="bg-tertiary-500 text-black"
	slotSidebarLeft="
		hidden
		sm:block
		font-semibold
		tracking-wide
		bg-secondary-800
		w-40
		p-4
		border-black
		border-r-8
	"
	slotFooter="bg-primary-400 text-black border-black border-t-8"
>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="bg-white" border="border-black border-b-8" spacing="space-y-0">
			<svelte:fragment slot="headline">
				<div class="flex justify-center">
					<p
						class="
							font-brand
							text-black
							text-6xl
							tracking-widest
							font-semibold
							-mb-3
							hidden
							sm:block
						"
					>
						5th ave. gallery
					</p>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="lead">
				<button on:click={() => drawerStore.open()}>
					<Icon icon="solar:hamburger-menu-linear" class="text-black text-xl block sm:hidden" />
				</button>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<p
					class="
							font-brand
							text-black
							text-lg
							tracking-wider
							font-semibold
							-mb-3
							block
							sm:hidden
						"
				>
					5th ave. gallery
				</p>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<SidebarNav />
	</svelte:fragment>

	<svelte:fragment slot="footer">
		<div class="flex justify-center p-3">
			<p class="text-xs sm:text-sm text-center">
				{`\u201CMay this be used for the benefit of all beings everywhere and for the benefit of the
				Absolute.\u201D`}
			</p>
		</div>
	</svelte:fragment>

	<!-- Page Route Content -->
	{#key data.currentRoute}
		<div in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
			<div class="p-8">
				<slot />
			</div>
		</div>
	{/key}
</AppShell>
