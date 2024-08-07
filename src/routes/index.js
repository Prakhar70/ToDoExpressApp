const express = require('express');

const router = express.Router();// express router object

const v1Router = require('../routes/v1');
const v2Router = require('../routes/v2');

router.use('/v1',v1Router);
router.use('/v2',v2Router);


module.exports = router;