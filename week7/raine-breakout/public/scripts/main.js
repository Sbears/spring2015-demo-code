$(function() {
	var text = $('h1').text();
	var newText = text.replace('Hi', 'Yo');
	$('h1').text(newText);
})