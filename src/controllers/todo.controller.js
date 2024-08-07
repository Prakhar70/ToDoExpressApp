const ToDoService = require('../services/todo.service');
const ToDoRepository = require('../repositories/todo.repository');
const ToDoMySqlRepository = require('../repositories/todoMySql.repository');

const toDoService = new ToDoService(new ToDoRepository());

function getTodos(req, res){
    const response = toDoService.getAllTodos();
    return res.json({
        data: response
    });
}
function createTodos(req, res){
    const todoText = req.body.todoText;
    toDoService.create(todoText);
    return res.json({
        data:'New todo created'
    });
}

module.exports = {
    getTodos,
    createTodos
}