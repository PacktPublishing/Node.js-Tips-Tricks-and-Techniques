const fs = require('fs');
const folder = './files';

let content = '', counter = 0;

async function readFile() {
    let files = await fs.readdir(folder)
    for (let file of files) {
        content += await fs.readFile(folder + '/' + file);
        content += '\n';
    }
    return content;
}

readFile().then(value => console.log(value));