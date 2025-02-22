/**
 * @see
 * https://github.com/microsoft/vscode-test-cli
 *
 * @example
 * - https://github.com/yzhang-gh/vscode-markdown/tree/master/src/test/suite
 */

import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
  files: ['dist/**/*.spec.cjs'],
  launchArgs: ['--disable-extensions'],
});
