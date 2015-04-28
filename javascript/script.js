$(document).on('ready', function(){

	$.ajax({
		type: "GET",
		cache: false,
		dataType: "json",
		url: "javascript/test.json",
		fail:function(){
			alert("AJAX Request failed");
		},
		success:function(){
			alert("AJAX Request successful");
		}
	});

});