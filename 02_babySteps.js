
var total = 0;
// console.log(process.argv.length);
for(var i = 2; i < process.argv.length; i++){
	total += Number(process.argv[i]);
	

}
	console.log(total);