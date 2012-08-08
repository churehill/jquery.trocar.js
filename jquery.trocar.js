

(function($){

	"use strict";

	var init = function(params) {
		var $this = $(this);

		if (params.on && params.on.constructor === String) {

			$this.on(params.on, function(){
				$this.trocar('editable', true);
			});

			if (params.off && params.off.constructor === String) {
				$this.on(params.off, function(){
					$this.trocar('editable', false);
				});
			} else {
				$this.on('blur', function(){
					$this.trocar('editable', false);
				});
			}
		}
	}

	var methods = {
		editable: function(active) {

			var $this = $(this);

			if (active === true) {
				$this.attr('contentEditable', true);
				$this.addClass('trocar-editable');

				$this.trigger('editable.trocar');
			} else {
				$this.attr('contentEditable', false);
				$this.removeClass('trocar-editable');

				$this.trigger('not-editable.trocar');
			}
		}
	};



	$.fn.trocar = function (method) {

		if (methods[method]) {
			return methods[method].apply($(this), Array.prototype.slice.call(arguments, 1));
		} else if (method && method.constructor === Object) {
			return init.apply(this, arguments);
		}
	};

})(jQuery);