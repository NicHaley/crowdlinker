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
		}
	});

});