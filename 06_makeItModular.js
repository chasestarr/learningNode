var filter = require('./06_makeItModular_module.js')

var file = process.argv[2];
var ext = process.argv[3];

var result = filter(file,ext, function callback(err, data){
	
	for(i=0;i<data.length;i++){
		console.log(data[i]);
	}
})