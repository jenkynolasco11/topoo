'use strict';
// var path = require('path'),
var port = process.argv[2],
	express = require('express'),
	app = express();

// Setting static and engine
app.use('/static',express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');


// Middlewares to use
var error_page = require('./middlewares/404'),
	routes = require('./routes/routes');

// Loading middlewares
app.use('/',routes);
app.use('/',error_page);


//Starting Server
console.log('Starting server at port: ' + (port || 8080) + '...');
app.listen(port || 8080);