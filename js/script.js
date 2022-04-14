// Up btn
$(window).scroll(function() {
    if ($(this).scrollTop() > 250) {
		$('#upButton').css({
			opacity: 1,
			pointerEvents: 'auto'
		});
    } else {
        $('#upButton').css({
			opacity: 0.3,
			pointerEvents: 'none'
		}).stop(true, false);
    }
});
$('#upButton').click(function() {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 1000);
});
