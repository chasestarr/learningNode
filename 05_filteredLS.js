
fs = require('fs');
path = require('path');

var file = process.argv[2];
var ext = process.argv[3];

fs.readdir(file, readFinish);

function readFinish(err, list){
	for(i=0;i<list.length;i++){
		if(path.extname(list[i]) === "." + ext){
			console.log(list[i]);
		}	
	}
}

