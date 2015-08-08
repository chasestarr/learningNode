var http = require("http");
var url = require('url')

var server = http.createServer(function(req,res){
	var urlParse = url.parse(req.url,true);
	var date = new Date(urlParse.query.iso);
	res.writeHead(200, { 'Content-Type': 'application/json' });
	if(req.method == "GET"){
		console.log(urlParse);
		if(urlParse.pathname == "/api/parsetime"){
			var stamp = {
				hour: date.getHours(),
				minute: date.getMinutes(),
				second: date.getSeconds()
			}
			res.write(JSON.stringify(stamp));
			res.end();
		}else if(urlParse.pathname == "/api/unixtime"){
			var unixTimeStamp = { unixtime: date.getTime() }
			res.write(JSON.stringify(unixTimeStamp));
			res.end();
		}else{
			console.log("err")
		}
	}else{
		console.log("not GET");
	}
})
server.listen(process.argv[2]);