const ipc = require('node-ipc');

ipc.config.id = 'a-unique-name-b';
ipc.config.retry = 1500;
ipc.config.silent = true;

ipc.connectTo('a-unique-name', () => {
    ipc.of['a-unique-name'].on('connect', () => {
        ipc.of['a-unique-name'].emit('tips-tricks', "Use a library to communicate");
      });
});