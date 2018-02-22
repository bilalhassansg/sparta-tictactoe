$(function(){
	var playerX = 1; // create variable player 1
	var ttctable = $('.ttctable'); // create variable of the table
	var message = $('h2').on(function(event) {
		$(this).css('color', 'green');
	})
	displayNext(turn, player);

})

$('#startgame').on('click', function(event) {
	$(this).css('background', 'green');
})

