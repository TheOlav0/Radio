$(document).ready(function(){
	$.get("https://koala.stickyutrecht.nl/api/activities", function(data) {
		console.log(data);
	});
});