var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.readFile('index.html', function(err,data) {
	 res.write(data);
	res.end();
  	});
}).listen(process.env.PORT || 5000);


window.addEventListener('load', function () {
 $("#wordfinder").on('click', function (e) {
 	e.preventDefault();
  // verify data is correctly submitted then call functions to edit results.html
  var $form = $(this),url=$form.attr('action');
	var serialize = $("wordfinder").serialize();
 	var posting = $.post("results.html", serialize);
  /*var $inputs = $("#wordfinder:inputs").serializeArray();
  e.preventDefault();*/
 });
});

