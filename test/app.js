$(document).ready(function() {
	var source = $("#first-template").html();
	var template = Handlebars.compile(source);

	var context = {
		title: "All about handlebars",
		body: "<p>This is a post</p>"
	};

	var data = template(context);

	$("#render_here").html(data);
	$("#render_here_again").html(data);
});