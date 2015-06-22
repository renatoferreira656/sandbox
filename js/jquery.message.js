(function($) {

	$.message = {};

	$.message.info = function(msg) {
		display($('<div class="info"/>').html(msg));
	};

	$.message.warn = function(msg) {
		display($('<div class="warn"/>').html(msg));
	};

	function display(corp) {
		corp.css('display', 'none');
		if(!$('#message').size()){
			$('body').append('<div id="message">');
		}

		$('#message').append(corp);

		corp.fadeIn(400, function() {
			setTimeout(function() {
				corp.fadeOut(1000);
			}, 5000);
		});
	};
})(jQuery);
