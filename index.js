var http = require('http');
var fs = require('fs');

//create a server object:
var server = http.createServer(function (req, res) {
  		fs.readFile('./'+ res.url, function(err,data) {
	 		var dotoffset = req.url.lastIndexOf('.');
            		var mimetype = dotoffset == -1
                            ? 'text/plain'
                            : {
                                '.html' : 'text/html',
                                '.ico' : 'image/x-icon',
                                '.jpg' : 'image/jpeg',
                                '.png' : 'image/png',
                                '.gif' : 'image/gif',
                                '.css' : 'text/css',
                                '.js' : 'text/javascript'
                                }[ req.url.substr(dotoffset) ];
            res.setHeader('Content-type' , mimetype);
            res.end(data);
            console.log( req.url, mimetype );
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

