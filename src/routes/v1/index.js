const express = require('express');
const homePingController = require('../../controllers/home.controller');
const todoRouter = require('./todo.routes');

const router = express.Router();

router.use('/todos', todoRouter);
router.get('/ping', homePingController);

module.exports = router;