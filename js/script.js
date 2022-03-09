// href
$("body").on('click', '[href*="#"]', function (e) {
	var fixed_offset = $('header nav').height() + 30;
	$('html,body').stop().animate({
		scrollTop: $(this.hash).offset().top - fixed_offset
	}, 1000);
	e.preventDefault();
});

// scroll fixed nav
$(window).scroll(function () {
	if ($(window).width() > 799) {
		if ($(window).scrollTop() > $('header').height()) {
			$('header nav').addClass('fixed');
		} else {
			$('header nav').removeClass('fixed');
		}
	}
});
if ($(window).width() <= 799) {
	$('header nav').addClass('fixed');
}

// animation block
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('el-show');
		}
	});
}
let options = {
	threshold: [0.3]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.el');

for (let elm of elements) {
	observer.observe(elm);
}