var fs = require('fs');
var path = require('path');
var result = [];

module.exports = function filter(file,ext,callback){
	fs.readdir(file, function readFinish(err, list){

		if(err) return callback(err);
		for(i=0;i<list.length;i++){
		if(path.extname(list[i]) === "." + ext){
			result.push(list[i]);
			}	
		}
	callback(null,result);
	});
}