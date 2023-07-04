<script>
	export let data;
	const { title, pubDate, Content } = data;
</script>

<article>
	<h1>{title}</h1>
	<p>Published: {pubDate}</p>
	<Content />
</article>
