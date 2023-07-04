interface LoadParams {
  params: {
    slug: string;
  };
}

export async function load({ params }: LoadParams) {
  const post = await import(`../${params.slug}.md`);
  const { title, pubDate } = post.metadata;
  const Content = post.default;

  return {
    Content,
    title,
    pubDate
  };
}
