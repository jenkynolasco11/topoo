var express = require('express'),
	router = express.Router(),
	root = process.cwd(),
	picspath = require('path').join(root,'static','img')

router.get('/',function(req, res){
	res.render('index',{
		test : true,
		pics : require( root + '/helpers/helpers.js').readFilesSync(picspath),
	});
});

module.exports = router;