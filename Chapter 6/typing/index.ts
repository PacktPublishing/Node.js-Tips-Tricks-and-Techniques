import "reflect-metadata";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import { Todos } from './todos';
import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';

import "./todos-controller";

// set up container
let container = new Container();

// create server
let server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
    app.use(express.static("public"));
    app.set('view engine', 'ejs');
});

const app = server.build();

//the server is listening on port 3000 for connections
app.listen(3000, () => console.log('app listening on port 3000!'));