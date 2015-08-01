
var fs = require('fs');
var file = process.argv[2];
var count = undefined;

fs.readFile(file, readFinish);

function readFinish(err, buf){
	var text = buf.toString();
	var textSplit = text.split("\n");
	var count = textSplit.length - 1;
	console.log(count);
}

