(function($) {

	$.popup = $.popup || {};

	$.popup.opUnpops = function(){
		$(this).unpops();
	}

	function createPops(pop, me) {
		me.show();
		pop.addClass('pop-opened');
		if (me.closest('html').length > 0) {
			me.before('<div class="pop-mark" />');
			me.data('pop-mark', me.prev('.pop-mark'));
		}
		pop.children('.pop-main').html(me);

		pop.find('textarea:first').focus();
		pop.find('input:first').focus();

		return pop;
	}

	$.fn.pops = function(clazz) {
		var code = '<div class="pop"><div class="pop-main" /></div>';
		var popups = $('body').children('.pop:last');
		var pop = null;
		if (popups.length) {
			pop = popups.after(code).next();
		} else {
			pop = $('body').prepend(code).children('div.pop:first');
		}
		var me = $(this);
		me.addClass('pop-content').addClass(clazz);
		pop.prevAll('.pop').hide();
		return createPops(pop, me);
	}$.popup = $.popup || {};
	$.popup.opUnpops = function(){
		$(this).unpops();
	}

	$.fn.unpops = function() {
		var me = $(this).closest('.pop');
		me.prev('.pop').show();
		var main = me.find(' > .pop-main').children();
		main.hide();
		main.removeClass('pop-opened');
		main.find('.pop-head-controls .pop-close').remove();
		var mark = main.data('pop-mark');
		if (mark) {
			mark.after(main);
			mark.remove();
		}
		me.remove();
	}

})(jQuery);
