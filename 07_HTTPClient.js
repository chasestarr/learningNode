var http = require('http');
var fs = require('fs');

file = process.argv[2];

http.get(file, function finishGet(response){
	response.setEncoding("utf8");
	response.on("data", function(data){
		console.log(data.toString());
	});


})

