$(document).on('ready', function(){

	var newPlayers = new ProgressBar.Circle('#newPlayers', {
		color: '#ea4123',
		trailColor: "#eaeaea",
		strokeWidth: 10,
		duration: 2000,
		easing: 'easeInOut'
	});

	var revisited = new ProgressBar.Circle('#revisited', {
		color: '#ea4123',
		trailColor: "#eaeaea",
		strokeWidth: 10,
		duration: 2000,
		easing: 'easeInOut'
	});

	var commented = new ProgressBar.Circle('#commented', {
		color: '#ea4123',
		trailColor: "#eaeaea",
		strokeWidth: 10,
		duration: 2000,
		easing: 'easeInOut'
	});

	var activePlayers = new ProgressBar.Circle('#activePlayersPB', {
		color: '#ea4123',
		trailColor: "#eaeaea",
		strokeWidth: 10,
		duration: 2000,
		easing: 'easeInOut'
	});

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

			var chart1 = $("#activePlayers").get(0).getContext("2d");
			var chart2 = $("#activeTournaments").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			new Chart(chart1).Line(data.activePlayers, {
				scaleShowVerticalLines: false,
				bezierCurve: false
			});

			new Chart(chart2).Line(data.activeTournaments, {
				scaleShowVerticalLines: false,
				bezierCurve: false
			});

			progressBarAnim(data.playerStats);
		}
	});

	function progressBarAnim(playerStats){
		newPlayers.animate(playerStats.newPlayers/100);
		revisited.animate(playerStats.revisited/100);
		commented.animate(playerStats.commented/100);
		activePlayers.animate(playerStats.activePlayers/100);
		console.log(playerStats.activePlayers/100);
	}
});