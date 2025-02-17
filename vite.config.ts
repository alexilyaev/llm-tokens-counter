import { builtinModules } from 'node:module';
import path from 'node:path';
import { defineConfig } from 'vite';
import { readNodeVersion } from './infra/readNodeVersion';

const externalPackagesRegex = /^[^./]/;

const nodeVersion = await readNodeVersion();

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(process.cwd(), 'src', 'extension.ts'),
      name: 'extension',
      fileName: 'extension',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: [...builtinModules, externalPackagesRegex],
    },
    target: `node${nodeVersion}`,
    outDir: 'dist',
    emptyOutDir: true,
    minify: true,
    sourcemap: true,
  },
});
