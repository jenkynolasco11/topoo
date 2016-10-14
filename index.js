// 'use strict';
var path = require('path'),
	picturespath = path.join(__dirname,'static','img'),
	pictures = require('./helpers/helpers.js')
				.readFilesSync(picturespath);

var express = require('express'),
	app = express();

//Using static folder
app.use('/static',express.static(path.join(__dirname,'static')));

//Setting views folder and views engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Handling the routing
app.get('/', function(req,res){
	res.render('index', {pics : pictures});
});


//Starting Server
app.listen(8080);