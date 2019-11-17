const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
$(document).ready(function(){

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
