class Log {
    write(log) {
        console.log(log);
    }
}

export class Todos extends Log {

    todos = [];
    complete = [];

    constructor() {
        super();
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