var readFilesSync = function(path){
	// console.log('exported readfiles');
	var data = [];

	require('fs').readdir(path, function(err,files){
		files.forEach( file => data.push(file) );
	});

	return data;
};

exports.readFilesSync = readFilesSync;