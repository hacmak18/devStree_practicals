const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./src/routes/index');
require('./config/db.config');
const app = express();

const port = process.env.port || 8000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('hello world');
});

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});