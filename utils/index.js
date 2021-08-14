const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const { Vue2, Vue3, rfc , rafce} = require('../Templates');

const createTemplate = (fsPath, fileExtension, exampleTemplate) =>{
		vscode.window.showInputBox({
            placeHolder: 'Enter the component name'
		}).then(componentName => {
            if(componentName){
                const pathFile = path.join(
                    fsPath,
                    `${componentName}.${fileExtension}`
                )
                const templateCode = exampleTemplate.replace(/#name#/gi, componentName);
    
                fs.writeFileSync(pathFile, templateCode)
            } else {
                vscode.window.showErrorMessage('The component name is required')
            }
		})
}


const createVue2Template = ({fsPath}) => {
    createTemplate(fsPath, Vue2.extension,  Vue2.template)
}
const createVue3Template = ({fsPath}) => {
    createTemplate(fsPath, Vue3.extension , Vue3.template)
}

const createRFCTemplate = ({fsPath}) => {
    createTemplate(fsPath, rfc.extension , rfc.template)
}

const createRAFCETemplate = ({fsPath}) => {
    createTemplate(fsPath, rafce.extension , rafce.template)
}

module.exports = {
    createVue2Template,
    createVue3Template,
    createRFCTemplate,
    createRAFCETemplate
}