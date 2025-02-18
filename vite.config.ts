import { builtinModules } from 'node:module';
import path from 'node:path';
import { defineConfig } from 'vite';
import { globSync } from 'tinyglobby';
import { readNodeVersion } from './infra/readNodeVersion';

const externalPackagesRegex = /^[^./]/;
const nodeVersion = await readNodeVersion();
const cwd = process.cwd();
const entryFilePath = path.resolve(cwd, 'src/extension.ts');
const testFilePaths = globSync(path.resolve(cwd, 'src/**/*.spec.ts'));
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  build: {
    lib: {
      entry: [entryFilePath, ...testFilePaths],
      formats: ['cjs'],
    },
    rollupOptions: {
      external: [...builtinModules, externalPackagesRegex],
    },
    target: `node${nodeVersion}`,
    outDir: 'dist',
    emptyOutDir: false,
    minify: isProduction,
    sourcemap: !isProduction,
  },
});
