import { SvelteKitSite, StackContext } from 'sst/constructs';

export default function Site({ stack }: StackContext) {
  // ... existing constructs

  // Create the SvelteKit site
  const site = new SvelteKitSite(stack, 'Site', {
    path: 'apps/web/'
  });

  // Add the site's URL to stack output
  stack.addOutputs({
    URL: site.url
  });
}
