const fs = require('fs');
const folder = './files';
const ok = require('okay');

let content = '', counter = 0;

let readdirPromise = new Promise(function(resolve, reject) {
    fs.readdir(folder, (err, files) => { if(err) reject(err); resolve(files); });
});

function getData(fileName, type) {
    return new Promise(function(resolve, reject){
      fs.readFile(fileName, type, (err, data) => {
          err ? reject(err) : resolve(data);
      });
    });
}

readdirPromise.then((files) => {
    let filePromises = [];
    files.forEach(file => {
        filePromises.push(getData(folder + '/' + file, 'utf8'));
    });
    return Promise.all(filePromises);
}).then(contents => {
    console.log(contents.join('\n'));
});