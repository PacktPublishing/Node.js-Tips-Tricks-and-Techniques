if (process.send) {
    process.send("Hello master");
}

process.on('message', message => {
    console.log('message from master:', message);
});

console.log('hello from the other side');