var http = require('http');
var fs = require('fs');

//create a server object:
fs.readFileSync('index.html', function(err,data) {
	if (err) {
		throw err;
	}
	http.createServer(function (req, res) {
 		res.writeHeader(200,{'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	}).listen(process.env.PORT || 5000);
  });

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

