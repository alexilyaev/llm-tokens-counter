// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const COMMAND_HELLO_WORLD = 'llm-tokens-counter.helloWorld';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "llm-tokens-counter" is now active!',
  );

  let statusBar = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100,
  );
  statusBar.command = COMMAND_HELLO_WORLD;

  context.subscriptions.push(statusBar);

  function updateTokenCount() {
    let editor = vscode.window.activeTextEditor;

    // No open text editor
    if (!editor) {
      statusBar.hide();

      return;
    }

    let document = editor.document;
    let selection = editor.selection;
    let text = selection.isEmpty
      ? document.getText()
      : document.getText(selection);

    statusBar.text = `Token Count: ${text.length}`;
    statusBar.show();
  }

  vscode.window.onDidChangeTextEditorSelection(
    updateTokenCount,
    null,
    context.subscriptions,
  );
  vscode.window.onDidChangeActiveTextEditor(
    updateTokenCount,
    null,
    context.subscriptions,
  );
  vscode.workspace.onDidChangeTextDocument(
    updateTokenCount,
    null,
    context.subscriptions,
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    COMMAND_HELLO_WORLD,
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage('Buzz from LLM Tokens Counter!');
    },
  );

  context.subscriptions.push(disposable);

  // Force show the token count on activation
  updateTokenCount();
}

// This method is called when your extension is deactivated
export function deactivate() {}
