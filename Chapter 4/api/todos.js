class Log {
    write(log) {
        console.log(log);
    }
}

module.exports = class Todos extends Log {

    constructor() {
        super();
        this.todos = [];
        this.complete = [];
    }

    add(newTodo) {
        try {
            this.write(`Adding a new todo : ${newTodo}`);
            this.todos.push(newTodo);
        } catch {
            this.write(`Not possible to add : ${newTodo}`);
        }
    }

    remove(completeTodo) {
        this.write(`Remove a todo : ${completeTodo}`);
        if (typeof completeTodo === "string") {
            this.complete.push(completeTodo);
            this.todos.splice(this.todos.indexOf(completeTodo), 1);
        } else if (typeof completeTodo === "object") {
            for (let i = 0; i < completeTodo.length; i++) {     
                this.complete.push(completeTodo[i]);
                this.todos.splice(this.todos.indexOf(completeTodo[i]), 1);
            }
        }
    }
}