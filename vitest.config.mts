import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.mts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'node',
      exclude: [...configDefaults.exclude],
    },
  }),
);
