$(document).ready(function() {
	$("submitButton").click(function() {
		for (var i = 1; i < 10; i++) {
			var total = ($("#"+i).text()) * ($("#"+i+"val").text())
			$("#"+i+"tot").text(total);
		}
	})
})
