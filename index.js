var http = require('http');
var fs = require('fs');

//create a server object:

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err,data) {
	 res.writeHead(200,{'Content-Type': 'text/html'});
	 res.write(data);
	 /*fs.readFile('index.css', function(err2,data2) {
		res.writeHead(200,{"Content-Type": "text/css"});
		res.write(data2);*/
		res.end();
  	});
}).listen(process.env.PORT || 5000);


/*$(document).ready(function(){

 $("#wordfinder").on('click', function (e) {
 	e.preventDefault();
  // verify data is correctly submitted then call functions to edit results.html
  var $form = $(this),url=$form.attr('action');
	var serialize = $("wordfinder").serialize();
 	var posting = $.post("results.html", serialize);
  /*var $inputs = $("#wordfinder:inputs").serializeArray();
  e.preventDefault();*/
// });
//});

