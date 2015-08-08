var net = require('net');

var server = net.createServer(function callback(socket){
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();

	month = addZero(month);
	day = addZero(day);
	timeStamp = year + "-" + month + "-" + day + " " + hour + ":" + minute;
	socket.write(timeStamp + "\n");
	socket.end();
});

server.listen(process.argv[2]);

function addZero(num){
	if(num < 10){
		num = num.toString();
		num = "0" + num;
		return num;
	}
}
