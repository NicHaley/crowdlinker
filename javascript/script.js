$(document).on('ready', function(){

	$.ajax({
		type: "GET",
		cache: false,
		dataType: "json",
		url: "test.json",
		error:function(){
			console.log("An error occurred");
		},
		success:function(data){
			console.log("AJAX Request successful");
			console.log(data.recentPlayer[3].lastName);

			var template = $('#playerListTemplate').html();
			Mustache.parse(template);   // optional, speeds up future uses
			var rendered = Mustache.render(template, data);
			$('#target').html(rendered);
		}
	});

});