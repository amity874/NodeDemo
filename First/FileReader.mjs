import {readFile,writeFile} from 'fs/promises'
let template=await readFile(new URL('./Template.html',import.meta.url),'utf-8');
console.log(template);
// __dirname is not defined in mjs file
// process.stdin.write("rnfjrhuf");
const templateData={
    title: 'Unacademy',
    body: 'Node course'
}
for (const[k,v] of Object.entries(templateData)){
    template=template.replace(`{${k}}`,v);
}
await writeFile(new URL('./index.html',import.meta.url),template);