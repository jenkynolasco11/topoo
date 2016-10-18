'use strict';
var port = process.argv[2];
var express = require('express');
var app = express();

// Setting static and engine
app.use('/static',express.static(__dirname + '/static'));

// Setting the views and view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// Middlewares to use
var error_page = require('./middlewares/404');
var routes = require('./routes/routes');
var orders = require('./routes/orders');

// Loading middlewares
app.use('/',routes);
app.use('/',error_page);
app.use('/orders', orders);

//Starting Server
console.log('Starting server at port: ' + (port || 8080) + '...');
app.listen(port || 8080);