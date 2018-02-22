var playerX = 'X';
var playerO = 'O'; // creating both players
var tabled = $('td'); // get td link from html page
var playerturn = $('h2'); // get the player in play to display
var reset = false;

for (var i = 0; i < tabled.length; i++ ) {
	$('td').on('click', function(event) {
		$('.player1Turn').css('color', 'green');
		$(this).html('X');
	})
}

