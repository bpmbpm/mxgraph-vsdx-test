// mxgraph-vsdx-test. file index.js
console.log('Test mxgraph-vsdx-test'); 
import doImportVisio from "mxgraph-vsdx";

// (node:5176) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
// (Use `node --trace-warnings ...` to show where the warning was created)
// C:\Tempvisio\mxgraph-vsdx-test\index.js:3
// import doImportVisio from "mxgraph-vsdx";
// ^^^^^^
// SyntaxError: Cannot use import statement outside a module

// добавление в mxgraph-vsdx-test\node_modules\mxgraph-vsdx\package.json 
//   "type": "module", проблему не решило

// Вместо import делаем замену (безуспешную):
// const doImportVisio = require('mxgraph-vsdx');

// Видимо в "node_modules" - получилась мешанина из CommonJS-модулей и ESM-модулей