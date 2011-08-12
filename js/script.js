var h5d = {
	actions: ['walk', 'run', 'jump', 'dance'],

	init: function () {
		// color clicks
		$('#colors li').click(function () {
			var color = $(this).attr('class');
			//console.log('color: ', color);
			$('#colors').attr('rel', color);
			$('#parts li').attr('class', null).addClass(color);
			changeAll(color);
		});
		// part clicks
		$('#parts li').click(function () {
			var part = $(this).attr('class');
			//console.log('part: ', part);
			$('#parts').attr('rel', part);
		});
		// action clicks
		$('#actions li').click(function () {
			var action = $(this).attr('class');
			//console.log('action: ', action);
			$('#dino, #dino div').addClass(action);
		});
		// action speech
		// ?
	}

};
