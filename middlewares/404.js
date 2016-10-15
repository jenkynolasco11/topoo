var express = require('express');
var router = express.Router();

//404 middleware handler
router.use(function(req,res,next){
	res.status(404);
	res.render('404');
	res.end('');
});

module.exports = router;