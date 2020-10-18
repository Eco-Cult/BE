
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

