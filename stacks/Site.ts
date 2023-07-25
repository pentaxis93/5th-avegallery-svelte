import { use, SvelteKitSite, StackContext } from 'sst/constructs';
import { DNS } from './DNS';

export default function Site({ stack }: StackContext) {
  const dns = use(DNS);

  // Create the SvelteKit site
  const site = new SvelteKitSite(stack, 'Site', {
    path: 'apps/web/',
    customDomain: {
      domainName: dns.domain,
      domainAlias: 'www.' + dns.domain,
      hostedZone: dns.zone
    }
  });

  // Add the site's URL to stack output
  stack.addOutputs({
    URL: site.url
  });
}
