$(function() {
	$('#demo-navbar .dropdown-menu a').click(function() {
		var href = $(this).attr('href'); //取到链接属性
		$("#tab-list a[href='" + href + "']").tab('show');
	});
	$('#demo-navbar .sketch a').click(function(e) {
		e.preventDefault();
		$(document).scrollTop($("#summary-container").offset().top - 70);
	});
})