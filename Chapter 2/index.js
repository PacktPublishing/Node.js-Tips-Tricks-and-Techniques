const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Todos = require('./todos');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const todosObj = new Todos();

app.post('/add', (req, res) => {
    const newTodo = req.body.newtodo;
    todosObj.add(newTodo);
    res.redirect('/');
});

app.post('/remove', (req, res) => {
    const completeTodo = req.body.check;
    todosObj.remove(completeTodo);
    res.redirect('/');
});

app.get('/', (req, res) => res.render('index', { todos: todosObj.todos, complete: todosObj.complete }));

app.get('/hello', (req, res) => {
    const {name, title, greeting: text} = req.query;
    const [first] = todosObj.todos;
    res.render('hello', { text: `${text.toLowerCase()} ${name}`, title: title, firstTodo: first });
});

//the server is listening on port 3000 for connections
app.listen(3000, () => console.log('app listening on port 3000!'));