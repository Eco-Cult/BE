var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'cbc',
    password: 'ecocult',
    port:'3306',
    database:'CBC',
    multipleStatements: true
});

//exported- to be used outside this file
module.exports = connection;
