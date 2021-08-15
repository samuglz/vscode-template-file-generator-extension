// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const { createVue2Template, createVue3Template, createRFCTemplate, createRAFCETemplate } = require('./utils');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) { 

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    const vue2 = vscode.commands.registerCommand('template-file-generator.vue2', createVue2Template);
    const vue3 = vscode.commands.registerCommand('template-file-generator.vue3', createVue3Template);
    const rfc = vscode.commands.registerCommand('template-file-generator.rfc', createRFCTemplate);
    const rafce = vscode.commands.registerCommand('template-file-generator.rafce', createRAFCETemplate);

    context.subscriptions.push(vue2, vue3, rfc, rafce);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate
};
