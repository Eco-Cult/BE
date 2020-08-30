
var con = require('./db/ec2_config');
var app = require('./server/port');
var _ = require('underscore');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
var async = require('async');


//API to get food emission for all the raw food items - Data table used is food_information
app.get("/api/food_Carbon_Emission", function(req, res) {
    var sql = `select * from foodprint`;
//     sqlQueryRun(sql, res);
    con.query(sql, [true], (error, res, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(res);
});

con.end();
});
