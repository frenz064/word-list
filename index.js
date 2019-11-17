var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(process.env.PORT || 5000);

$(document).ready(function(){

 /*$("#wordfinder").on('click', function (e) {
 	e.preventDefault();
  // verify data is correctly submitted then call functions to edit results.html
  var $form = $(this),url=$form.attr('action');
	var serialize = $("wordfinder").serialize();
 	var posting = $.post("results.html", serialize);
  /*var $inputs = $("#wordfinder:inputs").serializeArray();
  e.preventDefault();*/
 });
});
*/
