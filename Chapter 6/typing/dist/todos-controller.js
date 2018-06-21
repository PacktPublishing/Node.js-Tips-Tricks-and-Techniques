"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const inversify_express_utils_1 = require("inversify-express-utils");
const todos_1 = require("./todos");
let TodosController = class TodosController {
    constructor() {
        this.todosObj = new todos_1.Todos();
    }
    index(req, res, next) {
        res.render('index', { todos: this.todosObj.todos, complete: this.todosObj.complete });
    }
    add(req, res) {
        const newTodo = req.body.newtodo;
        this.todosObj.add(newTodo);
        res.redirect('/');
    }
    remove(req, res) {
        const completeTodo = req.body.check;
        this.todosObj.remove(completeTodo);
        res.redirect('/');
    }
    hello(req, res) {
        const { name, title, greeting: text } = req.query;
        const [first] = this.todosObj.todos;
        res.render('hello', { text: `${text.toLowerCase()} ${name}`, title: title, firstTodo: first });
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "index", null);
__decorate([
    inversify_express_utils_1.httpPost("/add"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "add", null);
__decorate([
    inversify_express_utils_1.httpPost("/remove"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "remove", null);
__decorate([
    inversify_express_utils_1.httpGet("/hello"),
    __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "hello", null);
TodosController = __decorate([
    inversify_express_utils_1.controller("/")
], TodosController);
exports.TodosController = TodosController;
//# sourceMappingURL=todos-controller.js.map