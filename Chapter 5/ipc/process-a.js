const ipc = require('node-ipc');

ipc.config.id = 'a-unique-name';
ipc.config.retry = 1500;
ipc.config.silent = true;

ipc.serve(() => ipc.server.on('tips-tricks', message => {
    console.log(message);
}));
ipc.server.start();