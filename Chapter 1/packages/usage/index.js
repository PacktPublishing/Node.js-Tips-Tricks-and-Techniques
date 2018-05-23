const sometext = require('sometext');
const uppercase = require('uppercase');
const http = require('http');

//create a server object: ...
http.createServer(function (req, res) {
    if (req.url.indexOf('crash') !== -1) {
        throw new Error('crash it baby');
    }
    res.write(uppercase(sometext + ' it is running')); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080