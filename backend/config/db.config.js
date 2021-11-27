const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'devstree',
});

dbConn.connect(function (error) {
    if (error) throw error;
    global.dbConn = dbConn;
    console.log('Database connected');
});

module.exports = dbConn;