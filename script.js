var playerX = 'X';
var playerO = 'O'; // creating both players


$('#startgame').on('click', function(event) {
	$(this).css('background', 'green');
	if(playerX == true){
		$('td').on("click", function(event) {
			$(this).html('X');
		})
	}
})

