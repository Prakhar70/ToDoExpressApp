const express = require('express');
const { PORT } = require('./config/server.config');
const apirouter = require('./routes');
const bodyParser = require('body-parser');
const { response } = require('express');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

app.use('/api',apirouter);// router middleware

app.listen(PORT, ()=>{
    console.log(`stated port at ${PORT}`);
});
