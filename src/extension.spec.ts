/**
 * @example
 * https://github.com/yzhang-gh/vscode-markdown/blob/master/src/test/suite/integration/toc.test.ts
 */

import assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import vscode from 'vscode';

// import myExtension from './extension';

suite('Extension Test Suite', () => {
  suiteSetup(async (done) => {
    const resPromise = vscode.window.showInformationMessage('Start all tests.');
    await resPromise;

    done();
  });

  suiteTeardown(async (done) => {
    const resPromise = vscode.window.showInformationMessage('All tests done!');
    await resPromise;

    done();
  });

  test('Sample test', async () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });
});
