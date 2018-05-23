const fs = require('fs');
const folder = './files';

let content = '', counter = 0;

function run( gen, iter) {
    (iter=gen( (err, data) => (err && iter.raise(err)) || iter.next(data))).next();
}

run(function* gen(resume) {
    let files = yield fs.readdir(folder, resume)
    for (let file of files) {
        content += yield fs.readFile(folder + '/' + file, resume);
        content += '\n';
    }
    console.log(content);
});