// console.log(process.argv[2]);

var fs = require('fs');
var file = process.argv[2];
var buf = fs.readFileSync(file);
var text = buf.toString();
var textSplit = text.split("\n");
var count = textSplit.length - 1;

console.log(count);

