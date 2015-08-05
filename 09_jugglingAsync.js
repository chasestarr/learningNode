var bl = require('bl');
var http = require('http');
var fs = require('fs');
var texts = [];

var sites = [process.argv[2],process.argv[3],process.argv[4]]; 

http.get(sites[1], function finishGet(response){
	response.pipe(bl(function(err,data, function waitCount()){
		// if err throw err;
		var text = data.toString();

		
		console.log(text);
	}))	
})


