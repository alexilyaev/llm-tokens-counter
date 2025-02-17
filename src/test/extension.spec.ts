// import * as vscode from 'vscode';
import { describe, expect, test } from 'vitest';

// import * as myExtension from '../../extension';

describe('Extension Test Suite', () => {
  // vscode.window.showInformationMessage('Start all tests.');

  test('Sample test', () => {
    expect([1, 2, 3].indexOf(5)).toBe(-1);
    expect([1, 2, 3].indexOf(0)).toBe(-1);
  });
});
