const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    for( let i = 0; i < numCPUs; i++ ) {
        cluster.fork();
    }
    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });
    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        const newWorker = cluster.fork();
    });
}
if (cluster.isWorker) {
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end(`spawn with process pid --> ${process.pid}`);
    }).listen(8080);
}
