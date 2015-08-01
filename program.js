
var total = 0;
// console.log(process.argv.length);
for(var i = 2; i < process.argv.length; i++){
	total += Number(process.argv[i]);
	

}
	console.log(total);
// console.log(process.argv[2]);
// console.log(process.argv[3]);
// console.log(process.argv[4]);