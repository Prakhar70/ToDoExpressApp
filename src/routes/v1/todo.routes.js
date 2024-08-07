const express = require('express');
const { getTodos, createTodos } = require('../../controllers/todo.controller');
const { createTodoValidator } = require('../../validators/todo.validators');

const todoRouter = express.Router();

todoRouter.get('/', getTodos);
todoRouter.post('/', createTodoValidator, createTodos);

module.exports = todoRouter;