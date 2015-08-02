var bl = require('bl');
var http = require('http');
var fs = require('fs');

var file = process.argv[2];

http.get(file, function finishGet(response){
	response.pipe(bl(function(err,data){
		var text = data.toString();
		var textL = text.length;

		console.log(textL);
		console.log(text);
	}))	
})
