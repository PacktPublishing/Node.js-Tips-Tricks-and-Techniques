const fs = require('fs');
const folder = './files';
const ok = require('okay');

let content = '', counter = 0;

fs.readdir(folder, ok((files) => {
    files.forEach(file => {
        fs.readFile(folder + '/' + file, ok((data) => {
            counter ++;
            content += data + '\n';
            if (counter === files.length) console.log(content);
        }));
    });
}))