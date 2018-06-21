import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import {Todos} from './todos';

@controller("/site")
export class TodosController implements interfaces.Controller {

    private todosObj = new Todos();

    @httpGet("/")
    private index(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.render('index', { todos: this.todosObj.todos, complete: this.todosObj.complete })
    }

    @httpPost("/add")
    private add(req: express.Request, res: express.Response,) {
        const newTodo = req.body.newtodo;
        this.todosObj.add(newTodo);
        res.redirect('/');
    }

    @httpPost("/remove")
    private remove(req: express.Request, res: express.Response,) {
        const completeTodo = req.body.check;
        this.todosObj.remove(completeTodo);
        res.redirect('/');
    }

    @httpGet("/hello")
    private hello(@request() req: express.Request, @response() res: express.Response) {
        const {name, title, greeting: text} = req.query;
        const [first] = this.todosObj.todos;
        res.render('hello', { text: `${text.toLowerCase()} ${name}`, title: title, firstTodo: first });
    }
}