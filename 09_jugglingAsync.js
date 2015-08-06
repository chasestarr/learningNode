var bl = require('bl');
var http = require('http');
 
var output = "";
var count = 0;
var outputs = [];

function httpGet(index){
	http.get(process.argv[2 + index], function(response){
		response.setEncoding('utf8');
		response.pipe(bl(function(err,data){
			if (err) return (err);
			output = data.toString();
			outputs[index] = output;
		}));
		// response.on("data", function(data){
		// 	output = data.toString();
		// })
		response.on("end", function(data){
			count++;
			if(count == 3){
				logOutputs();
			}
		})
		
	})
}

function logOutputs(){
	for(var i=0;i<3;i++){
		console.log(outputs[i]);
	}
}

for(var i=0;i<3;i++){
	httpGet(i);
	// console.log(i);
}