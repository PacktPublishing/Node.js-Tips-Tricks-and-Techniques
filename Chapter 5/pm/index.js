const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200);
    res.end(`spawn with process pid, pm controlled --> ${process.pid}`);
}).listen(8080);