import { SSTConfig } from 'sst';
import { DNS } from './stacks/DNS';
import Site from './stacks/Site';

export default {
  config(_input) {
    return {
      name: '5th-avegallery',
      region: 'us-east-1'
    };
  },
  stacks(app) {
    app.stack(DNS).stack(Site);
  }
} satisfies SSTConfig;
