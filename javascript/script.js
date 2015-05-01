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
			var statsTemplate = $('#statsTemplate').html();
			var playerStatsTemplate = $('#playerStatsTemplate').html();

			Mustache.parse(playerListTemplate);
			Mustache.parse(statsTemplate);
			Mustache.parse(playerStatsTemplate);

			var renderedPLT = Mustache.render(playerListTemplate, data);
			var renderedST = Mustache.render(statsTemplate, data.stats);
			var renderedPST = Mustache.render(playerStatsTemplate, data.playerStats);

			$('#recentPlayers').html(renderedPLT);
			$('#stats').html(renderedST);
			$('#playerStats').html(renderedPST);

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

			var newPlayers = new ProgressBar.Circle('#newPlayers', {
				color: '#56606e',
				trailColor: "#d2d4d8",
				strokeWidth: 10,
				duration: 2000,
				easing: 'easeInOut'
			});

			var revisited = new ProgressBar.Circle('#revisited', {
				color: '#91c46b',
				trailColor: "#d2d4d8",
				strokeWidth: 10,
				duration: 2000,
				easing: 'easeInOut'
			});

			var commented = new ProgressBar.Circle('#commented', {
				color: '#56606e',
				trailColor: "#d2d4d8",
				strokeWidth: 10,
				duration: 2000,
				easing: 'easeInOut'
			});

			var activePlayers = new ProgressBar.Circle('#activePlayersPB', {
				color: '#91c46b',
				trailColor: "#d2d4d8",
				strokeWidth: 10,
				duration: 2000,
				easing: 'easeInOut'
			});

			newPlayers.animate(playerStats.newPlayers/100);
			revisited.animate(playerStats.revisited/100);
			commented.animate(playerStats.commented/100);
			activePlayers.animate(playerStats.activePlayers/100);		
		}
});