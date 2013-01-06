$(function(){
	// Boxes to get rounded
	var boxes = $('.round');
	$.each(boxes, function(){
		var this_ = $(this);
		var round = this_.data('round');
		this_.css({
			'-webkit-border-radius': round,
			'-moz-border-radius': round, 
			'border-radius': round
		});
	});
});