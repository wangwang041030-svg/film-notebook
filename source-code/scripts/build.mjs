import fs from 'node:fs';
const html=fs.readFileSync('web/index.html','utf8').replace('/*APP_SCRIPT*/',()=>fs.readFileSync('web/app.js','utf8'));
fs.mkdirSync('dist/server',{recursive:true});
fs.writeFileSync('dist/server/index.js',fs.readFileSync('worker.js','utf8').replace('/*HTML_STRING*/',()=>JSON.stringify(html)));
console.log('Built movie notebook Worker');
