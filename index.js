app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

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
