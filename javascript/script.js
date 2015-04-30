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
			var playerListTemplate = $('#playerListTemplate').html();
			Mustache.parse(playerListTemplate);   // optional, speeds up future uses
			var rendered = Mustache.render(playerListTemplate, data);
			$('#target').html(rendered);

			var ctx = $("#myChart").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var myLineChart = new Chart(ctx).Line(data.activePlayers, {
				scaleShowVerticalLines: false,
				bezierCurve: false
			});
		}
	});
});