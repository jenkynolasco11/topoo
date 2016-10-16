var readFilesSync = function(path){
	console.log('exported readfiles');
	if(path) return require('fs').readdirSync(path);
	
	return '';
};

exports.readFilesSync = readFilesSync;