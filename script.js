var playerX = 'X';
var playerO = 'O'; // creating both players
var next = '';
var tabled = $('td'); // get td link from html page
var playerturn = $('h2'); // get the player in play to display
var reset = false;
var restart =$('#reset')

for (var i = 0; i < tabled.length; i++ ) {
	$('td').on('click', function player1(event) {
		$('.player1Turn').css('color', 'green');
		$(this).html('X');
		//player2();

		$('td').on('click', function player2(event) {
			$('.player2turn').css('color', 'blue');
			$(this).html('O');
			return playerX;
		})
	});
};
