$(function() {
	$('.form-control')
	.mouseenter(function() {
		$('.form-control').toggleClass('expanded');
	})
	.mouseleave(function() {
		$('.form-control').removeClass('expanded');
	});
});