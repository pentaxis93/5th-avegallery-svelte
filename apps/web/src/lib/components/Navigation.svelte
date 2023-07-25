<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav bg-secondary-500">
	<ul class="flex">
		<li><a class="nav-link" href="/">Home</a></li>
		<li><a class="nav-link" href="/about">About</a></li>
		<li><a class="nav-link" href="/blog">Blog</a></li>
		<li><a class="nav-link" href="/contact">Contact</a></li>
		<li><a class="nav-link" href="/uses">Uses</a></li>
		<li>
			<a
				class="btn btn-sm variant-ghost-surface"
				href="https://github.com/pentaxis93/5th-avegallery"
				target="_blank"
				rel="noreferrer"
			>
				GitHub
			</a>
		</li>
	</ul>
</nav>
