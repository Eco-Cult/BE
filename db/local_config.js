var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mypassword',
    port:'3306',
    database:'carbcon',
    multipleStatements: true
});

//exported- to be used outside this file
module.exports = connection;
