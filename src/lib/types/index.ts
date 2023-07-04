export interface BlogPostMeta {
  title: string;
  pubDate: string;
  description: string;
  author: string;
  image: {
    url: string;
    alt: string;
  };
  tags: string[];
}

export interface BlogPost {
  meta: BlogPostMeta;
  path: string;
}
