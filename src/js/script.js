ace.require("ace/ext/language_tools");

const jsEditor = ace.edit("js-editor");
jsEditor.setTheme("ace/theme/monokai");
jsEditor.session.setMode("ace/mode/javascript");
jsEditor.setOptions({
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    fontSize: "14px",
    showPrintMargin: false
});

function runJS() {
    let code = jsEditor.getValue();
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = '';
    const originalLog = console.log;
    console.log = function (message) {
        outputDiv.innerText += message + '\n';
    };
    try {
        eval(code);
    } catch (error) {
        outputDiv.innerText = error;
    } finally {
        console.log = originalLog;
    }
}