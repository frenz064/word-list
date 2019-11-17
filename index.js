var http = require('http');
var fs = require('fs');

var html = fs.readFileSync('index.html');
var result = fs.readFileSync('results.html');

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(html);
}).listen(process.env.PORT || 5000);
