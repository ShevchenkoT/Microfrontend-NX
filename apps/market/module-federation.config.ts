import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'market',
  exposes: {
    './Routes': 'apps/market/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
