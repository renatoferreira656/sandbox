(function($) {
	$.validate = {};
	$.validate.validationClass = 'validate';
	
	$.fn.valstr = function() {
		return $.trim($(this).val());
	};

	$.fn.validate = function(p) {
		if (typeof (p) == 'string') {
			var func = $.validate[p];
			if (!func) {
				throw 'validate not found: ' + p;
			}
			return $(this).addClass($.validate.validationClass).validate(func);
		} else if (typeof (p) == 'function') {
			$(this).data('jquery.validate.list', p);
			return this;
		} else {
			var list = $(this).find('*').andSelf();
			var errors = [];
			for (var i = list.length - 1; i >= 0; i--) {
				var element = list.eq(i);
				var validate = element.data('jquery.validate.list');
				if (validate) {
					validate.call(window, element, errors);
				}
			}
			return errors;
		}
	};

	$.fn.clearValidate = function() {
		var element = $(this);
		
		$.validate.cleanStyle(element);
		element.removeClass($.validate.validationClass);
		element.removeData('jquery.validate.list');
	};

	$.validate.cleanStyle = function(element) {
		element.find('.error-msg').remove();
		element.removeClass('error');
	};

	$.validate.required = function(element, errors) {
		$.validate.cleanStyle(element);

		if (element.is(":visible")) {
			if (!element.find(':text,select,textarea,:password').valstr()) {
				$('<div class="error-msg">Campo obrigat\u00f3rio</div>')
						.appendTo(element);

				element.addClass('error');
				errors.push({
					type : 'required',
					element : element
				});
			}

			element.keyup(function() {
				$.validate.cleanStyle(element);
			}).change(function() {
				$.validate.cleanStyle(element);
			});
		}
	};
})(jQuery);