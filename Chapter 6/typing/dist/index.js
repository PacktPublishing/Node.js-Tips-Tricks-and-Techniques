"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
require("./todos-controller");
// set up container
let container = new inversify_1.Container();
// create server
let server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
    app.use(express.static("public"));
    app.set('view engine', 'ejs');
});
const app = server.build();
//the server is listening on port 3000 for connections
app.listen(3000, () => console.log('app listening on port 3000!'));
//# sourceMappingURL=index.js.map